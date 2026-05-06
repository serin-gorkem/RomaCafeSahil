import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Cafe Roma CMS")
    .items([
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .child(
          S.document()
            .schemaType("homePage")
            .documentId("homePage")
            .title("Home Page")
        ),

      S.divider(),

      S.documentTypeListItem("menuCategory").title("Menu Categories"),
      S.documentTypeListItem("menuBlock").title("Menu Blocks"),
      S.documentTypeListItem("menuItem").title("Menu Items"),
    ]);