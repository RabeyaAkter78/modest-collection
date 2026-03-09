import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import { products } from "@/data/products";

export default function Home() {
  const latest = products.slice(0, 8);
  const offers = products.filter((p) => p.onSale).slice(0, 8);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4" data-aos="fade-up">
        <section className="py-16" data-aos="fade-up">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight">
                Elegant Modest Fashion
              </h1>
              <p className="mt-4 text-zinc-600">
                Discover Borkha, Abaya, Hijab, and Inner Caps crafted for
                comfort and elegance.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="/borkha"
                  className="rounded-md bg-zinc-900 px-5 py-3 text-sm text-white"
                >
                  Shop Now
                </a>
                <a
                  href="/about"
                  className="rounded-md border px-5 py-3 text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1520974692379-6cbf3f0f1f6f?q=80&w=1600&auto=format&fit=crop"
                alt="Modest fashion banner"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      <div data-aos="fade-up">
        <ProductGrid title="New Collection" products={latest} />
      </div>
      <div data-aos="fade-up">
        <ProductGrid title="Offer Collection" products={offers} />
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
      <div data-aos="fade-up">
        <WhyChooseUs />
      </div>
      <div data-aos="fade-up">
        <Gallery />
      </div>
    </>
  );
}
