import * as motion from "motion/react-client";

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
    <motion.section
      className="relative z-10 mx-auto w-full max-w-[100rem] overflow-hidden p-5 py-20 lg:px-[100px] lg:py-[120px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="-mx-4 flex flex-wrap lg:justify-between">
        <div className="w-full px-4 xl:w-[58%]">
          <motion.div
            className="mb-12 h-full w-full xl:mb-0 xl:max-w-[800px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                <div className="inline">
                  <Rocket className="mr-2 inline h-9 w-9 text-customBg" />
                  Our "Demo in 21 Days" Process{" "}
                </div>
              </h2>

              <p className="text-lg leading-relaxed text-gray-600">
                Here's exactly how we turn your idea into reality:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border-0 bg-thirdbg shadow-lg transition-all duration-300 hover:scale-105 hover:border-t-4 hover:border-t-customBg hover:shadow-xl"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex-shrink-0 rounded-xl bg-customBg p-3 text-white`}>
                        {" "}
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span
                          className={`rounded-full bg-customBg px-2 py-1 text-xs font-bold text-white`}
                        >
                          {step.step}
                        </span>
                        <h3 className="mt-1 text-sm font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-gray-600">{step.description}</p>

                    <div className={`${step.bgColor} rounded-lg border-l-4 border-gray-300 p-3`}>
                      <p className="text-xs font-medium leading-relaxed text-gray-700">
                        {step.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-full px-4 xl:w-[38%]">
          <Card className="relative rounded-lg bg-white p-7 shadow-lg">
            <motion.div
              className="mb-8 rounded-2xl bg-customBg p-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="mb-3 text-lg font-bold">The Result?</h3>
              <p className="mb-6 leading-relaxed text-purple-100">
                You're testing with real users while your competitors are still arguing about
                wireframes.
              </p>

              <Button className="gap-0 text-wrap text-[11.2px] font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
                <Phone className="mr-2 h-1 w-1" />
                Book Your Free Discovery Call{" "}
                <span className="hidden sm:inline"> - No Commitment Required</span>
              </Button>
            </motion.div>
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
    </motion.section>
  );
};

export default Contactsection;
