import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BackButton from "@/components/BackButton";

export default function HijabPage() {
  const items = products.filter((p) => p.category === "hijab");
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <BackButton className="mb-6 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm" />
      <h1 className="text-2xl font-semibold">Hijab</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
