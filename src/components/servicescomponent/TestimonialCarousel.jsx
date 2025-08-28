"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { StarRating } from "@/components/Testimonial/star-rating";
import Image from "next/image";

const testimonials = [
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
    name: "Jane D",
    role: "CEO",
    avatar: null,
    content:
      "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
    rating: 5,
  },
  {
    id: 4,
    name: "Harsh P.",
    role: "Product Designer",
    avatar: null,
    content:
      "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
    rating: 5,
  },
  {
    id: 5,
    name: "Harsh P.",
    role: "Product ",
    avatar: null,
    content:
      "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
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

  const maxSlides = testimonials.length - visibleSlides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  return (
    <section className="py-24 mx-auto max-w-[86rem] px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-between max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <span className="text-sm text-white bg-customBg w-fit rounded-lg px-4 py-1 font-medium mb-4 block">
            Testimonial
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
            23k+ Customers gave their{" "}
            <span className="text-transparent bg-clip-text bg-customBg">
              Feedback
            </span>
          </h2>

          {/* Slider controls */}
          <div className="flex items-center justify-center lg:justify-start gap-10">
            <button
              onClick={prevSlide}
              className="group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6 text-indigo-600 group-hover:text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6 text-indigo-600 group-hover:text-white" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-3/5 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-2"
            style={{
              transform: `translateX(-${
                currentSlide * (visibleSlides === 1 ? 100 : 50)
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isActive =
                index >= currentSlide && index < currentSlide + visibleSlides;

              return (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full sm:w-[calc(50%-8px)] bg-white border border-solid rounded-2xl p-6 transition-all duration-500 group ${
                    isActive
                      ? "border-indigo-600"
                      : "border-gray-300 hover:border-indigo-600"
                  }`}
                >
                  <div className="flex items-center gap-5 mb-3 ">
                    <Image
                      src={testimonial.avatar || "/img/avatarfallback.webp"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
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
                      <span className="text-sm leading-6 text-gray-500">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                  <StarRating rating={testimonial.rating} />

                  <p className="text-sm text-gray-500 leading-6 mt-2 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                    {testimonial.content}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-customBg w-6" : "bg-gray-300"
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
