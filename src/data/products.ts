import type { Product } from "@/types/product";
import  img1 from "../images/download (10).jpg";
import  img2 from "../images/download (11).jpg";
import  img3 from "../images/download (12).jpg";
import  img4 from "../images/download (13).jpg";
import  img5 from "../images/download (14).jpg";
import  img6 from "../images/download (15).jpg";
import  img7 from "../images/download (16).jpg";
import  img8 from "../images/download (17).jpg";
export const products: Product[] = [
  {
    id: "b1",
    name: "Plain Borkha Classic",
    slug: "plain-borkha-classic",
    category: "borkha",
    subcategory: "plain",
    price: 2800,
    image: img1,
    description: "Minimal plain borkha with premium fabric.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "b2",
    name: "Regular Wear Borkha",
    slug: "regular-wear-borkha",
    category: "borkha",
    subcategory: "regular",
    price: 3200,
    image: img2,
    description: "Everyday comfort with elegant design.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "b3",
    name: "Party Borkha Luxe",
    slug: "party-borkha-luxe",
    category: "borkha",
    subcategory: "party",
    price: 4800,
    image: img3,
    description: "Sophisticated details for special occasions.",
    sizes: ["M", "L", "XL"],
    onSale: true,
  },
  {
    id: "a1",
    name: "Casual Abaya",
    slug: "casual-abaya",
    category: "abaya",
    subcategory: "casual",
    price: 3500,
    image: img4,
    sizes: ["S", "M", "L"],
  },
  {
    id: "a2",
    name: "Party Abaya",
    slug: "party-abaya",
    category: "abaya",
    subcategory: "party",
    price: 5200,
    image: img5,
    onSale: true,
  },
  {
    id: "a3",
    name: "Premium Abaya",
    slug: "premium-abaya",
    category: "abaya",
    subcategory: "premium",
    price: 6200,
    image: img6,
  },
  {
    id: "h1",
    name: "Silk Hijab",
    slug: "silk-hijab",
    category: "hijab",
    price: 1200,
    image: img7,
  },
  {
    id: "h2",
    name: "Cotton Hijab",
    slug: "cotton-hijab",
    category: "hijab",
    price: 800,
    image: img8,
  },
  {
    id: "i1",
    name: "Inner Cap Basic",
    slug: "inner-cap-basic",
    category: "inner-cap",
    price: 400,
    image: img7,
  },
  {
    id: "i2",
    name: "Inner Cap Premium",
    slug: "inner-cap-premium",
    category: "inner-cap",
    price: 700,
    image: img8,
  },
];
