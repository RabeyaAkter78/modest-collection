"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1612454239454-1a99709a7482?w=800&q=80",
    alt: "Elegant Abaya Collection",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&q=80",
    alt: "Premium Hijab Styles",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    alt: "Modest Fashion",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    alt: "Borkha Designs",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    alt: "Fashion Details",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    alt: "Modest Style",
    span: "",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <span className="text-sm font-medium tracking-widest text-stone-500 uppercase">
            Our Collection
          </span>
          <h2 className="mt-3 text-3xl font-light text-stone-900 md:text-4xl lg:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            A glimpse into our world of modest elegance
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-lg ${image.span}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-stone-900/0 transition-all duration-300 group-hover:bg-stone-900/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-white/90 p-3 backdrop-blur-sm">
                    <ZoomIn className="h-5 w-5 text-stone-900" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-h-[90vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
