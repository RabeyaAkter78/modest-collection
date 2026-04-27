"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";
import { ArrowRight } from "lucide-react";

interface ProductGridProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  showViewAll?: boolean;
}

export default function ProductGrid({
  title,
  products,
  viewAllLink,
  showViewAll = true,
}: ProductGridProps) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
              {title === "New Collection" ? "Just Arrived" : title === "Offer Collection" ? "Special Offers" : "Featured"}
            </span>
            <h2 className="mt-2 text-2xl font-light text-stone-900 md:text-3xl">
              {title}
            </h2>
          </div>
          {showViewAll && viewAllLink && (
            <Link
              href={viewAllLink}
              className="group hidden items-center gap-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        {showViewAll && viewAllLink && (
          <div className="mt-10 text-center sm:hidden">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 rounded-sm border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
