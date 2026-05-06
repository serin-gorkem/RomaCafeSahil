import { defineField, defineType } from "sanity";
import { requireLocalizedString } from "./validation";

export const menuBlock = defineType({
  name: "menuBlock",
  title: "Menu Blocks",
  type: "document",
  fields: [
defineField({
  name: "title",
  title: "Block Title",
  type: "localizedString",
  validation: (Rule) => Rule.required().custom(requireLocalizedString),

}),
    defineField({
      name: "subtitle",
      title: "Block Subtitle",
      type: "localizedString",
    }),
    defineField({
      name: "image",
      title: "Block Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "localizedString",
    }),
    defineField({
      name: "imageSide",
      title: "Image Side",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    }),
    defineField({
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "menuItem" }],
        },
      ],
      validation: (Rule) =>
        Rule.min(1).warning("Bu bloğa en az bir ürün bağlanması önerilir."),
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
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || subtitle || "Untitled block",
        subtitle,
        media,
      };
    },
  },
});
