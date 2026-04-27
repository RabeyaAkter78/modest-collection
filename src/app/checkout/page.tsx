"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Shield, CreditCard, MapPin, Phone, User, CheckCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { subtotal, items } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    method: "bkash",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Your cart is empty");
      return;
    }
    window.location.href = "/checkout/confirm";
  };

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
              Checkout
            </h1>
            <p className="mt-2 text-stone-600">
              Complete your order details below
            </p>
          </div>

          {items.length === 0 ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-stone-200 bg-white p-12">
              <ShoppingBag className="h-16 w-16 text-stone-300" />
              <h2 className="mt-4 text-xl font-medium text-stone-900">Your cart is empty</h2>
              <p className="mt-2 text-stone-600">Add items to your cart before checkout</p>
              <Link
                href="/"
                className="mt-6 rounded-sm bg-stone-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              {/* Checkout Form */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="rounded-lg border border-stone-200 bg-white p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
                      <User className="h-5 w-5 text-stone-600" />
                    </div>
                    <h2 className="text-lg font-medium text-stone-900">Contact Information</h2>
                  </div>
                  
                  <form className="space-y-4" onSubmit={submit}>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-900">
                        Full Name
                      </label>
                      <input
                        className="w-full rounded-sm border border-stone-300 px-4 py-3 text-sm transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-900">
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded-sm border border-stone-300 px-4 py-3 text-sm transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        placeholder="01XXXXXXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-900">
                        Shipping Address
                      </label>
                      <input
                        className="w-full rounded-sm border border-stone-300 px-4 py-3 text-sm transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        placeholder="House no, Road no, Area"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-900">
                        City
                      </label>
                      <input
                        className="w-full rounded-sm border border-stone-300 px-4 py-3 text-sm transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
                        placeholder="Dhaka"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        required
                      />
                    </div>
                  </form>
                </div>

                {/* Payment Method */}
                <div className="rounded-lg border border-stone-200 bg-white p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
                      <CreditCard className="h-5 w-5 text-stone-600" />
                    </div>
                    <h2 className="text-lg font-medium text-stone-900">Payment Method</h2>
                  </div>

                  <div className="space-y-3">
                    <label className={`flex cursor-pointer items-center gap-4 rounded-sm border-2 p-4 transition-colors ${form.method === "bkash" ? "border-stone-900 bg-stone-50" : "border-stone-200 hover:border-stone-300"}`}>
                      <input
                        type="radio"
                        checked={form.method === "bkash"}
                        onChange={() => setForm({ ...form, method: "bkash" })}
                        className="h-4 w-4 text-stone-900 focus:ring-stone-900"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-stone-900">bKash</span>
                        <p className="text-xs text-stone-600">Pay with bKash mobile wallet</p>
                      </div>
                      {form.method === "bkash" && (
                        <CheckCircle className="h-5 w-5 text-stone-900" />
                      )}
                    </label>

                    <label className={`flex cursor-pointer items-center gap-4 rounded-sm border-2 p-4 transition-colors ${form.method === "cod" ? "border-stone-900 bg-stone-50" : "border-stone-200 hover:border-stone-300"}`}>
                      <input
                        type="radio"
                        checked={form.method === "cod"}
                        onChange={() => setForm({ ...form, method: "cod" })}
                        className="h-4 w-4 text-stone-900 focus:ring-stone-900"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-stone-900">Cash on Delivery</span>
                        <p className="text-xs text-stone-600">Pay when you receive your order</p>
                      </div>
                      {form.method === "cod" && (
                        <CheckCircle className="h-5 w-5 text-stone-900" />
                      )}
                    </label>
                  </div>
                </div>

                {/* Order Items Summary */}
                <div className="rounded-lg border border-stone-200 bg-white p-6">
                  <h2 className="text-lg font-medium text-stone-900 mb-4">Order Items</h2>
                  <div className="space-y-3">
                    {items.slice(0, 3).map((item) => (
                      <div key={item.product.id} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded bg-stone-100 shrink-0">
                          <img
                            src={getImageSrc(item.product.image)}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-stone-900 truncate">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-stone-600">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-stone-900">
                          ৳{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                    {items.length > 3 && (
                      <p className="text-xs text-stone-600">
                        +{items.length - 3} more items
                      </p>
                    )}
                  </div>
                </div>
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

                {/* Features */}
                <div className="space-y-3 rounded-lg bg-stone-50 p-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-4 w-4 text-stone-600" />
                    <span className="text-xs text-stone-600">Free shipping on orders over ৳5000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-stone-600" />
                    <span className="text-xs text-stone-600">7-day easy returns</span>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={submit}
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-stone-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-stone-800"
                >
                  {form.method === "bkash" ? "Pay with bKash" : "Place Order"}
                </button>

                <Link
                  href="/cart"
                  className="block text-center text-sm text-stone-600 underline hover:text-stone-900"
                >
                  Return to Cart
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
