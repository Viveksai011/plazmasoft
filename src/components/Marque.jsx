import React from "react";
import Airbnb from "@/Icons/airbnb";
import Disney from "@/Icons/disney";
import Facebook from "@/Icons/facebook";
import Apple from "@/Icons/apple";
import Spark from "@/Icons/spark";
import Samsung from "@/Icons/samsung";
import Quora from "@/Icons/quora";
import Sass from "@/Icons/sass";

const logos = [
  { Component: Facebook, alt: "Facebook" },
  { Component: Disney, alt: "Disney" },
  { Component: Airbnb, alt: "Airbnb" },
  { Component: Apple, alt: "Apple" },
  { Component: Spark, alt: "Spark" },
  { Component: Samsung, alt: "Samsung" },
  { Component: Quora, alt: "Quora" },
  { Component: Sass, alt: "Sass" },
];

const Marque = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <h2 className="text-xl mx-auto text-customBg  font-semibold text-center p-3  ">
        Our Happy Clients
      </h2>
      <div className="flex animate-infinite-scroll gap-16 whitespace-nowrap py-4">
        {duplicatedLogos.map(({ Component, alt }, index) => (
          <div key={index} className="flex-shrink-0 h-16 flex items-center">
            <Component color="#000" aria-label={alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marque;
