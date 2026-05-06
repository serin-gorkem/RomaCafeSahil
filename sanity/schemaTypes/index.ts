import { type SchemaTypeDefinition } from "sanity";

import { homePage } from "./homePage";
import { localizedString } from "./localizedString";
import { localizedText } from "./localizedText";
import { menuBlock } from "./menuBlock";
import { menuCategory } from "./menuCategory";
import { menuItem } from "./menuItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localizedString,
    localizedText,
    homePage,
    menuCategory,
    menuBlock,
    menuItem,
  ],
};