import { Guaranteestext } from "@/utils/Pricingprocasting";
import Image from "next/image";
import React from "react";

const Guaranteesection = () => {
  return (
    <section className="py-16">
        <h2 className="text-center text-3xl md:text-5xl font-bold py-12">
        <span className="text-customBg">Iron-Clad </span>Guarantees</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {Guaranteestext.map((card, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl border-2 border-white shadow-lg w-72 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-customBg/15 to-white group-hover:from-white group-hover:to-white transition-all duration-500 z-0" />

            <div className="relative z-10">
              <Image
                width={100}
                height={100}
                src={card.image}
                alt={card.alt}
                className="object-fill w-52 h-52 mx-auto mb-4"
              />
              <p className=" text-xl font-semibold text-customBg">{card.text1}</p>
              <p className=" text-xl font-semibold text-customBg">{card.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guaranteesection;
