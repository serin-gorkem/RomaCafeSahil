import Image from "next/image";
import Link from "next/link";

const footerBadges = [
  {
    src: "/images/footer/allergen-notice.webp",
    alt: "Allergen Notice - Alerjen Uyarısı",
  },
  {
    src: "/images/footer/local-products.webp",
    alt: "Local Products Notice - Yerli Ürünler Bilgilendirmesi",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-10 px-5 py-16 md:flex-row md:gap-20 md:py-24">
        {footerBadges.map((badge) => (
          <div
            key={badge.src}
            className="relative aspect-square w-full max-w-50 md:max-w-115"
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              fill
              sizes="(min-width: 768px) 360px, 70vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-200 py-6 text-center">
        <p className="font-serif text-sm text-neutral-600">
          © {currentYear} Cafe Roma Kuşadası
        </p>
      </div>
      <div className="border-t border-neutral-200 py-6 text-center">
        <p className="font-serif text-sm text-neutral-600">
          © 2026 Bu Menu{" "}
          <Link className="text-blue-600" href="https://fionmedya.com/">
            Fion Medya {" "}
          </Link>
          tarafından hazırlanmıştır. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
