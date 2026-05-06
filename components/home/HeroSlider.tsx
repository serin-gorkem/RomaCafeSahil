"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { getLocalizedText, type Language } from "../../data/i18n";
import { urlFor } from "../../sanity/lib/image";
import type { SanityHomePage } from "../../sanity/lib/types";
import { useLanguage } from "../i18n/LanguageProvider";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const fallbackSlides = [
  {
    src: "/images/hero-1.webp",
    alt: "Kuşadası sahil manzarası",
  },
  {
    src: "/images/hero-2.webp",
    alt: "Kuşadası gece manzarası",
  },
  {
    src: "/images/hero-3.webp",
    alt: "Kuşadası marina manzarası",
  },
];

type HeroSliderProps = {
  heroImages?: SanityHomePage["heroImages"];
};

function getSanitySlideAlt(
  image: NonNullable<SanityHomePage["heroImages"]>[number],
  language: Language
) {
  if (image.alt) {
    return getLocalizedText(image.alt, language);
  }

  return "Cafe Roma hero image";
}

export default function HeroSlider({ heroImages = [] }: HeroSliderProps) {
  const { language } = useLanguage();

  const sanitySlides =
    heroImages?.map((image) => ({
      src: urlFor(image)
        .width(1920)
        .height(1080)
        .fit("crop")
        .format("webp")
        .quality(85)
        .url(),
      alt: getSanitySlideAlt(image, language),
    })) ?? [];

  const slides = sanitySlides.length > 0 ? sanitySlides : fallbackSlides;

  return (
    <section className="relative h-[400px] w-full overflow-hidden bg-black md:h-[720px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={slides.length > 1}
        speed={1200}
        autoplay={
          slides.length > 1
            ? {
                delay: 3500,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={
          slides.length > 1
            ? {
                clickable: true,
              }
            : false
        }
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`${slide.src}-${index}`}
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-slider-image object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 z-10 mt-16 flex flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-3 text-sm font-semibold tracking-[0.45em]">KUŞADASI</p>

        <h1 className="font-serif text-5xl font-light tracking-wide md:text-7xl">
          Cafe Roma
        </h1>
      </div>
    </section>
  );
}