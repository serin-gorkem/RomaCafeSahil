import Footer from "../../components/home/Footer";
import HeroSlider from "../../components/home/HeroSlider";
import MenuCategories from "../../components/home/MenuCategories";
import Navbar from "../../components/home/Navbar";
import {
  HOME_PAGE_QUERY,
  MENU_CATEGORIES_QUERY,
} from "../../sanity/lib/queries";
import { serverClient } from "../../sanity/lib/serverClient";
import type {
  SanityHomePage,
  SanityMenuCategory,
} from "../../sanity/lib/types";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [categories, homePage] = await Promise.all([
    serverClient.fetch<SanityMenuCategory[]>(
      MENU_CATEGORIES_QUERY,
      {},
      {
        cache: "no-store",
      }
    ),
    serverClient.fetch<SanityHomePage | null>(
      HOME_PAGE_QUERY,
      {},
      {
        cache: "no-store",
      }
    ),
  ]);

  return (
    <main>
      <Navbar />
      <HeroSlider heroImages={homePage?.heroImages ?? []} />
      <MenuCategories
        categories={categories}
        menuSectionTitle={homePage?.menuSectionTitle}
      />
      <Footer />
    </main>
  );
}