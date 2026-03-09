"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import BackButton from "@/components/BackButton";

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

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <BackButton className="mb-6 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm" />
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <form className="mt-6 space-y-4" onSubmit={submit}>
        <input
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder="City"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          required
        />
        <div className="space-y-2">
          <div className="text-sm font-medium">Payment Method</div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={form.method === "bkash"}
              onChange={() => setForm({ ...form, method: "bkash" })}
            />
            bKash
          </label>
        </div>
        <div className="text-sm">Subtotal: ৳ {subtotal}</div>
        <button
          type="submit"
          className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm text-white"
        >
          Pay with bKash
        </button>
      </form>
    </div>
  );
}
