import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

export function ExperienceSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20  overflow-x-hidden ">
      <div className="flex max-w-[92rem] flex-col lg:flex-row  justify-between gap-8 lg:gap-12 items-center mx-auto px-8 ">
        <div className="relative order-2 lg:order-1">
          <div className="relative xs:w-[350px] xs:h-[350px]  sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] mx-auto">
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/img/about.webp"
                alt="Team collaboration"
                width={384}
                height={384}
                className="w-full h-full object-cover hover:animate-spin transition-transform duration-500 ease-in-out rounded-full"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center shadow-xl border border-green-100">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-secondarycustomBg mb-1 lg:mb-2">
                  15+
                </div>
                <div className="text-gray-700 font-medium text-center leading-tight text-xs sm:text-sm lg:text-base">
                  Years
                  <br />
                  Experience
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 lg:w-8 lg:h-8 bg-secondarycustomBg rounded-full opacity-80"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-8 h-8 lg:w-12 lg:h-12 bg-customBg rounded-full opacity-60"></div>
            <div className="hidden sm:block absolute top-1/4 -left-8 w-4 h-4 lg:w-6 lg:h-6 bg-green-400 rounded-full opacity-70"></div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:max-w-[50%] w-full order-1 lg:order-2">
          <div className="space-y-3 sm:space-y-4">
            <div className="text-customBg font-semibold text-xs sm:text-sm uppercase tracking-wider">
              FAST & EFFECTIVE
            </div>

            <h2 className="text-[27px] sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We're a global stakeholder relations and partnership building
              consultancy.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Get instant helpful resources about anything on the go, easily
              implement secure money transfer solutions, boost your daily
              efficiency, connect to other app users and create your own
              network, and much more with just a few taps. We deliver
              comprehensive IT solutions that drive business growth and digital
              transformation.
            </p>
          </div>

          <div className="pt-2 sm:pt-4">
            <Button
              size="lg"
              className="bg-customBg hover:bg-customBg/80 text-white px-6 py-2  sm:px-8 sm:py-3 rounded-3xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
            >
              <Calendar className="h-2.5 w-2.5 mr-1" /> Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
