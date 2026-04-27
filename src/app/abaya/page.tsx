"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const subcategories = [
  { value: "all", label: "All Abayas" },
  { value: "casual", label: "Casual Wear" },
  { value: "party", label: "Party Wear" },
  { value: "premium", label: "Premium" },
];

const sortOptions = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
];

export default function AbayaPage() {
  const [subcategory, setSubcategory] = useState<string>("all");
  const [sort, setSort] = useState<string>("default");
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="min-h-screen bg-stone-50">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=1920&q=80"
          alt="Abaya Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-900/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <span className="text-sm font-medium tracking-widest text-stone-300 uppercase">
                Collection
              </span>
              <h1 className="mt-2 text-4xl font-light text-white md:text-5xl">
                Abaya
              </h1>
              <p className="mt-4 text-stone-200">
                Elegant abayas that blend modesty with contemporary style. From casual daily wear 
                to premium occasion pieces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-sm border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
            <span className="text-sm text-stone-500">
              {items.length} products
            </span>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-sm border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 focus:border-stone-500 focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-8 rounded-lg border border-stone-200 bg-white p-6" data-aos="fade-down">
            <h3 className="mb-4 text-sm font-medium text-stone-900">Categories</h3>
            <div className="flex flex-wrap gap-3">
              {subcategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSubcategory(cat.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    subcategory === cat.value
                      ? "bg-stone-900 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Filters */}
        {subcategory !== "all" && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-stone-500">Active filter:</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-stone-200 px-3 py-1 text-sm text-stone-700">
              {subcategories.find(s => s.value === subcategory)?.label}
              <button
                onClick={() => setSubcategory("all")}
                className="ml-1 text-stone-500 hover:text-stone-900"
              >
                ×
              </button>
            </span>
          </div>
        )}

        {/* Product Grid */}
        {items.length > 0 ? (
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((product, index) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-stone-600">No products found in this category.</p>
            <button
              onClick={() => setSubcategory("all")}
              className="mt-4 text-sm font-medium text-stone-900 underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
