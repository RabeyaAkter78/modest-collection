export default function Testimonials() {
  const items = [
    {
      name: "Aisha",
      quote:
        "Beautiful designs and very comfortable. Delivery was fast too!",
    },
    {
      name: "Fatima",
      quote:
        "Premium fabric with a modest aesthetic. Absolutely love it.",
    },
    {
      name: "Zara",
      quote:
        "Elegant and minimal. The abaya fits perfectly.",
    },
  ];

  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-zinc-700">{t.quote}</p>
              <div className="mt-4 text-sm font-medium">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
