import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetInterval(); // Start autoplay on mount

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index, images.length]);

  const handleIndicatorClick = (i: number) => {
    setIndex(i);
    resetInterval(); // Restart timer on click
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Imagenes superpuestas */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorClick(i)}
            className={`h-1 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
              i === index ? "bg-pink-500 w-8" : "bg-gray-300 w-6"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
