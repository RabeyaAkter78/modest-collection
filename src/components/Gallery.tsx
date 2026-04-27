"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import  img1 from "../images/download (10).jpg";
import  img2 from "../images/download (11).jpg";
import  img3 from "../images/download (12).jpg";
import  img4 from "../images/download (13).jpg";
import  img5 from "../images/download (14).jpg";
import  img6 from "../images/download (15).jpg";
import  img7 from "../images/download (16).jpg";
import  img8 from "../images/download (17).jpg";

const galleryImages = [
  {
    src: img1,
    alt: "Elegant Abaya Collection",
    span: "row-span-2",
  },
  {
    src: img2,
    alt: "Premium Hijab Styles",
    span: "",
  },
  {
    src: img3,
    alt: "Modest Fashion",
    span: "",
  },
  {
    src: img4,
    alt: "Borkha Designs",
    span: "row-span-2",
  },
  {
    src: img5,
    alt: "Fashion Details",
    span: "",
  },
  {
    src: img6,
    alt: "Modest Style",
    span: "",
  },
  {
    src: img7,
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
              onClick={() => setSelectedImage(typeof image.src === "string" ? image.src : image.src.src)}
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
