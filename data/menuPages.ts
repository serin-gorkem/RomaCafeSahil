import type { LocalizedText } from "./i18n";
import type { MenuCategorySlug } from "./menuCategories";

export type MenuItem = {
  name: LocalizedText;
  description?: LocalizedText;
  price?: string;
};

export type MenuContentBlock = {
  id: string;
  title?: LocalizedText;
  subtitle?: LocalizedText;
  image?: string;
  imageAlt?: LocalizedText;
  imageSide?: "left" | "right";
  items: MenuItem[];
};

export type MenuPage = {
  slug: MenuCategorySlug;
  title: LocalizedText;
  subtitle: LocalizedText;
  blocks: MenuContentBlock[];
};

export const menuPages: Record<MenuCategorySlug, MenuPage> = {
  milkshakes: {
    slug: "milkshakes",
    title: {
      en: "Milkshakes",
      tr: "Milkshake Çeşitleri",
    },
    subtitle: {
      en: "Milkshakes",
      tr: "Milkshake Çeşitleri",
    },
    blocks: [
      {
        id: "milkshakes-main",
        title: {
          en: "Milkshakes",
          tr: "Milkshake Çeşitleri",
        },
        subtitle: {
          en: "Milkshakes",
          tr: "Milkshake Çeşitleri",
        },
        image: "/images/menu-blocks/milkshakes.png",
        imageAlt: {
          en: "Representative image of milkshake varieties",
          tr: "Milkshake çeşitleri temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Chocolate Milkshake",
              tr: "Çikolatalı Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Caramel Milkshake",
              tr: "Karamelli Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Oreo Milkshake",
              tr: "Oreo parçacıklı Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Banana Milkshake",
              tr: "Muzlu Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Strawberry Milkshake",
              tr: "Çilekli Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Pineapple Milkshake",
              tr: "Ananaslı Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Mango Milkshake",
              tr: "Mangolu Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Bluesky Milkshake",
              tr: "Mavi Milkshake",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Melon Milkshake",
              tr: "Kavunlu Milkshake",
            },
            price: "₺320",
          },
        ],
      },
    ],
  },

  frozens: {
    slug: "frozens",
    title: {
      en: "Frozens",
      tr: "Frozen Çeşitleri",
    },
    subtitle: {
      en: "Frozens",
      tr: "Frozen Çeşitleri",
    },
    blocks: [
      {
        id: "frozens-main",
        title: {
          en: "Frozens",
          tr: "Frozen Çeşitleri",
        },
        subtitle: {
          en: "Frozens",
          tr: "Frozen Çeşitleri",
        },
        image: "/images/menu-blocks/frozens.png",
        imageAlt: {
          en: "Representative image of frozen drink varieties",
          tr: "Frozen çeşitleri temsili görsel",
        },
        imageSide: "left",
        items: [
          {
            name: {
              en: "Strawberry Frozen",
              tr: "Çilekli Frozen",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Watermelon Frozen",
              tr: "Karpuzlu Frozen",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Lemon Frozen",
              tr: "Limonlu Frozen",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Blackberry Frozen",
              tr: "Karadutlu Frozen",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Melon Frozen",
              tr: "Kavunlu Frozen",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Peach Frozen",
              tr: "Şeftalili Frozen",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Kiwi Frozen",
              tr: "Kivili Frozen",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Cherry Frozen",
              tr: "Vişneli Frozen",
            },
            price: "₺300",
          },
        ],
      },
    ],
  },

  "soguk-kahveler": {
    slug: "soguk-kahveler",
    title: {
      en: "Cold Coffees",
      tr: "Soğuk Kahveler",
    },
    subtitle: {
      en: "Cold Coffees",
      tr: "Soğuk Kahveler",
    },
    blocks: [
      {
        id: "cold-coffees-classics",
        title: {
          en: "Cold Coffees",
          tr: "Soğuk Kahveler",
        },
        subtitle: {
          en: "Cold Coffees",
          tr: "Soğuk Kahveler",
        },
        image: "/images/menu-blocks/soguk-kahveler-1.png",
        imageAlt: {
          en: "Representative image of cold coffees",
          tr: "Soğuk kahveler temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Espressofredo",
              tr: "Espressofredo",
            },
            price: "₺230",
          },
          {
            name: {
              en: "Ice Coffee",
              tr: "Soğuk Kahve",
            },
            price: "₺290",
          },
          {
            name: {
              en: "Ice Latte",
              tr: "Soğuk Latte",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Ice Mocha",
              tr: "Soğuk Mocha",
            },
            price: "₺250",
          },
          {
            name: {
              en: "Ice Chocolate",
              tr: "Soğuk Çikolata",
            },
            price: "₺250",
          },
        ],
      },
      {
        id: "cold-coffees-specials",
        title: {
          en: "Frappe & Specials",
          tr: "Frappe ve Özel Kahveler",
        },
        subtitle: {
          en: "Frappe & Specials",
          tr: "Frappe ve Özel Kahveler",
        },
        image: "/images/menu-blocks/soguk-kahveler-2.png",
        imageAlt: {
          en: "Representative image of frappe, affogato and special cold coffees",
          tr: "Frappe, affogato ve özel soğuk kahveler temsili görsel",
        },
        imageSide: "left",
        items: [
          {
            name: {
              en: "Ice Americano",
              tr: "Ice Americano",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Frappe",
              tr: "Frappe Sade",
            },
            price: "₺200",
          },
          {
            name: {
              en: "Frappe with Milk",
              tr: "Frappe Sütlü",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Ice Cappuccino",
              tr: "Soğuk Cappuccino",
            },
            price: "₺250",
          },
          {
            name: {
              en: "Affogato",
              tr: "Affogato",
            },
            price: "₺300",
          },
          {
            name: {
              en: "Freddoccino",
              tr: "Freddoccino",
            },
            price: "₺300",
          },
        ],
      },
    ],
  },

  "soguk-alternatifler": {
    slug: "soguk-alternatifler",
    title: {
      en: "Cold Alternatives",
      tr: "Soğuk Alternatifler",
    },
    subtitle: {
      en: "Cold Alternatives",
      tr: "Soğuk Alternatifler",
    },
    blocks: [
      {
        id: "cold-alternatives-main",
        title: {
          en: "Cold Alternatives",
          tr: "Soğuk Alternatifler",
        },
        subtitle: {
          en: "Cold Alternatives",
          tr: "Soğuk Alternatifler",
        },
        image: "/images/menu-blocks/soguk-alternatifler-1.png",
        imageAlt: {
          en: "Representative image of cold alternative drinks",
          tr: "Soğuk alternatif içecekler temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Mojito",
              tr: "Mojito",
            },
            price: "₺350",
          },
          {
            name: {
              en: "Cool Lime",
              tr: "Cool Lime",
            },
            price: "₺250",
          },
          {
            name: {
              en: "Exotic",
              tr: "Egzotik",
            },
            price: "₺400",
          },
          {
            name: {
              en: "Lemonade",
              tr: "Limonata",
            },
            price: "₺180",
          },
          {
            name: {
              en: "Strawberry Lemonade",
              tr: "Çilekli Limonata",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Smoothy",
              tr: "Smoothy",
            },
            price: "₺330",
          },
          {
            name: {
              en: "Churcill",
              tr: "Churcill",
            },
            price: "₺180",
          },
        ],
      },
      {
        id: "cold-alternatives-fresh",
        title: {
          en: "Fresh & Premium",
          tr: "Taze ve Premium İçecekler",
        },
        subtitle: {
          en: "Fresh & Premium",
          tr: "Taze ve Premium İçecekler",
        },
        image: "/images/menu-blocks/soguk-alternatifler-2.png",
        imageAlt: {
          en: "Representative image of fresh squeezed and premium drinks",
          tr: "Taze sıkım ve premium içecekler temsili görsel",
        },
        imageSide: "left",
        items: [
          {
            name: {
              en: "Fresh Orange Juice",
              tr: "Sıkma Portakal Suyu",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Pomegranate Juice",
              tr: "Sıkma Nar Suyu",
            },
            price: "₺250",
          },
          {
            name: {
              en: "Uludağ Premium Mineral Water",
              tr: "Uludağ Premium Soda",
            },
            price: "₺140",
          },
          {
            name: {
              en: "Uludağ Premium Bottle Water",
              tr: "Uludağ Premium Cam Şişe Su",
            },
            price: "₺60",
          },
        ],
      },
    ],
  },

  matcha: {
    slug: "matcha",
    title: {
      en: "Matcha",
      tr: "Matcha",
    },
    subtitle: {
      en: "Matcha",
      tr: "Matcha",
    },
    blocks: [
      {
        id: "matcha-main",
        title: {
          en: "Matcha",
          tr: "Matcha",
        },
        subtitle: {
          en: "Matcha",
          tr: "Matcha",
        },
        image: "/images/menu-blocks/matcha.png",
        imageAlt: {
          en: "Representative image of matcha varieties",
          tr: "Matcha çeşitleri temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Matcha Tea",
              tr: "Matcha Çayı",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Matcha Latte",
              tr: "Matcha Latte",
            },
            price: "₺270",
          },
          {
            name: {
              en: "Strawberry Matcha Latte",
              tr: "Çilekli Matcha Latte",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Vanilla Cream Matcha",
              tr: "Vanilya Kremalı Matcha",
            },
            price: "₺320",
          },
          {
            name: {
              en: "Coconut Matcha",
              tr: "Hindistan Cevizli Matcha",
            },
            price: "₺330",
          },
          {
            name: {
              en: "Mango Matcha Latte",
              tr: "Mango Matcha Latte",
            },
            price: "₺330",
          },
        ],
      },
    ],
  },

  "sicak-kahveler": {
    slug: "sicak-kahveler",
    title: {
      en: "Hot Coffees",
      tr: "Sıcak Kahveler",
    },
    subtitle: {
      en: "Hot Coffees",
      tr: "Sıcak Kahveler",
    },
    blocks: [
      {
        id: "hot-coffees-espresso",
        title: {
          en: "Espresso Based Coffees",
          tr: "Espresso Bazlı Kahveler",
        },
        subtitle: {
          en: "Espresso Based Coffees",
          tr: "Espresso Bazlı Kahveler",
        },
        image: "/images/menu-blocks/sicak-kahveler-1.png",
        imageAlt: {
          en: "Representative image of espresso based hot coffees",
          tr: "Espresso bazlı sıcak kahveler temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Espresso",
              tr: "Espresso",
            },
            price: "₺150",
          },
          {
            name: {
              en: "Double Espresso",
              tr: "Double Espresso",
            },
            price: "₺200",
          },
          {
            name: {
              en: "Espresso Macchiato",
              tr: "Espresso Macchiato",
            },
            price: "₺200",
          },
          {
            name: {
              en: "Americano",
              tr: "Americano Sade",
            },
            price: "₺200",
          },
          {
            name: {
              en: "Americano with Milk",
              tr: "Americano Sütlü",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Cappuccino",
              tr: "Cappuccino",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Latte Macchiato (Glass)",
              tr: "Latte Macchiato (Cam Bardak)",
            },
            price: "₺230",
          },
          {
            name: {
              en: "Cafe Latte (Cup)",
              tr: "Cafe Latte (Kupa)",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Cortado",
              tr: "Cortado",
            },
            price: "₺200",
          },
        ],
      },
      {
        id: "hot-coffees-specials",
        title: {
          en: "Special Hot Drinks",
          tr: "Özel Sıcak İçecekler",
        },
        subtitle: {
          en: "Special Hot Drinks",
          tr: "Özel Sıcak İçecekler",
        },
        image: "/images/menu-blocks/sicak-kahveler-2.png",
        imageAlt: {
          en: "Representative image of special hot coffee and drinks",
          tr: "Özel sıcak kahve ve içecekler temsili görsel",
        },
        imageSide: "left",
        items: [
          {
            name: {
              en: "Conpanna (Espresso & Whipped Cream)",
              tr: "Conpanna (Espresso & Krem Şanti)",
            },
            price: "₺240",
          },
          {
            name: {
              en: "Mocha",
              tr: "Mocha",
            },
            price: "₺240",
          },
          {
            name: {
              en: "White Mocha",
              tr: "Beyaz Mocha",
            },
            price: "₺240",
          },
          {
            name: {
              en: "Turkish Coffee",
              tr: "Türk Kahvesi",
            },
            price: "₺150",
          },
          {
            name: {
              en: "Double Turkish Coffee",
              tr: "Duble Türk Kahvesi",
            },
            price: "₺220",
          },
          {
            name: {
              en: "Nescafe",
              tr: "Nescafe",
            },
            price: "₺180",
          },
          {
            name: {
              en: "Nescafe with Milk",
              tr: "Sütlü Nescafe",
            },
            price: "₺200",
          },
          {
            name: {
              en: "Hot Chocolate & Whipped Cream",
              tr: "Sıcak Çikolata & Krem Şanti",
            },
            price: "₺250",
          },
          {
            name: {
              en: "Sahlep",
              tr: "Salep (Taş Değirmen)",
            },
            price: "₺250",
          },
          {
            name: {
              en: "Extra Milk",
              tr: "Pot Süt",
            },
            price: "₺50",
          },
          {
            name: {
              en: "Whipped Cream",
              tr: "Krem Şanti",
            },
            price: "₺50",
          },
          {
            name: {
              en: "Extra Shot",
              tr: "Ekstra Shot",
            },
            price: "₺50",
          },
        ],
      },
    ],
  },

  "bitki-caylari": {
    slug: "bitki-caylari",
    title: {
      en: "Herbal Tea",
      tr: "Bitki Çayları",
    },
    subtitle: {
      en: "Herbal Tea",
      tr: "Bitki Çayları",
    },
    blocks: [
      {
        id: "herbal-tea-main",
        title: {
          en: "Herbal Tea",
          tr: "Bitki Çayları",
        },
        subtitle: {
          en: "Herbal Tea",
          tr: "Bitki Çayları",
        },
        image: "/images/menu-blocks/bitki-caylari.png",
        imageAlt: {
          en: "Representative image of herbal teas",
          tr: "Bitki çayları temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Linden + Honey",
              tr: "Çiçek Ihlamur + Bal",
            },
            price: "₺240",
          },
          {
            name: {
              en: "Ginger, Turmeric, Cinnamon, Clove, Hibiscus + Honey",
              tr: "Zencefil, Zerdeçal, Tarçın, Karanfil, Hibiskus Kış Çayı + Bal",
            },
            price: "₺240",
          },
          {
            name: {
              en: "Sage Tea + Honey",
              tr: "Adaçayı + Bal",
            },
            price: "₺240",
          },
          {
            name: {
              en: "Green Tea + Honey",
              tr: "Yeşil Çay + Bal",
            },
            price: "₺240",
          },
          {
            name: {
              en: "Apple Tea + Honey",
              tr: "Elma Çayı + Bal",
            },
            price: "₺240",
          },
        ],
      },
    ],
  },

  dondurmalar: {
    slug: "dondurmalar",
    title: {
      en: "Ice Creams",
      tr: "Dondurmalar",
    },
    subtitle: {
      en: "Ice Creams",
      tr: "Dondurmalar",
    },
    blocks: [
      {
        id: "ice-creams-main",
        title: {
          en: "Ice Creams",
          tr: "Dondurmalar",
        },
        subtitle: {
          en: "Ice Creams",
          tr: "Dondurmalar",
        },
        image: "/images/menu-blocks/dondurmalar.png",
        imageAlt: {
          en: "Representative image of ice cream varieties",
          tr: "Dondurma çeşitleri temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Melon with Ice Cream",
              tr: "Kavun İçinde Dondurma",
            },
            description: {
              en: "Ice cream in melon served with fresh fruits",
              tr: "Taze meyveler eşliğinde kavun içinde Roma dondurma",
            },
            price: "₺600",
          },
          {
            name: {
              en: "Roma Chef's Special",
              tr: "Roma Ustam Özel Karışık Dondurması",
            },
            price: "₺650",
          },
          {
            name: {
              en: "Venice",
              tr: "Venedik",
            },
            description: {
              en: "Pistachio, honey, almond, chestnut and chocolate chips",
              tr: "Antep fıstığı, bal, badem, kestane, parça çikolata",
            },
            price: "₺350",
          },
          {
            name: {
              en: "Tropical",
              tr: "Tropikal",
            },
            description: {
              en: "Pineapple, mango, kiwi and black mulberry",
              tr: "Ananas, mango, kivi, karadut",
            },
            price: "₺350",
          },
          {
            name: {
              en: "Iceman",
              tr: "Iceman",
            },
            description: {
              en: "Mastic, walnut, chestnut and chocolate chips",
              tr: "Sakız, ceviz, kestane, parça çikolata",
            },
            price: "₺350",
          },
          {
            name: {
              en: "Banana Split",
              tr: "Banana Split",
            },
            description: {
              en: "Mixed ice cream and banana",
              tr: "Karışık dondurma, muz",
            },
            price: "₺500",
          },
          {
            name: {
              en: "Ice Cream with Wafer Halva",
              tr: "Gofret Helvalı Dondurma",
            },
            description: {
              en: "Vanilla, chocolate, coffee and caramel",
              tr: "Vanilya, çikolata, kahve, karamel",
            },
            price: "₺400",
          },
          {
            name: {
              en: "Denmark",
              tr: "Danimarka",
            },
            description: {
              en: "Chocolate and caramel",
              tr: "Çikolata ve karamel",
            },
            price: "₺350",
          },
          {
            name: {
              en: "Hawaii",
              tr: "Hawaii",
            },
            description: {
              en: "Tutti frutti, pineapple, strawberry and banana",
              tr: "Karışık meyve, ananas, çilek, muz",
            },
            price: "₺350",
          },
        ],
      },
    ],
  },

  "dondurmali-tatlilar": {
    slug: "dondurmali-tatlilar",
    title: {
      en: "Ice Cream Desserts",
      tr: "Dondurmalı Tatlılar",
    },
    subtitle: {
      en: "Ice Cream Desserts",
      tr: "Dondurmalı Tatlılar",
    },
    blocks: [
      {
        id: "ice-cream-desserts-main",
        title: {
          en: "Ice Cream Desserts",
          tr: "Dondurmalı Tatlılar",
        },
        subtitle: {
          en: "Ice Cream Desserts",
          tr: "Dondurmalı Tatlılar",
        },
        image: "/images/menu-blocks/dondurmali-tatlilar.png",
        imageAlt: {
          en: "Representative image of ice cream dessert varieties",
          tr: "Dondurmalı tatlı çeşitleri temsili görsel",
        },
        imageSide: "left",
        items: [
          {
            name: {
              en: "Pineapple Cup",
              tr: "Ananaslı Kup",
            },
            description: {
              en: "Pineapple ice cream and whipped cream with fresh pineapple cubes",
              tr: "Taze ananas küpleri eşliğinde ananaslı dondurma ve krem şanti",
            },
            price: "₺500",
          },
          {
            name: {
              en: "Vegan Cup",
              tr: "Vegan Kup",
            },
            description: {
              en: "Vegan four scoops of ice cream and fresh fruits",
              tr: "Vegan 4 top dondurma, taze meyveler",
            },
            price: "₺500",
          },
          {
            name: {
              en: "Oreo Cup",
              tr: "Oreolu Kup",
            },
            description: {
              en: "Oreo biscuit, chocolate chips, chocolate ice cream and whipped cream",
              tr: "Oreo bisküvi, çikolata parçaları, çikolatalı dondurma ve krem şanti",
            },
            price: "₺500",
          },
          {
            name: {
              en: "Forest Fruit Cup",
              tr: "Orman Meyveli Kup",
            },
            description: {
              en: "Forest fruit ice cream and whipped cream with fresh blueberry, black mulberry, cherry and strawberry",
              tr: "Taze yaban mersini, karadut, vişne, çilek eşliğinde orman meyveli dondurma ve krem şanti",
            },
            price: "₺500",
          },
          {
            name: {
              en: "Croquant Cup",
              tr: "Krokanlı Kup",
            },
            description: {
              en: "Croquant pieces, pistachio ice cream, walnut ice cream, almond ice cream, caramel ice cream and whipped cream",
              tr: "Krokan parçaları, Antep fıstıklı dondurma, cevizli dondurma, bademli dondurma, karamelli dondurma ve krem şanti",
            },
            price: "₺500",
          },
        ],
      },
    ],
  },

  waffle: {
    slug: "waffle",
    title: {
      en: "Waffle",
      tr: "Waffle",
    },
    subtitle: {
      en: "Waffle",
      tr: "Waffle",
    },
    blocks: [
      {
        id: "waffle-main",
        title: {
          en: "Waffle",
          tr: "Waffle",
        },
        subtitle: {
          en: "Our waffles are buttered",
          tr: "Waffle'larımız tereyağlıdır",
        },
        image: "/images/menu-blocks/waffle.png",
        imageAlt: {
          en: "Representative image of waffle varieties",
          tr: "Waffle çeşitleri temsili görsel",
        },
        imageSide: "right",
        items: [
          {
            name: {
              en: "Oreo Waffle",
              tr: "Oreolu Waffle",
            },
            description: {
              en: "Oreo biscuit and Nutella",
              tr: "Oreo bisküvi ve Nutella",
            },
            price: "₺400",
          },
          {
            name: {
              en: "Fruit Waffle",
              tr: "Meyveli Waffle",
            },
            description: {
              en: "Strawberry, kiwi, banana and Nutella",
              tr: "Çilek, kivi, muz, Nutella",
            },
            price: "₺400",
          },
          {
            name: {
              en: "Fruit Ice Cream Waffle",
              tr: "Meyveli Dondurmalı Waffle",
            },
            description: {
              en: "Strawberry, kiwi, banana and Nutella",
              tr: "Çilek, kivi, muz ve Nutella",
            },
            price: "₺480",
          },
          {
            name: {
              en: "Forest Fruit Waffle",
              tr: "Orman Meyveli Waffle",
            },
            description: {
              en: "Blueberry, raspberry, blackberry, strawberry and Nutella",
              tr: "Yaban mersini, ahududu, karadut, çilek ve Nutella",
            },
            price: "₺500",
          },
        ],
      },
    ],
  },
};