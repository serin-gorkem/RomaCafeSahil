import { defineField, defineType } from "sanity";
import { requireLocalizedString } from "./validation";

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Menu Categories",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "localizedString",
      validation: (Rule) => Rule.required().custom(requireLocalizedString),
    }),
    defineField({
      name: "subtitle",
      title: "Category Subtitle",
      type: "localizedString",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "URL alanıdır. Yayına çıktıktan sonra değiştirmeyin.",
      type: "slug",
      options: {
        source: "title.en",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cardImage",
      title: "Category Card Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Category Page Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "blocks",
      title: "Menu Blocks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "menuBlock" }],
        },
      ],
      validation: (Rule) =>
        Rule.min(1).warning(
          "Bu kategoriye en az bir menü bloğu bağlanması önerilir.",
        ),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isActive",
      title: "Visible on Website",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "title.tr",
      media: "cardImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || subtitle || "Untitled category",
        subtitle,
        media,
      };
    },
  },
});
