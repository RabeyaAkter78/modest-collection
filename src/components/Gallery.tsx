export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1585241938810-9b77e682d9f1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512203492609-8f7f06f4a130?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520974692379-6cbf3f0f1f6f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542060748-10c28b62716d?q=80&w=1200&auto=format&fit=crop",
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold">Product Gallery</h2>
        <div className="mt-6 columns-2 gap-4 md:columns-3">
          {images.map((src) => (
            <div key={src} className="mb-4 overflow-hidden rounded-lg">
              <img
                src={src}
                alt="Product"
                className="w-full transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
