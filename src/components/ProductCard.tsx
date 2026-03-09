"use client";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { toggle, has } = useWishlist();
  return (
    <div className="group rounded-lg border bg-white p-3 shadow-sm">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-zinc-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        {product.onSale && (
          <span className="absolute left-2 top-2 rounded-md bg-rose-600 px-2 py-1 text-xs text-white">
            Sale
          </span>
        )}
      </div>
      <div className="mt-3">
        <Link
          href={`/product/${product.slug}`}
          className="line-clamp-1 text-sm font-medium hover:underline"
        >
          {product.name}
        </Link>
        <div className="mt-1 text-sm text-zinc-600">৳ {product.price}</div>
        <div className="mt-3 flex items-center gap-2">
          <button
            className="flex-1 rounded-md bg-zinc-900 px-3 py-2 text-xs text-white"
            onClick={() => add(product, 1)}
          >
            Add to Cart
          </button>
          <button
            aria-label="Add to wishlist"
            className="inline-flex items-center justify-center rounded-md border p-2"
            onClick={() => toggle(product.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={has(product.id) ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-rose-600"
            >
              <path d="M20.8 11.3l-8.4 8.4-8.4-8.4a5.9 5.9 0 1 1 8.4-8.4 5.9 5.9 0 0 1 8.4 8.4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
