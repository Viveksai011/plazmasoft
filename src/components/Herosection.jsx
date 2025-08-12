import Circlecurve from "@/Icons/Circlecurve";
import Linewind from "@/Icons/Linewind";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";

const Herosection = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden  pb-16 pt-[120px] md:pb-[100px] md:pt-[150px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[100px] 2xl:pt-[210px]"
    >
      <div className="container w-full mx-auto">
        <div className=" flex flex-wrap px-4 mx-auto text-center justify-center">
          <h1 className="mb-5 text-3xl font-bold leading-tight max-w-[900px] w-full text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Leading Web & Mobile Application Development Experts
          </h1>
          <div className="max-w-[800px] w-full mx-auto">
            <p className=" mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
              We specialize in building high-performance web and mobile apps,
              transforming ideas into market-ready products. Let’s bring yours
              to life!
            </p>

            <Button className="bg-customBg p-6 rounded-2xl text-base font-semibold text-white duration-300 ease-in-out hover:bg-customBg/80">
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
      <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
      <Inversecirclecurve className="absolute -left-0  top-0 z-[-1] opacity-30 lg:opacity-100" />
      {/* <Linewind className="absolute bottom-0 left-0 right-10 z-[-1] opacity-30 lg:opacity-100" /> */}
    </section>
  );
};

export default Herosection;
