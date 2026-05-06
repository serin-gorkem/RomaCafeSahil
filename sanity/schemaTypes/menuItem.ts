import { defineField, defineType } from "sanity";
import { requireLocalizedString } from "./validation";

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Items",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "localizedString",
      validation: (Rule) => Rule.required().custom(requireLocalizedString),
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "localizedText",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "calories",
      title: "Calories",
      type: "number",
      validation: (Rule) => Rule.min(0),
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
      title: "name.en",
      subtitle: "name.tr",
      price: "price",
    },
    prepare({ title, subtitle, price }) {
      return {
        title: title || subtitle || "Untitled product",
        subtitle: price ? `₺${price}` : subtitle,
      };
    },
  },
});
