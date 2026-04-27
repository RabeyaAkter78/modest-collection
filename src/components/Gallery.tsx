import Image from "next/image";
import img1 from "../images/download (18).jpg";
import img2 from "../images/download (19).jpg";
import img3 from "../images/download (9).jpg";
import img4 from "../images/images (1).jpg";
import img5 from "../images/images (2).jpg";
import img6 from "../images/images (3).jpg";
export default function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold">Product Gallery</h2>
        <div className="mt-6 columns-2 gap-4 md:columns-3">
          {images.map((src) => (
            <div key={src.src} className="mb-4 overflow-hidden rounded-lg">
              <Image
                src={src}
                height={1000}
                width={1000}
                alt="Product"
                className="h-150 w-full object-cover transition-transform hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
