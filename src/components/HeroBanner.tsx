"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import banner1 from "../images/pexels-thehijabcompany-30077119.jpg";
import banner2 from "../images/pexels-thehijabcompany-30077117.jpg";
import banner3 from "../images/pexels-venvick-33908524.jpg";
const slides = [
  {
    id: 1,
    image: banner1,
    title: "Elegance in Modesty",
    subtitle: "Discover timeless pieces that honor your faith while expressing your unique style",
    cta: "Explore Collection",
    link: "/borkha",
  },
  {
    id: 2,
    image: banner2,
    title: "Graceful Abayas",
    subtitle: "Sophisticated designs crafted for the modern Muslim woman",
    cta: "Shop Abayas",
    link: "/abaya",
  },
  {
    id: 3,
    image: banner3,
    title: "Pure Confidence",
    subtitle: "Premium fabrics that feel as beautiful as they look",
    cta: "Shop Now",
    link: "/hijab",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        className="h-[500px] md:h-[600px] lg:h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div
                    className="max-w-xl"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <h1 className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-lg text-stone-200 md:text-xl">
                      {slide.subtitle}
                    </p>
                    <div className="mt-8">
                      <Link
                        href={slide.link}
                        className="inline-flex items-center rounded-sm bg-white px-8 py-4 text-sm font-medium text-stone-900 transition-all duration-300 hover:bg-stone-100 hover:shadow-lg"
                      >
                        {slide.cta}
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <span className="mb-2 text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
