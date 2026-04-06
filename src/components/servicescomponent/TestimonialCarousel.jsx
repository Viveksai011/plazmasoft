"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { StarRating } from "@/components/Testimonial/star-rating";
import Image from "next/image";

const TestimonialCarousel = ({ testimonials = [] }) => {
  const defaultTestimonials = [
    {
      id: 1,
      name: "Jane D",
      role: "CEO",
      avatar: null,
      content:
        "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
      rating: 5,
    },
    {
      id: 2,
      name: "Harsh P.",
      role: "Product Designer",
      avatar: null,
      content:
        "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jhone",
      role: "CEO",
      avatar: null,
      content:
        "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
      rating: 5,
    },
    {
      id: 4,
      name: "Harish.",
      role: "Product Designer",
      avatar: null,
      content:
        "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
      rating: 5,
    },
    {
      id: 5,
      name: "Alex",
      role: "Product ",
      avatar: null,
      content:
        "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
      rating: 5,
    },
  ];

  const data = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const getVisibleSlides = () => {
    return typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 2;
  };

  useEffect(() => {
    const handleResize = () => {
      const newVisibleSlides = getVisibleSlides();
      setVisibleSlides(newVisibleSlides);
    };

    // Set initial visibleSlides on mount
    setVisibleSlides(getVisibleSlides());

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = data.length - visibleSlides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  return (
    <section className="mx-auto max-w-[86rem] px-4 py-24">
      <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-8 sm:max-w-2xl lg:max-w-full lg:flex-row lg:justify-between">
        <div className="w-full text-center lg:w-2/5 lg:text-left">
          <span className="mb-4 block w-fit rounded-lg bg-customBg px-4 py-1 text-sm font-medium text-white">
            Testimonial
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-[3.25rem] text-gray-900">
            23k+ Customers gave their{" "}
            <span className="bg-customBg bg-clip-text text-transparent">Feedback</span>
          </h2>

          <div className="flex items-center justify-center gap-10 lg:justify-start">
            <button
              onClick={prevSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6 text-indigo-600 group-hover:text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6 text-indigo-600 group-hover:text-white" />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden lg:w-3/5">
          <div
            className="flex gap-2 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (visibleSlides === 1 ? 100 : 50)}%)`,
            }}
          >
            {data.map((testimonial, index) => {
              const isActive = index >= currentSlide && index < currentSlide + visibleSlides;

              return (
                <div
                  key={testimonial.id}
                  className={`group w-full flex-shrink-0 rounded-2xl border border-solid bg-white p-6 transition-all duration-500 sm:w-[calc(50%-8px)] ${
                    isActive ? "border-indigo-600" : "border-gray-300 hover:border-indigo-600"
                  }`}
                >
                  <div className="mb-3 flex items-center gap-5">
                    <Image
                      src={testimonial.avatar || "/img/avatarfallback.webp"}
                      alt={testimonial.name}
                      className="mr-4 h-12 w-12 rounded-full object-cover"
                      width={100}
                      height={100}
                    />
                    <div className="grid gap-1">
                      <h5
                        className={`font-medium transition-all duration-500 ${
                          isActive ? "text-customBg" : ""
                        }`}
                      >
                        {testimonial.name}
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>

                  <StarRating rating={testimonial.rating} />

                  <p className="mt-2 min-h-24 text-sm leading-6 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                    {testimonial.content}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-6 bg-customBg" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
