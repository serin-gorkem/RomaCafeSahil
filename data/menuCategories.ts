import type { LocalizedText } from "./i18n";

export type MenuCategory = {
  title: LocalizedText;
  slug: string;
  href: string;
  image: string;
  icon: string;
};

export const menuCategories = [
  {
    title: {
      en: "Milkshakes",
      tr: "Milkshake Çeşitleri",
    },
    slug: "milkshakes",
    href: "/milkshakes",
    image: "/images/categories/milkshake.png",
    icon: "/icons/menu/milkshakes.svg",
  },
  {
    title: {
      en: "Frozens",
      tr: "Frozen Çeşitleri",
    },
    slug: "frozens",
    href: "/frozens",
    image: "/images/categories/frozens.png",
    icon: "/icons/menu/frozens.svg",
  },
  {
    title: {
      en: "Cold Coffees",
      tr: "Soğuk Kahveler",
    },
    slug: "soguk-kahveler",
    href: "/soguk-kahveler",
    image: "/images/categories/cold-coffees.png",
    icon: "/icons/menu/soguk-kahveler.svg",
  },
  {
    title: {
      en: "Cold Alternatives",
      tr: "Soğuk Alternatifler",
    },
    slug: "soguk-alternatifler",
    href: "/soguk-alternatifler",
    image: "/images/categories/cold-alternatives.png",
    icon: "/icons/menu/soguk-alternatifler.svg",
  },
  {
    title: {
      en: "Matcha",
      tr: "Matcha",
    },
    slug: "matcha",
    href: "/matcha",
    image: "/images/categories/matcha.png",
    icon: "/icons/menu/matcha.svg",
  },
  {
    title: {
      en: "Hot Coffees",
      tr: "Sıcak Kahveler",
    },
    slug: "sicak-kahveler",
    href: "/sicak-kahveler",
    image: "/images/categories/hot-coffees.png",
    icon: "/icons/menu/sicak-kahveler.svg",
  },
  {
    title: {
      en: "Herbal Tea",
      tr: "Bitki Çayları",
    },
    slug: "bitki-caylari",
    href: "/bitki-caylari",
    image: "/images/categories/herbal-tea.png",
    icon: "/icons/menu/bitki-caylari.svg",
  },
  {
    title: {
      en: "Ice Creams",
      tr: "Dondurmalar",
    },
    slug: "dondurmalar",
    href: "/dondurmalar",
    image: "/images/categories/ice-creams.png",
    icon: "/icons/menu/dondurmalar.svg",
  },
  {
    title: {
      en: "Ice Cream Desserts",
      tr: "Dondurmalı Tatlılar",
    },
    slug: "dondurmali-tatlilar",
    href: "/dondurmali-tatlilar",
    image: "/images/categories/ice-cream-desserts.png",
    icon: "/icons/menu/dondurmali-tatlilar.svg",
  },
  {
    title: {
      en: "Waffle",
      tr: "Waffle",
    },
    slug: "waffle",
    href: "/waffle",
    image: "/images/categories/waffle.png",
    icon: "/icons/menu/waffle.svg",
  },
] as const;

export type MenuCategorySlug = (typeof menuCategories)[number]["slug"];