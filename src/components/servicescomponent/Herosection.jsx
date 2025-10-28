import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";

const HeroSection = ({ HeroSection }) => {
  return (
    <section className=" py-20 max-w-[86rem] w-full  mx-auto px-6 lg:py-24">
      <div className="flex flex-col md:flex-row justify-between w-full gap-4 items-center">
        <div className="space-y-6 text-center w-full lg:text-left">
          {/* <nav aria-label="breadcrumb" className="flex justify-start">
            <ol className="flex items-center space-x-1.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-customBg transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 stroke-current" />
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-customBg transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 stroke-current" />
              </li>
              <li aria-current="page">
                <span className="bg-customBg text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  {HeroSection.heroTitle}
                </span>
              </li>
            </ol>
          </nav> */}

          <div>
            <h1 className=" font-bold text-black leading-10 text-[2.2rem] lg:leading-[1.2] lg:text-[2.6rem]">
              {HeroSection.heroTitle}
            </h1>
            <p className="text-[2.2rem] mt-2 font-bold text-customBg ">{HeroSection.subtitle}</p>
          </div>

          <p className="text-2xl font-bold text-[1.8rem] text-black !mt-0">
            Stop Waiting Start Building
          </p>

          <p className="text-base text-text-secondary leading-relaxed max-w-[580px] mx-auto lg:mx-0">
            {HeroSection.description}
          </p>

          <Button className="bg-customBg text-white font-medium px-8 py-3 rounded-full text-base shadow-md hover:bg-customBg/85 transition-all duration-300">
            {HeroSection.cta}
          </Button>
        </div>

       
          <div className="h-full w-full flex flex-col items-end">
            <Image
              src={HeroSection?.image}
              alt={HeroSection?.heroTitle}
              width={950}
              height={650}
              className="w-full max-w-lg h-auto"
              priority
            />
          <p className="text-center">{HeroSection.imageText}</p>
        </div>
      </div>
        <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-50" />
      <Inversecirclecurve className="absolute -left-0  top-0 z-[-1] opacity-30 lg:opacity-50" />
    </section>
  );
};

export default HeroSection;
