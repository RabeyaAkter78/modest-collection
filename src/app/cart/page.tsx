"use client";
import { useCart } from "@/context/CartContext";
import BackButton from "@/components/BackButton";

export default function CartPage() {
  const { items, update, remove, subtotal } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <BackButton className="mb-6 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm" />
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-zinc-600">Your cart is empty.</p>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((i) => (
              <div
                key={i.product.id}
                className="flex items-center gap-4 rounded-lg border p-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={i.product.image}
                  alt={i.product.name}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">{i.product.name}</div>
                  <div className="text-sm text-zinc-600">৳ {i.product.price}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <label className="text-sm">Qty</label>
                    <input
                      type="number"
                      min={1}
                      value={i.quantity}
                      onChange={(e) =>
                        update(i.product.id, parseInt(e.target.value || "1", 10))
                      }
                      className="w-20 rounded-md border px-3 py-2 text-sm"
                    />
                    <button
                      className="rounded-md border px-3 py-2 text-sm"
                      onClick={() => remove(i.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded-lg border p-4">
            <div className="text-sm">Subtotal</div>
            <div className="mt-1 text-lg font-semibold">৳ {subtotal}</div>
            <a
              href="/checkout"
              className="mt-4 block rounded-md bg-zinc-900 px-4 py-2 text-center text-sm text-white"
            >
              Checkout
            </a>
          </aside>
        </div>
      )}
    </div>
  );
}
