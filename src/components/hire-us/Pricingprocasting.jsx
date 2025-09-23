import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { pricingContent } from "@/utils/Pricingprocasting";

const PricingProcrastination = () => {
  return (
    <section className="bg-[#E7F6FE] py-12 px-6 rounded-xl text-center">
      <div className="flex justify-center items-center gap-3 text-center text-3xl md:text-5xl font-bold mb-12">
        <span>{pricingContent.header.icon}</span>
        <h2>
          The Price of <span className="text-customBg">Procrastination</span>
        </h2>
        <span>{pricingContent.header.icon}</span>
      </div>

      <p className="text-2xl lg:text-3xl text-customBg/50 mb-8">
        {pricingContent.header.description}
      </p>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {pricingContent.cards.map((card, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl shadow-lg w-72 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center overflow-hidden group"
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
              <p className="text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="text-black max-w-[900px] mx-auto my-14 px-4 w-full text-center lg:text-[32px] italic font-medium leading-none md:text-[28px] text-[24px]">
        {pricingContent.quote.text}
      </blockquote>

      <div className="flex flex-wrap justify-around gap-8">
        <div className=" p-3 md:p-8">
          <h3 className="text-2xl font-semibold  mb-4 md:text-[28px] text-[24px] lg:text-[32px]">
            Get Your <span className="text-customBg">Free Strategy Call</span>
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            {pricingContent.strategyCall.description
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
          <Button className="px-8 bg-customBg h-fit whitespace-normal text-wrap hover:bg-[#0871AC]/10 hover:border-2 hover:border-[#0871AC] hover:text-customBg text-white rounded-3xl text-md font-semibold ">
            {pricingContent.strategyCall.buttonText}
          </Button>
        </div>

        <div className="p-3 md:p-8">
          <h3 className="text-2xl font-semibold  mb-4 md:text-[28px] text-[24px] lg:text-[32px]">
            Download
            <span className="text-customBg"> Free Website Audit </span>
             Checklist
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            {pricingContent.downloadChecklist.description
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
          <Button className="py-3 w-full md:w-[200px] border-2 text-wrap border-[#0871AC] bg-[#0871AC]/10 text-customBg hover:text-white rounded-3xl text-lg hover:bg-customBg font-semibold ">
            {pricingContent.downloadChecklist.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingProcrastination;
