
import type { LocalizedText } from "../../data/i18n";

export type SanityImageSource = {
  _type?: "image";
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  hotspot?: unknown;
  crop?: unknown;
};

export type SanityMenuItem = {
  _id: string;
  name: LocalizedText;
  description?: LocalizedText;
  price?: number;
  calories?: number;
  order?: number;
};

export type SanityMenuBlock = {
  _id: string;
  title?: LocalizedText;
  subtitle?: LocalizedText;
  image?: SanityImageSource;
  imageAlt?: LocalizedText;
  imageSide?: "left" | "right";
  order?: number;
  items?: SanityMenuItem[];
};

export type SanityMenuCategory = {
  _id: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  slug: string;
  cardImage?: SanityImageSource;
  heroImage?: SanityImageSource;
  order?: number;
  blocks?: SanityMenuBlock[];
};

export type SanityHomePage = {
  _id: string;
  heroImages?: Array<
    SanityImageSource & {
      alt?: LocalizedText;
    }
  >;
  menuSectionTitle?: LocalizedText;
};