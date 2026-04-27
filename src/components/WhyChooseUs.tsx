"use client";

import { Gem, Heart, Truck, RotateCcw, Shield, Leaf, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Quality",
    desc: "We source only the finest fabrics - from luxurious silk to breathable cotton - ensuring every piece feels as beautiful as it looks.",
  },
  {
    icon: Heart,
    title: "Modest Elegance",
    desc: "Our designs honor Islamic values while embracing modern aesthetics. Each piece is thoughtfully crafted for the confident Muslim woman.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Enjoy reliable nationwide shipping with real-time tracking. Most orders arrive within 3-5 business days, beautifully packaged.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "Not satisfied? We offer hassle-free returns within 7 days. Your happiness is our priority, no questions asked.",
  },
  {
    icon: Shield,
    title: "Trusted Brand",
    desc: "With thousands of satisfied customers, we've built a reputation for quality and integrity in modest fashion since 2020.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    desc: "We're committed to ethical practices and sustainable sourcing. Fashion that respects both people and planet.",
  },
  {
    icon: Sparkles,
    title: "Exclusive Designs",
    desc: "Our in-house designers create unique pieces you won't find elsewhere. Stand out with original modest fashion.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "We listen to our customers and continuously improve. Join a community of women who value modesty and style.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
            Our Promise
          </span>
          <h2 className="mt-3 text-3xl font-light text-stone-900 md:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            We believe modest fashion should never compromise on quality, comfort, or style
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-stone-200 bg-stone-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="mb-4 inline-flex rounded-lg bg-stone-200/50 p-3 transition-colors duration-300 group-hover:bg-stone-300/50">
                <feature.icon className="h-6 w-6 text-stone-700" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-stone-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
