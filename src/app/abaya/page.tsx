"use client";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BackButton from "@/components/BackButton";

export default function AbayaPage() {
  const [subcategory, setSubcategory] = useState<string>("all");
  const [sort, setSort] = useState<string>("default");

  const items = useMemo(() => {
    let list = products.filter((p) => p.category === "abaya");
    if (subcategory !== "all") {
      list = list.filter((p) => p.subcategory === subcategory);
    }
    if (sort === "price-asc") {
      list = [...list].sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      list = [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [subcategory, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <BackButton className="mb-6 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm" />
      <h1 className="text-2xl font-semibold">Abaya</h1>
      <div className="mt-4 flex flex-wrap gap-3">
        <select
          aria-label="Filter by category"
          className="rounded-md border px-3 py-2 text-sm"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="casual">Casual Abaya</option>
          <option value="party">Party Abaya</option>
          <option value="premium">Premium Abaya</option>
        </select>
        <select
          aria-label="Sort by"
          className="rounded-md border px-3 py-2 text-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
