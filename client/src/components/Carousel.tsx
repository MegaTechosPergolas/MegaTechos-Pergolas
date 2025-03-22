import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CarouselSlide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = ({
  slides,
  autoPlay = true,
  interval = 5000,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Setup autoplay
  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, interval);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [autoPlay, interval]);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const resumeAutoplay = () => {
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, interval);
    }
  };

  return (
    <div 
      className="relative h-[60vh] md:h-[70vh] overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                <Link href={slide.buttonLink}>
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full focus:outline-none transition-colors",
              index === currentSlide
                ? "bg-white"
                : "bg-white bg-opacity-50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
