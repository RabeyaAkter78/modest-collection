"use client";

import { notFound } from "next/navigation";
import { useState, use } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ShoppingBag, Truck, Shield, Star } from "lucide-react";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { add } = useCart();
  const { toggle, has } = useWishlist();

  const product = products.find((p) => p.id === id);

  // Move hooks above any conditional return
  const initialSize = product?.sizes?.[0] || "";
  const [selectedSize, setSelectedSize] = useState<string>(initialSize);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Handle both local image imports and string URLs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getImageSrc = (img: any) => {
    if (typeof img === "string") return img;
    return img?.src || "";
  };

  const imageSrc = getImageSrc(product.image);
  const thumbnails = [imageSrc, imageSrc, imageSrc, imageSrc];

  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Product Section */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4" data-aos="fade-right">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              <Image
                src={thumbnails[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.onSale && (
                <span className="absolute left-4 top-4 rounded-sm bg-rose-500 px-3 py-1 text-sm font-medium text-white">
                  Sale
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square overflow-hidden rounded-md ${
                    activeImage === i ? "ring-2 ring-stone-900" : "ring-1 ring-stone-200"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col" data-aos="fade-left">
            {/* Header */}
            <div className="border-b border-stone-200 pb-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-light text-stone-900">{product.name}</h1>
                  <p className="mt-2 text-sm text-stone-500 capitalize">{product.category}</p>
                </div>
                <button
                  onClick={() => toggle(product.id)}
                  className="rounded-full bg-stone-100 p-3 text-rose-500 transition-colors hover:bg-stone-200"
                >
                  <Heart className={`h-5 w-5 ${has(product.id) ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-stone-600">(48 reviews)</span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-medium text-stone-900">
                  ৳ {product.price.toLocaleString()}
                </span>
                {product.onSale && (
                  <span className="text-lg text-stone-500 line-through">
                    ৳ {(product.price * 1.2).toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="py-6">
              <p className="text-stone-600 leading-relaxed">
                {product.description || "Elegant and minimal design with premium fabric. Crafted for comfort and style, this piece is perfect for everyday wear or special occasions."}
              </p>
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div className="border-t border-stone-200 py-6">
                <label className="text-sm font-medium text-stone-900">Select Size</label>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 w-12 rounded-md border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "border-stone-900 bg-stone-900 text-white"
                          : "border-stone-300 text-stone-700 hover:border-stone-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="border-t border-stone-200 py-6">
              <label className="text-sm font-medium text-stone-900">Quantity</label>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center rounded-md border border-stone-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-12 w-12 text-stone-600 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="h-12 w-16 flex items-center justify-center text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-12 w-12 text-stone-600 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto flex gap-4 pt-6">
              <button
                onClick={() => add(product, quantity)}
                className="flex-1 rounded-sm bg-stone-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                <span className="flex items-center justify-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </span>
              </button>
              <button className="flex-1 rounded-sm border-2 border-stone-900 px-8 py-4 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-900 hover:text-white">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-stone-100 p-4">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-stone-600" />
                <span className="text-sm text-stone-600">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-stone-600" />
                <span className="text-sm text-stone-600">7-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 text-center">
              <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
                You May Also Like
              </span>
              <h2 className="mt-2 text-2xl font-light text-stone-900">Related Products</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {related.map((p, index) => (
                <div key={p.id} data-aos="fade-up" data-aos-delay={index * 50}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
