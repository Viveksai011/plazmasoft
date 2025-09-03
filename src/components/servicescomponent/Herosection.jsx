import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className=" py-20 max-w-[86rem] w-full  mx-auto px-6 lg:py-24">
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 items-center">
        <div className="space-y-6 text-center w-full lg:text-left">
          <nav aria-label="breadcrumb" className="flex justify-start">
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
                  Web App Development
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-[1.2]">
            <span className="text-customBg">Web App Development</span>
            <br />
            Services
          </h1>

          <p className="text-base text-text-secondary leading-relaxed max-w-[580px] mx-auto lg:mx-0">
            TechnoYuga offers comprehensive web app development services,
            specializing in creating custom, responsive, and user-friendly web
            applications. Our expert web app developers leverages the latest
            technologies to deliver innovative solutions tailored to clients'
            specific needs.
          </p>

         
            <Button
              className="bg-customBg text-white font-medium px-8 py-3 rounded-full text-base shadow-md hover:bg-customBg/85 transition-all duration-300"
            >
              Connect with Experts
            </Button>
         
        </div>

        <div className="h-full w-full flex justify-end">
          <Image
            src="/img/svgviewer.svg"
            alt="Web App Development illustration"
            width={950}
            height={650}
            className="w-full max-w-lg h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
