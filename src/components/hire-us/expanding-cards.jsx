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

    // const gridStyle = {
    //   ...(isDesktop
    //     ? {
    //         gridTemplateColumns: items
    //           .map((_, i) => (i === activeIndex ? "5fr" : "1fr"))
    //           .join(" "),
    //       }
    //     : {
    //         gridTemplateRows: items
    //           .map((_, i) => (i === activeIndex ? "5fr" : "1fr"))
    //           .join(" "),
    //       }),
    //   ...(isDesktop
    //     ? { gridTemplateRows: "1fr" }
    //     : { gridTemplateColumns: "1fr" }),
    // };

    const gridStyle = isDesktop
  ? {
      gridTemplateColumns: items
        .map((_, i) => (i === activeIndex ? "5fr" : "1fr"))
        .join(" "),
      gridTemplateRows: "1fr",
    }
  : undefined;

    return (
      <ul
        className={cn(
          "w-full max-w-[92rem]  gap-0 grid ",
          "transition-all duration-500 border-l-[3px] border-black ease-out ",
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
              "md:min-w-[80px] md:border-r-[3px] md:border-black last:border-r-0"
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            tabIndex={0}
          >
            <article className="relative flex gap-8 flex-col h-fit p-4">
              <div className="text-gray-800 font-bold text-4xl lg:text-[55px]">{item.id}</div>

              <h3 className="text-lg font-semibold text-gray-900 leading-[2.2rem] mb-2 text-[20px] sm:text-[22px] md:text-[24px]">
                {item.title}
              </h3>

              <div
                className={cn(
                  "transition-all duration-300",
                  activeIndex === index
                    ? "opacity-100 "
                    : "opacity-0 max-h-0 overflow-hidden"
                )}
              >
                <p className="text-black font-normal font-poppins not-italic leading-normal text-[20px] sm:text-[22px] md:text-[24px]">
                  {item.description}
                </p>
              </div>

              <div
                className={cn(
                  "transition-all duration-300",
                  activeIndex === index
                    ? "opacity-100 max-h-48 "
                    : "opacity-0 max-h-0 overflow-hidden"
                )}
              >
                <p className="text-gray-700 text-sm font-poppins !leading-snug font-semibold whitespace-pre-line text-[20px] sm:text-[22px] md:text-[24px]">
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
