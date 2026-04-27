"use client";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ShoppingBag, Eye } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { toggle, has } = useWishlist();

  const imageSrc = typeof product.image === "string" ? product.image : product.image?.src || "";

  return (
    <div className="group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-100">
        {/* Product Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Sale Badge */}
        {product.onSale && (
          <span className="absolute left-3 top-3 rounded-sm bg-rose-500 px-3 py-1 text-xs font-medium text-white">
            Sale
          </span>
        )}

        {/* Quick Actions Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-stone-900/60 to-transparent p-4 pt-12 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex gap-2">
            <button
              onClick={() => add(product, 1)}
              className="flex-1 rounded-sm bg-white px-4 py-2.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </span>
            </button>
            <Link
              href={`/product/${product.slug}`}
              className="flex items-center justify-center rounded-sm bg-white/90 px-3 py-2.5 text-stone-900 transition-colors hover:bg-white"
            >
              <Eye className="h-4 w-4" />
            </Link>
            <button
              onClick={() => toggle(product.id)}
              className="flex items-center justify-center rounded-sm bg-white/90 px-3 py-2.5 text-rose-500 transition-colors hover:bg-white"
            >
              <Heart className={`h-4 w-4 ${has(product.id) ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <Link
          href={`/product/${product.slug}`}
          className="group/link block"
        >
          <h3 className="text-sm font-medium text-stone-900 transition-colors group-hover/link:text-stone-600">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-medium text-stone-900">
            ৳ {product.price.toLocaleString()}
          </span>
          {product.onSale && (
            <span className="text-xs text-stone-500 line-through">
              ৳ {(product.price * 1.2).toLocaleString()}
            </span>
          )}
        </div>
        {product.sizes && (
          <p className="mt-1 text-xs text-stone-500">
            Sizes: {product.sizes.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
