import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";

const HeroSection = ({ HeroSection }) => {
  return (
    <section className="py-20 w-full px-4 relative overflow-hidden">
      <div className="flex max-w-[86rem] mx-auto mt-10 w-full flex-col md:flex-row justify-between w-full gap-4 items-center">
        <div className="space-y-6 text-center max-w-[900px] w-full lg:text-left">
          <div>
            <h1 className=" font-bold text-black leading-10 text-[2.2rem] lg:leading-[1.2] lg:text-[2.6rem]">
              {HeroSection.heroTitle}
            </h1>
            <p className="text-[2.2rem] mt-2 font-bold text-customBg ">{HeroSection.subtitle}</p>
          </div>

           <p className="text-2xl font-bold text-[1.8rem] mt-2  tracking-wider
                     text-[#e8f7ff] [text-shadow:_2px_2px_0_#0871AC,_-2px_-2px_0_#0871AC,_2px_-2px_0_#0871AC,_-2px_2px_0_#0871AC]">
            Stop Waiting Start Building
          </p>

          <p className="text-base text-gray-800/80 !m-1 leading-relaxed max-w-[580px] mx-auto lg:mx-0">
            {HeroSection.description}
          </p>

          <Button className="bg-customBg text-white font-medium px-8 py-3 rounded-full text-base shadow-md hover:bg-customBg/85 transition-all duration-300">
            {HeroSection.cta}
          </Button>
        </div>

       
          <div className="flex flex-col items-end">
            <Image
              src={HeroSection?.image}
              alt={HeroSection?.heroTitle}
              width={950}
              height={650}
              className="w-full max-w-lg "
              priority
            />
          <p className="text-center flex items-center text-[20px] self-center w-full">{HeroSection.imageText}</p>
        </div>
      </div>
        <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-50" />
      <Inversecirclecurve className="absolute -left-0  top-0 z-[-1] opacity-30 lg:opacity-50" />
    </section>
  );
};

export default HeroSection;
