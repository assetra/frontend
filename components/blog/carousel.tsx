"use client";
import React, { useState, useEffect, useRef } from "react";
import DateFormatter from "./dateFormatter";
import TeamUrl from "./teamUrl";
import TeamName from "./teamName";

export interface Blog {
  id: number;
  author: string;
  title: string;
  content: string;
  image?: string;
  tags?: string;
  created_at: string;
}

type CarouselProps = {
  pins: Blog[];
};

const Carousel: React.FC<CarouselProps> = ({ pins }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pins.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pins.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full rounded-xl"
      data-carousel="slide"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel wrapper */}
      <div
        className="relative h-56 overflow-hidden rounded-xl md:h-96"
        aria-live="polite"
      >
        {pins.map((pin, index) => (
          <a
            href={`/blog/${pin.id}`}
            key={index}
            className={`absolute duration-700 ease-in-out min-h-[100%] w-[100%] rounded-xl ${
              index === currentIndex ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <div
              className="h-56 overflow-hidden rounded-xl md:h-96 flex flex-col justify-center items-center text-center p-4"
              style={{
                backgroundImage: `url(${pin.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute left-16 bottom-6 rounded-xl items-start text-left w-4/5">
                <div className="flex justify-start mb-2">
                  {pin.tags &&
                    pin.tags.split(",").map((tag) => (
                      <span
                        key={tag}
                        className="mr-2 bg-[#4B6BFB] px-2 py-1 rounded-btn text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                <h2 className="text-2xl font-semibold">{pin.title}</h2>
                <div className="flex align-middle gap-2 mt-2">
                  <a href={`/blog/author/${pin.author}`}>
                    <TeamUrl pen={pin.author} />
                  </a>
                  <a href={`/blog/author/${pin.author}`}>
                    <TeamName pen={pin.author} />
                  </a>
                  <DateFormatter datetime={pin.created_at} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {pins.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
