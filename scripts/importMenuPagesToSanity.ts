import { createReadStream, existsSync } from "fs";
import path from "path";
import { config as loadEnv } from "dotenv";
import { createClient } from "next-sanity";

import { menuCategories } from "../data/menuCategories";
import { menuPages } from "../data/menuPages";

loadEnv({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
}

if (!token) {
  throw new Error("Missing SANITY_API_WRITE_TOKEN in .env.local");
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-05-04",
  useCdn: false,
});

type LocalizedText = {
  en: string;
  tr: string;
};

function parsePrice(price?: string): number | undefined {
  if (!price) return undefined;

  const normalized = price
    .replace("₺", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim();

  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : undefined;
}

function splitNameAndCalories(name: string): {
  cleanName: string;
  calories?: number;
} {
  const match = name.match(/\s*-\s*(\d+)\s*kcal\s*$/i);

  if (!match) {
    return {
      cleanName: name.trim(),
    };
  }

  return {
    cleanName: name.replace(match[0], "").trim(),
    calories: Number(match[1]),
  };
}

function splitLocalizedNameAndCalories(name: LocalizedText): {
  cleanName: LocalizedText;
  calories?: number;
} {
  const enParsed = splitNameAndCalories(name.en);
  const trParsed = splitNameAndCalories(name.tr);

  return {
    cleanName: {
      en: enParsed.cleanName,
      tr: trParsed.cleanName,
    },
    calories: enParsed.calories ?? trParsed.calories,
  };
}

function makeKey(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 80);
}

async function uploadImageFromPublic(imagePath?: string) {
  if (!imagePath) return undefined;

  const normalizedPath = imagePath.startsWith("/")
    ? imagePath.slice(1)
    : imagePath;

  const absolutePath = path.join(process.cwd(), "public", normalizedPath);

  if (!existsSync(absolutePath)) {
    console.warn(`Image not found, skipping: ${imagePath}`);
    return undefined;
  }

  const filename = path.basename(absolutePath);

  const asset = await client.assets.upload(
    "image",
    createReadStream(absolutePath),
    {
      filename,
    },
  );

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

async function importMenu() {
  console.log("Starting CafeRoma menu import...");

  for (const [slug, page] of Object.entries(menuPages)) {
    console.log(`\nImporting category: ${slug}`);

    const categorySource = menuCategories.find(
      (category) => category.slug === slug,
    );

    const blockRefs = [];

    for (const [blockIndex, block] of page.blocks.entries()) {
      const itemRefs = [];

      for (const [itemIndex, item] of block.items.entries()) {
        const parsedName = splitLocalizedNameAndCalories(item.name);

        const itemId = `menuItem.${block.id}.${itemIndex + 1}`;

        await client.createOrReplace({
          _id: itemId,
          _type: "menuItem",
          name: parsedName.cleanName,
          description: item.description,
          price: parsePrice(item.price),
          calories: parsedName.calories,
          order: itemIndex + 1,
          isActive: true,
        });

        itemRefs.push({
          _key: makeKey(itemId),
          _type: "reference",
          _ref: itemId,
        });
      }

      const blockId = `menuBlock.${block.id}`;
      const blockImage = await uploadImageFromPublic(block.image);

      await client.createOrReplace({
        _id: blockId,
        _type: "menuBlock",
        title: block.title,
        subtitle: block.subtitle,
        image: blockImage,
        imageAlt: block.imageAlt,
        imageSide: block.imageSide || "left",
        items: itemRefs,
        order: blockIndex + 1,
        isActive: true,
      });

      blockRefs.push({
        _key: makeKey(blockId),
        _type: "reference",
        _ref: blockId,
      });
    }

    const categoryId = `menuCategory.${slug}`;
    const cardImage = await uploadImageFromPublic(categorySource?.image);
    const heroImage = await uploadImageFromPublic(page.blocks[0]?.image);

    await client.createOrReplace({
      _id: categoryId,
      _type: "menuCategory",
      title: page.title,
      subtitle: page.subtitle,
      slug: {
        _type: "slug",
        current: page.slug,
      },
      cardImage,
      heroImage,
      blocks: blockRefs,
      order: Object.keys(menuPages).indexOf(slug) + 1,
      isActive: true,
    });

    console.log(`Imported category: ${slug}`);
  }

  console.log("\nCafeRoma menu import completed.");
}

importMenu().catch((error) => {
  console.error(error);
  process.exit(1);
});
