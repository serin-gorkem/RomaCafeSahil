import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroImages",
      title: "Hero Slider Images",
      description:
        "Ana sayfadaki slider görselleri. Yatay ve yüksek çözünürlüklü görseller önerilir.",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "localizedString",
              description: "Görsel için kısa açıklama.",
            }),
          ],
        },
      ],
      validation: (Rule) =>
        Rule.min(1).warning("Ana sayfa slider için en az bir görsel önerilir."),
    }),

    defineField({
      name: "menuSectionTitle",
      title: "Menu Section Title",
      description:
        "Ana sayfadaki menü kategorileri başlığı. Boş bırakılırsa mevcut sabit başlık kullanılır.",
      type: "localizedString",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
        subtitle: "Ana sayfa slider ve menü başlığı",
      };
    },
  },
});