"use client";

import Image from "next/image";
import Link from "next/link";

import { UI_TEXT, getLocalizedText } from "../../data/i18n";
import { urlFor } from "../../sanity/lib/image";
import type { SanityMenuCategory } from "../../sanity/lib/types";
import { useLanguage } from "../i18n/LanguageProvider";
import type { LocalizedText } from "../../data/i18n";

type MenuCategoriesProps = {
  categories: SanityMenuCategory[];
  menuSectionTitle?: LocalizedText;
};

function MenuIcon() {
  return (
    <div className="group mx-auto mb-6 flex h-29.5 w-29.5 items-center justify-center rounded-full bg-neutral-50 transition duration-300 hover:bg-black">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-neutral-200 bg-[repeating-linear-gradient(45deg,#f5f5f5_0,#f5f5f5_2px,transparent_2px,transparent_10px)] transition duration-300 group-hover:border-black group-hover:bg-none">
        <svg
          viewBox="0 0 100 100"
          className="h-12 w-12 text-black transition duration-300 group-hover:text-white"
          aria-hidden="true"
        >
          <path
            d="M22 25L50 38L78 25V75L50 88L22 75V25Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M50 38V88"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M33 44L43 49M33 58L43 63M67 44L57 49M67 58L57 63"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function MenuCategories({
  categories,
  menuSectionTitle,
}: MenuCategoriesProps) {
  const { language } = useLanguage();

  const t = (text: keyof typeof UI_TEXT) =>
    getLocalizedText(UI_TEXT[text], language);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/caferoma-bg.webp')] bg-size-[100%_auto] bg-top bg-repeat-y lg:bg-[url('/images/caferoma-bg-yatay.webp')]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <MenuIcon />

        <p className="font-serif text-base uppercase tracking-normal text-white">
          {menuSectionTitle
            ? getLocalizedText(menuSectionTitle, language)
            : t("menuCategories")}
        </p>

        {categories.length === 0 && (
          <div className="mt-12 rounded-2xl bg-white/90 p-6 text-center text-neutral-800">
            Menü kategorileri şu anda yüklenemiyor.
          </div>
        )}

        {categories.length > 0 && (
          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {categories.map((category) => {
              const imageUrl = category.cardImage
                ? urlFor(category.cardImage)
                    .width(1200)
                    .height(800)
                    .fit("crop")
                    .format("webp")
                    .quality(82)
                    .url()
                : "/images/cafe-roma-logo.webp";

              return (
                <Link
                  key={category._id}
                  href={`/${category.slug}`}
                  className="group relative block h-52.5 overflow-hidden bg-black md:h-80"
                >
                  <Image
                    src={imageUrl}
                    alt={getLocalizedText(category.title, language)}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35 transition duration-300 group-hover:bg-white/25" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center transition-transform duration-300 group-hover:-translate-y-6">
                    <span className="text-3xl font-black leading-none tracking-tight text-white filter-[drop-shadow(0_5px_5px_rgba(0,0,0,0.75))] md:text-3xl">
                      {getLocalizedText(category.title, language)}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 flex h-18 translate-y-full items-center justify-center bg-black/75 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93" />
                      <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
