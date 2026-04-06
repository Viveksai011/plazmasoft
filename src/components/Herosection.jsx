import Circlecurve from "@/Icons/Circlecurve";
import { Button } from "@/components/ui/button";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";
import { Medal, Headphones, Code, FileCheck } from "lucide-react";

const Herosection = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[80px] md:pt-[150px] xl:pb-[60px] xl:pt-[180px] 2xl:pt-[210px]"
    >
      <div className="container mx-auto w-full">
        <div className="mx-auto flex flex-wrap justify-center px-4 text-center">
          <h1 className="mb-5 w-full max-w-[900px] text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Leading Web & Mobile Application Development Experts
          </h1>
          <div className="mx-auto w-full max-w-[800px]">
            <p className="text-body-color mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
              We specialize in building high-performance web and mobile apps, transforming ideas
              into market-ready products. Let’s bring yours to life!
            </p>

            <Button className="rounded-2xl bg-customBg p-6 text-base font-semibold text-white duration-300 ease-in-out hover:bg-customBg/80">
              Book Your Free Consultation
            </Button>

            <div className="mx-auto mt-[40px] !w-full !max-w-[660px] rounded-xl border border-[#90C0DC] bg-[#F5FBFF] p-4">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-customBg">
                <div className="flex items-center">
                  <span className="mr-1 flex text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span>100+ Upwork Reviews</span>
                </div>

                <div className="hidden h-4 w-px bg-customBg sm:block"></div>

                <div className="flex items-center">
                  <Medal className="mr-2 text-customBg" />
                  <span>Top Rated Plus</span>
                </div>

                <div className="hidden h-4 w-px bg-customBg sm:block"></div>

                <div className="flex items-center">
                  <Headphones className="mr-2 text-customBg" />
                  <span>30 Days Free Support</span>
                </div>

                <div className="hidden h-4 w-px bg-customBg md:block"></div>

                <div className="flex items-center">
                  <Code className="mr-2 text-customBg" />
                  <span>100% Code Ownership</span>
                </div>

                <div className="hidden h-4 w-px bg-customBg md:block"></div>

                <div className="flex items-center">
                  <FileCheck className="mr-2 text-customBg" />
                  <span>Risk-Free Contract</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
      <Inversecirclecurve className="absolute -left-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
    </section>
  );
};

export default Herosection;
