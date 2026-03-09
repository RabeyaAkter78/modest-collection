export type Category =
  | "borkha"
  | "abaya"
  | "hijab"
  | "inner-cap";

export type BorkhaCategory = "plain" | "regular" | "party";
export type AbayaCategory = "casual" | "party" | "premium";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  subcategory?: BorkhaCategory | AbayaCategory;
  price: number;
  image: string;
  description?: string;
  sizes?: string[];
  onSale?: boolean;
}
