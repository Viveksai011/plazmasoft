import Curve from "@/Icons/curve";
import Dotline from "@/Icons/Dotline";
import Lightcurve from "@/Icons/lightcurve";
import { Rocket, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Contactform from "@/components/Contactform";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/utils/Contactdata";

const Contactsection = () => {
  return (
    <section className="relative z-10 max-w-[100rem] w-full overflow-hidden mx-auto p-5 lg:px-[150px] py-20 lg:py-[120px] ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 xl:w-[58%]">
            <div className="mb-12 w-full xl:max-w-[800px] h-full xl:mb-0">
              <div className="mb-8">
                <h2 className="mb-6  font-bold text-gray-900 text-3xl lg:text-4xl leading-tight">
                  <div className="inline">
                    <Rocket className="w-9 h-9 mr-2 text-purple-600 inline" />
                    Our "Demo in 21 Days" Process{" "}
                  </div>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Here's exactly how we turn your idea into reality:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {processSteps.map((step, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden hover:border-t-4 hover:border-t-purple-500  border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`bg-gradient-to-t  from-secondarycustomBg to-customBg p-3 rounded-xl text-white flex-shrink-0`}
                        >
                          {" "}
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span
                            className={`px-2 py-1 bg-gradient-to-t  from-secondarycustomBg to-customBg text-white rounded-full text-xs font-bold`}
                          >
                            {step.step}
                          </span>
                          <h3 className="font-bold text-gray-900 text-sm mt-1">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {step.description}
                      </p>

                      <div
                        className={`${step.bgColor} rounded-lg p-3 border-l-4 border-gray-300`}
                      >
                        <p className="text-gray-700 text-xs leading-relaxed font-medium">
                          {step.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-4  xl:w-[38%]">
            <Card className="relative rounded-lg bg-white p-7 shadow-lg">
              <div className="bg-gradient-to-t  from-secondarycustomBg to-customBg  mb-8 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">The Result?</h3>
                <p className="mb-6 text-purple-100 leading-relaxed">
                  You're testing with real users while your competitors are
                  still arguing about wireframes.
                </p>

                <Button className=" font-semibold shadow-lg text-[11.2px] gap-0 hover:shadow-xl text-wrap transition-all duration-300">
                  <Phone className="w-1  h-1 mr-2" />
                  Book Your Free Discovery Call - No Commitment Required
                </Button>
              </div>
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
