"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Loyal Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    quote: "The quality of their borkhas is absolutely exceptional. The fabric is soft yet durable, and the designs are both modest and elegant. Fast delivery and beautiful packaging made the experience even better.",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    role: "Fashion Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    quote: "I've tried many modest fashion brands, but Modest Collection stands out. Their abayas are sophisticated and comfortable - perfect for both daily wear and special occasions. Truly a brand that understands modern Muslim women.",
  },
  {
    id: 3,
    name: "Zara Khan",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
    quote: "Finding high-quality hijabs that stay in place all day was a challenge until I discovered Modest Collection. Their silk hijabs are luxurious, and the cotton ones are perfect for everyday use. Highly recommend!",
  },
  {
    id: 4,
    name: "Nadia Islam",
    role: "Repeat Customer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
    quote: "The attention to detail in every piece is remarkable. From the stitching to the fabric choice, everything screams quality. Their inner caps are so comfortable - no more headaches from tight caps!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-stone-100 py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Quote className="h-96 w-96 text-stone-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-light text-stone-900 md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Real stories from real women who have embraced modest fashion with elegance and confidence
          </p>
        </div>

        {/* Testimonial Slider */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full rounded-lg bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  {/* Stars */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 text-stone-600 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-stone-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-stone-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
