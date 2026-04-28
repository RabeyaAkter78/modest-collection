"use client";

import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  const { ids, toggle, count } = useWishlist();
  const wishlistProducts = products.filter((p) => ids.has(p.id));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-stone-900">My Wishlist</h1>
        <p className="mt-1 text-sm text-stone-500">
          {count} item{count !== 1 ? "s" : ""} saved
        </p>
      </div>

      {count === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-stone-200 bg-white py-16">
          <Heart className="h-12 w-12 text-stone-300" />
          <p className="mt-4 text-lg font-medium text-stone-900">Your wishlist is empty</p>
          <p className="text-sm text-stone-500">Save items you love for later</p>
          <Link
            href="/borkha"
            className="mt-4 rounded-lg bg-stone-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            Browse Collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl border border-stone-200 bg-white overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img
                  src={typeof product.image === "string" ? product.image : ""}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <Link
                  href={`/product/${product.id}`}
                  className="text-sm font-medium text-stone-900 hover:underline"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-sm font-semibold text-stone-700">
                  ৳{product.price.toLocaleString()}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 rounded-lg bg-stone-900 px-3 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-stone-800"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => toggle(product.id)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
