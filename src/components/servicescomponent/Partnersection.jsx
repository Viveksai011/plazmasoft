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

const PartnersSection = () => {
  return (
    <section className="py-16 max-w-[86rem] w-full container mx-auto px-6">
      <div className="flex flex-col items-start gap-5 mb-12">
        <h2 className="text-4xl font-semibold text-black border-b-4 border-customBg w-fit pb-4">
          OUR PARTNERS
        </h2>
        <p className="text-lg text-black/80">Companies we've worked with</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:justify-between">
        {logos.map(({ Component, alt }) => (
          <div key={alt} className="flex-shrink-0 h-16 flex items-center">
            <Component color="#000" aria-label={alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
