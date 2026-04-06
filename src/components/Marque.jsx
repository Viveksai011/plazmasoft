import Airbnb from "@/Icons/airbnb";
import Disney from "@/Icons/disney";
import Facebook from "@/Icons/facebook";
import Apple from "@/Icons/apple";
import Spark from "@/Icons/spark";
import Samsung from "@/Icons/samsung";
import Quora from "@/Icons/quora";
import Sass from "@/Icons/sass";
import * as motion from "motion/react-client";

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
      <motion.h2
        className="mx-auto p-3 text-center text-xl font-semibold text-customBg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Happy Clients
      </motion.h2>
      <div className="flex animate-infinite-scroll gap-16 whitespace-nowrap py-4">
        {duplicatedLogos.map(({ Component, alt }, index) => (
          <div key={index} className="flex h-16 flex-shrink-0 items-center">
            <Component color="#000" aria-label={alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marque;
