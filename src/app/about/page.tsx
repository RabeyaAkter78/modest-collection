"use client";

import Image from "next/image";
import { Heart, Eye, Gem } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Faith First",
    description: "We believe modesty is a beautiful expression of faith. Every piece we create honors Islamic values while embracing contemporary elegance.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "From selecting the finest fabrics to perfecting every stitch, we obsess over the details that make our pieces truly special.",
  },
  {
    icon: Gem,
    title: "Quality Promise",
    description: "We never compromise on quality. Our pieces are designed to last, becoming cherished staples in your wardrobe for years to come.",
  },
];

const milestones = [
  { year: "2020", title: "The Beginning", description: "Modest Collection started as a small dream to provide elegant modest fashion in Bangladesh." },
  { year: "2021", title: "Growing Community", description: "We reached our first 1,000 customers who believed in our vision of modest elegance." },
  { year: "2022", title: "Expanding Collection", description: "Introduced our premium line of handcrafted abayas and designer borkhas." },
  { year: "2023", title: "Nationwide Presence", description: "Now delivering to all corners of Bangladesh with thousands of happy customers." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div data-aos="fade-right">
              <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
                Our Story
              </span>
              <h1 className="mt-4 text-4xl font-light text-stone-900 md:text-5xl lg:text-6xl">
                Elegance in Modesty
              </h1>
              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                Modest Collection was born from a simple belief: that modest fashion should never 
                mean compromising on style, quality, or self-expression. Founded in 2020, we set out 
                to create pieces that help Muslim women feel confident, beautiful, and true to their values.
              </p>
              <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                Every garment in our collection is thoughtfully designed, meticulously crafted, and 
                made with the modern Muslim woman in mind. We understand that modesty is deeply personal 
                – which is why we offer a range of styles from understated elegance to statement pieces.
              </p>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1612454239454-1a99709a7482?w=800&q=80"
                  alt="Modest Collection Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-lg">
                <p className="text-3xl font-light text-stone-900">3+</p>
                <p className="text-sm text-stone-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
              What We Stand For
            </span>
            <h2 className="mt-3 text-3xl font-light text-stone-900 md:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mx-auto mb-6 inline-flex rounded-full bg-stone-100 p-4">
                  <value.icon className="h-8 w-8 text-stone-700" />
                </div>
                <h3 className="text-xl font-medium text-stone-900">{value.title}</h3>
                <p className="mt-3 text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl font-light text-stone-900 md:text-4xl">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 hidden lg:block" />
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:col-start-2"}`}>
                    <span className="text-3xl font-light text-stone-400">{milestone.year}</span>
                    <h3 className="mt-2 text-xl font-medium text-stone-900">{milestone.title}</h3>
                    <p className="mt-2 text-stone-600">{milestone.description}</p>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 top-2 -translate-x-1/2">
                    <div className="h-4 w-4 rounded-full bg-stone-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-stone-900 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg text-stone-300 leading-relaxed">
            To empower Muslim women worldwide with fashion that celebrates modesty without 
            sacrificing style. We believe every woman deserves to feel confident, beautiful, 
            and true to her values.
          </p>
        </div>
      </section>
    </div>
  );
}
