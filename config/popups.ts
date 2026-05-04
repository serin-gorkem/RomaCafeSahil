// config/popups.ts

export type PopupConfig = {
  id: string;
  routes: string[];
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  image?: string;
  delay?: number;
};

export const popups: PopupConfig[] = [
  {
    id: "homepage-campaign",
    routes: ["/"],
    title: "Özel Kampanya",
    description: "Bugüne özel fırsatları kaçırmayın.",
    buttonText: "Menüyü İncele",
    buttonHref: "/",
    image: "/images/popups/home-campaign.webp",
    delay: 800,
  },
  {
    id: "breakfast-popup",
    routes: ["/milkshakes"],
    title: "Kahvaltı Keyfi",
    description: "Güne özel kahvaltı seçeneklerimizi keşfedin.",
    buttonText: "Kahvaltıları Gör",
    buttonHref: "/milkshakes",
    image: "/images/popups/breakfast.webp",
    delay: 800,
  },
  {
    id: "burger-popup",
    routes: ["/bitki-caylari"],
    title: "Burger Zamanı",
    description: "Burger menülerimizi ve özel lezzetleri inceleyin.",
    buttonText: "Burgerleri Gör",
    buttonHref: "/bitki-caylari",
    image: "/images/popups/burger.webp",
    delay: 800,
  },
];