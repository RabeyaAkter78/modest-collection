"use client";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, update, remove, subtotal } = useCart();

  const getImageSrc = (img: any) => {
    if (typeof img === "string") return img;
    return img?.src || "";
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <Navbar />
      
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-light text-stone-900 md:text-4xl">
              Shopping Cart
            </h1>
            <p className="mt-2 text-stone-600">
              {items.length === 0
                ? "Your cart is empty"
                : `${items.length} item${items.length > 1 ? "s" : ""} in your cart`}
            </p>
          </div>

          {items.length === 0 ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-stone-200 bg-white p-12">
              <ShoppingBag className="h-16 w-16 text-stone-300" />
              <h2 className="mt-4 text-xl font-medium text-stone-900">Your cart is empty</h2>
              <p className="mt-2 text-stone-600">Start shopping to add items to your cart</p>
              <Link
                href="/"
                className="mt-6 rounded-sm bg-stone-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              {/* Cart Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-6 rounded-lg border border-stone-200 bg-white p-6 transition-shadow hover:shadow-sm"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-stone-100">
                      <img
                        src={getImageSrc(item.product.image)}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          href={`/product/${item.product.id}`}
                          className="text-base font-medium text-stone-900 hover:text-stone-600"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-sm text-stone-600">
                          {item.product.category}
                        </p>
                        <p className="mt-2 text-lg font-medium text-stone-900">
                          ৳{item.product.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 rounded-md border border-stone-300">
                          <button
                            onClick={() =>
                              update(item.product.id, Math.max(1, item.quantity - 1))
                            }
                            className="flex h-10 w-10 items-center justify-center text-stone-600 transition-colors hover:bg-stone-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => update(item.product.id, item.quantity + 1)}
                            className="flex h-10 w-10 items-center justify-center text-stone-600 transition-colors hover:bg-stone-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(item.product.id)}
                          className="flex items-center gap-2 rounded-sm px-4 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-100"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <aside className="h-fit space-y-6 rounded-lg border border-stone-200 bg-white p-6 lg:sticky lg:top-8">
                <div>
                  <h2 className="text-lg font-medium text-stone-900">Order Summary</h2>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span>৳{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span>৳60</span>
                  </div>
                  <div className="border-t border-stone-200 pt-3">
                    <div className="flex justify-between text-lg font-medium text-stone-900">
                      <span>Total</span>
                      <span>৳{(subtotal + 60).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-stone-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
                >
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/"
                  className="block text-center text-sm text-stone-600 underline hover:text-stone-900"
                >
                  Continue Shopping
                </Link>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
