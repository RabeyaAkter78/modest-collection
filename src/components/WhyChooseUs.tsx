export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Fabric",
      desc: "Soft, breathable, and durable materials.",
    },
    {
      title: "Modest Design",
      desc: "Elegant cuts with a feminine aesthetic.",
    },
    {
      title: "Fast Delivery",
      desc: "Reliable shipping across the country.",
    },
    {
      title: "Easy Return",
      desc: "Hassle-free returns within 7 days.",
    },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold">Why Choose Us</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border bg-white p-6">
              <div className="text-lg font-medium">{f.title}</div>
              <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
