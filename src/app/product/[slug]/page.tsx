import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BackButton from "@/components/BackButton";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <BackButton className="mb-6 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm" />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-md object-cover"
          />
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[product.image, product.image, product.image, product.image].map(
              (src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Thumbnail"
                  className="h-20 w-full rounded-md object-cover"
                />
              )
            )}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="mt-2 text-lg font-medium">৳ {product.price}</div>
          <p className="mt-3 text-sm text-zinc-700">
            {product.description || "Elegant and minimal design with premium fabric."}
          </p>
          {product.sizes && (
            <div className="mt-4">
              <div className="text-sm font-medium">Available Sizes</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span key={s} className="rounded-md border px-3 py-1 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-6 flex items-center gap-2">
            <a
              href="/cart"
              className="rounded-md bg-zinc-900 px-5 py-2 text-sm text-white"
            >
              Add to Cart
            </a>
            <button className="rounded-md border px-5 py-2 text-sm">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold">Related Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
