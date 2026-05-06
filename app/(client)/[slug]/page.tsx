import { notFound } from "next/navigation";
import MenuCategoryPage from "../../../components/menu/MenuCategoryPage";
import { MENU_CATEGORY_BY_SLUG_QUERY } from "../../../sanity/lib/queries";
import { serverClient } from "../../../sanity/lib/serverClient";
import type { SanityMenuCategory } from "../../../sanity/lib/types";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const page = await serverClient.fetch<SanityMenuCategory | null>(
    MENU_CATEGORY_BY_SLUG_QUERY,
    { slug },
    { cache: "no-store" }
  );

  if (!page) {
    return {
      title: "Menu | Cafe Roma",
      description: "Cafe Roma QR Menu",
    };
  }

  return {
    title: `${page.title.en} | Cafe Roma`,
    description: page.subtitle?.en ?? "Cafe Roma QR Menu",
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const page = await serverClient.fetch<SanityMenuCategory | null>(
    MENU_CATEGORY_BY_SLUG_QUERY,
    { slug },
    { cache: "no-store" }
  );

  if (!page) {
    notFound();
  }

  return <MenuCategoryPage page={page} />;
}