import Curve from "@/Icons/curve";
import Dotline from "@/Icons/Dotline";
import Lightcurve from "@/Icons/lightcurve";
import { House, Mail, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Contactform from "@/components/Contactform";

const Contactsection = () => {
  return (
    <section className="relative z-10 max-w-[100rem] w-full overflow-hidden mx-auto p-5 lg:px-[150px] py-20 lg:py-[120px] ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold text-customBg">
                Contact Us
              </span>
              <h2 className="mb-6 font-bold uppercase text-dark text-3xl lg:text-4xl">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" bg-secondarycustomBg/10 text-primary  p-3 flex items-center h-fit mr-6 rounded-3xl">
                  <Mail className="w-6 h-6 text-customBg hover:animate-tada" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark ">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color ">
                    99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" bg-secondarycustomBg/10 text-primary  p-3 flex items-center h-fit mr-6 rounded-3xl">
                  <PhoneCall className="w-6 h-6 text-customBg hover:animate-tada" />{" "}
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark ">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color ">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className=" bg-secondarycustomBg/10 text-primary  p-3 flex items-center h-fit mr-6 rounded-3xl">
                  <House className="w-6 h-6 text-customBg hover:animate-tada" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark ">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color ">
                    info@yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-4/12">
            <Card className="relative rounded-lg bg-white p-8 shadow-lg">
              <CardContent className="p-0">
                <Contactform />
              </CardContent>

              <div>
                <span className="absolute -right-9 -top-10 z-[-1]">
                  <Curve />
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                  <Lightcurve />
                </span>
                <span className="absolute -bottom-7 -left-7 z-[-1]">
                  <Dotline />
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
