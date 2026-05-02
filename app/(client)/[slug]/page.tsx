import { notFound } from "next/navigation";
import MenuCategoryPage from "../../../components/menu/MenuCategoryPage";
import { menuCategories } from "../../../data/menuCategories";
import { menuPages } from "../../../data/menuPages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return menuCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = menuPages[slug as keyof typeof menuPages];
  if (!page) {
    return {
      title: "Menu | Cafe Roma",
      description: "Cafe Roma QR Menu",
    };
  }

  return {
    title: `${page.title.en} | Cafe Roma`,
    description: page.subtitle.en,
  };

}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = menuPages[slug as keyof typeof menuPages];

  if (!page) {
    notFound();
  }

  return <MenuCategoryPage page={page} />;
}