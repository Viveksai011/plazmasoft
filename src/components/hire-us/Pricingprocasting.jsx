import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pricingContent } from "@/utils/Pricingprocasting";

const PricingProcrastination = () => {
  return (
    <section className="rounded-xl bg-[#E7F6FE] px-6 py-12 text-center">
      <div className="mb-12 flex items-center justify-center gap-3 text-center text-3xl font-bold md:text-5xl">
        <span>{pricingContent.header.icon}</span>
        <h2>
          The Price of <span className="text-customBg">Procrastination</span>
        </h2>
        <span>{pricingContent.header.icon}</span>
      </div>

      <p className="mb-8 text-2xl text-customBg/50 lg:text-3xl">
        {pricingContent.header.description}
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-8">
        {pricingContent.cards.map((card, index) => (
          <div
            key={index}
            className="group relative w-72 overflow-hidden rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
              <p className="text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="mx-auto my-14 w-full max-w-[900px] px-4 text-center text-[24px] font-medium italic leading-none text-black md:text-[28px] lg:text-[32px]">
        {pricingContent.quote.text}
      </blockquote>

      <div className="flex flex-wrap justify-around gap-8">
        <div className="p-3 md:p-8">
          <h3 className="mb-4 text-2xl text-[24px] font-semibold md:text-[28px] lg:text-[32px]">
            Get Your <span className="text-customBg">Free Strategy Call</span>
          </h3>
          <p className="mb-4 text-lg text-gray-700">
            {pricingContent.strategyCall.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <Button className="text-md h-fit whitespace-normal text-wrap rounded-3xl bg-customBg px-8 font-semibold text-white hover:border-2 hover:border-[#0871AC] hover:bg-[#0871AC]/10 hover:text-customBg">
            {pricingContent.strategyCall.buttonText}
          </Button>
        </div>

        <div className="p-3 md:p-8">
          <h3 className="mb-4 text-2xl text-[24px] font-semibold md:text-[28px] lg:text-[32px]">
            Download
            <span className="text-customBg"> Free Website Audit </span>
            Checklist
          </h3>
          <p className="mb-4 text-lg text-gray-700">
            {pricingContent.downloadChecklist.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <Button className="w-full text-wrap rounded-3xl border-2 border-[#0871AC] bg-[#0871AC]/10 py-3 text-lg font-semibold text-customBg hover:bg-customBg hover:text-white md:w-[200px]">
            {pricingContent.downloadChecklist.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingProcrastination;
