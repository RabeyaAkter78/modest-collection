import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import HeroBanner from "@/components/HeroBanner";
import { products } from "@/data/products";

export default function Home() {
  const latest = products.slice(0, 8);
  const offers = products.filter((p) => p.onSale).slice(0, 4);

  return (
    <>
      {/* Hero Banner with Swiper Slider */}
      <HeroBanner />

      {/* New Collection */}
      <ProductGrid
        title="New Collection"
        products={latest}
        viewAllLink="/borkha"
        showViewAll={true}
      />

      {/* Offer Collection */}
      {offers.length > 0 && (
        <div className="bg-stone-100">
          <ProductGrid
            title="Offer Collection"
            products={offers}
            viewAllLink="/borkha"
            showViewAll={true}
          />
        </div>
      )}

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery */}
      <Gallery />
    </>
  );
}
