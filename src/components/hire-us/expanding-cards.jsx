"use client";
import React, { useState, useEffect, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const ExpandingCards = forwardRef(
  ({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768);

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const gridStyle = isDesktop
      ? {
          gridTemplateColumns: items.map((_, i) => (i === activeIndex ? "5fr" : "1fr")).join(" "),
          gridTemplateRows: "1fr",
        }
      : undefined;

    return (
      <ul
        className={cn(
          "grid w-full max-w-[92rem] gap-0",
          "border-l-[3px] border-black transition-all duration-500 ease-out",
          "grid-rows-[repeat(auto-fill,_1fr)] md:grid-cols-[repeat(auto-fill,_1fr)] md:grid-rows-none",
          className
        )}
        style={gridStyle}
        ref={ref}
        {...props}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "group relative cursor-pointer text-gray-800",
              "last:border-r-0 md:min-w-[80px] md:border-r-[3px] md:border-black"
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            tabIndex={0}
          >
            <article className="relative flex h-fit flex-col gap-8 p-4">
              <div className="text-4xl font-bold text-gray-800 lg:text-[55px]">{item.id}</div>

              <h3 className="mb-2 text-[20px] text-lg font-semibold leading-[2.2rem] text-gray-900 sm:text-[22px] md:text-[24px]">
                {item.title}
              </h3>

              <div
                className={cn(
                  "transition-all duration-300",
                  activeIndex === index ? "opacity-100" : "max-h-0 overflow-hidden opacity-0"
                )}
              >
                <p className="font-poppins text-[20px] font-normal not-italic leading-normal text-black sm:text-[22px] md:text-[24px]">
                  {item.description}
                </p>
              </div>

              <div
                className={cn(
                  "transition-all duration-300",
                  activeIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                )}
              >
                <p className="font-poppins whitespace-pre-line text-[20px] text-sm font-semibold !leading-snug text-gray-700 sm:text-[22px] md:text-[24px]">
                  {item.content}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    );
  }
);

ExpandingCards.displayName = "ExpandingCards";
