export const MENU_CATEGORIES_QUERY = `
*[_type == "menuCategory"] | order(order asc) {
  _id,
  _type,
  title,
  subtitle,
  "slug": slug.current,
  cardImage,
  order,
  isActive
}
`;

export const MENU_CATEGORY_BY_SLUG_QUERY = `
*[_type == "menuCategory" && slug.current == $slug && coalesce(isActive, true) == true][0]{
  _id,
  title,
  subtitle,
  "slug": slug.current,
  cardImage,
  heroImage,
  order,
  "blocks": blocks[]-> | order(order asc) [defined(_id) && coalesce(isActive, true) == true] {
    _id,
    title,
    subtitle,
    image,
    imageAlt,
    imageSide,
    order,
    "items": items[]-> | order(order asc) [defined(_id) && coalesce(isActive, true) == true] {
      _id,
      name,
      description,
      price,
      calories,
      order
    }
  }
}
`;
export const HOME_PAGE_QUERY = `
*[_type == "homePage" && _id == "homePage"][0]{
  _id,
  heroImages[]{
    ...,
    alt
  },
  menuSectionTitle
}
`;