import Image from "next/image";
import { Button } from "@/components/ui/button";
import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";

const HeroSection = ({ HeroSection }) => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-20">
      <div className="mx-auto mt-10 flex w-full max-w-[86rem] flex-col items-center justify-between gap-4 md:flex-row">
        <div className="w-full max-w-[900px] space-y-6 text-center lg:text-left">
          <div>
            <h1 className="text-[2.2rem] font-bold leading-10 text-black lg:text-[2.6rem] lg:leading-[1.2]">
              {HeroSection.heroTitle}
            </h1>
            <p className="mt-2 text-[2.2rem] font-bold text-customBg">{HeroSection.subtitle}</p>
          </div>

          <p className="mt-2 text-2xl text-[1.8rem] font-bold tracking-wider text-[#e8f7ff] [text-shadow:_2px_2px_0_#0871AC,_-2px_-2px_0_#0871AC,_2px_-2px_0_#0871AC,_-2px_2px_0_#0871AC]">
            Stop Waiting Start Building
          </p>

          <p className="!m-1 mx-auto max-w-[580px] text-base leading-relaxed text-gray-800/80 lg:mx-0">
            {HeroSection.description}
          </p>

          <Button className="rounded-full bg-customBg px-8 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-customBg/85">
            {HeroSection.cta}
          </Button>
        </div>

        <div className="flex flex-col items-end">
          <Image
            src={HeroSection?.image}
            alt={HeroSection?.heroTitle}
            width={950}
            height={650}
            className="w-full max-w-lg"
            priority
          />
          <p className="flex w-full items-center self-center text-center text-[20px]">
            {HeroSection.imageText}
          </p>
        </div>
      </div>
      <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-50" />
      <Inversecirclecurve className="absolute -left-0 top-0 z-[-1] opacity-30 lg:opacity-50" />
    </section>
  );
};

export default HeroSection;
