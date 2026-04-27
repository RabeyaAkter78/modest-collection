"use client";

import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BackButton from "@/components/BackButton";

export default function HijabPage() {
  const items = products.filter((p) => p.category === "hijab");

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1920&q=80"
          alt="Hijab Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-900/30" />
        {/* Back Button */}
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
          <BackButton variant="dark" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <span className="text-sm font-medium tracking-widest text-stone-300 uppercase">
                Collection
              </span>
              <h1 className="mt-2 text-4xl font-light text-white md:text-5xl">
                Hijab
              </h1>
              <p className="mt-4 text-stone-200">
                Beautiful hijabs in silk, cotton, and chiffon. Designed for comfort, 
                style, and all-day wear.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm text-stone-500">{items.length} products</span>
        </div>

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
            <p className="text-lg text-stone-600">No products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
