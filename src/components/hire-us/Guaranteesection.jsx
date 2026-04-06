import { Guaranteestext } from "@/utils/Pricingprocasting";
import Image from "next/image";

const Guaranteesection = () => {
  return (
    <section className="py-16">
      <h2 className="py-12 text-center text-3xl font-bold md:text-5xl">
        <span className="text-customBg">Iron-Clad </span>Guarantees
      </h2>
      <div className="mb-8 flex flex-wrap justify-center gap-8">
        {Guaranteestext.map((card, index) => (
          <div
            key={index}
            className="group relative w-72 overflow-hidden rounded-xl border-2 border-white p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-customBg/15 to-white transition-all duration-500 group-hover:from-white group-hover:to-white" />

            <div className="relative z-10">
              <Image
                width={100}
                height={100}
                src={card.image}
                alt={card.alt}
                className="mx-auto mb-4 h-52 w-52 object-fill"
              />
              <p className="text-xl font-semibold text-customBg">{card.text1}</p>
              <p className="text-xl font-semibold text-customBg">{card.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guaranteesection;
