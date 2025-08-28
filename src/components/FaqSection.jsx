import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faqcurve from "@/Icons/Faqcurve";
import { ArrowRight, CircleX, Shield } from "lucide-react";

import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = {
  withoutUs: [
    "Your idea stays an idea while competitors launch",
    "You spend months finding the 'perfect' developer",
    "You waste $20K+ learning expensive lessons",
    "That perfect market opportunity passes you by",
  ],
  withUs: [
    "Working MVP in your hands within 8 days",
    "Real user feedback guiding smart iterations",
    "Professional development team that gets it",
    "Peace of mind building the right thing",
  ],
};

export default function FaqSection({ faqs }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between relative max-w-[92rem] max-md:p-4 w-full mx-auto">
      <div className="absolute top-20 right-20 text-yellow-400 text-4xl">✦</div>
      <div className="absolute bottom-20 right-20 text-yellow-400 text-4xl">
        ✦
      </div>
      <div className="absolute top-1/2 right-[20%] text-yellow-400 text-4xl">
        ✦
      </div>
      <div className="absolute top-1/2 left-[20%] text-yellow-400 text-4xl">
        ✦
      </div>
      <div className="absolute top-20 left-20 text-yellow-400 text-4xl">✦</div>
      <div className="absolute bottom-20 left-20 text-yellow-400 text-4xl">
        ✦
      </div>

      <div className="min-h-screen flex relative overflow-hidden lg:w-2/3">
        <Faqcurve className="absolute top-0 right-0 inset-[9px] w-full h-[800px]" />
        <div className="container mx-auto md:px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <p className="text-customBg font-medium text-sm tracking-wider uppercase mb-6">
              FREQUENTLY ASK QUESTION
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              You ask? We <em className="italic font-light">answer</em>
            </h2>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-4"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-purple-100 rounded-lg px-6 py-2 bg-white/80 hover:bg-white/90 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4 pb-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br lg:mt-[210px] max-lg:container mx-auto h-fit from-customBg to-secondarycustomBg text-primary-foreground rounded-2xl px-4 py-7 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 right-8 w-16 h-16 border-2 border-primary-foreground rounded-full"></div>
          <div className="absolute bottom-12 left-8 w-12 h-12 border-2 border-primary-foreground rounded-full"></div>
          <div className="absolute top-1/2 right-16 w-8 h-8 border-2 border-primary-foreground rounded-full"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-8">
            Stop Waiting. Start Building.
          </h3>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Without us:
            </h4>
            <ul className="space-y-3">
              {comparisonData.withoutUs.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CircleX className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary-foreground/10 text-white backdrop-blur-sm rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold mb-4">With us:</h4>
            <ul className="space-y-3">
              {comparisonData.withUs.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Button className="bg-primary-foreground text-primary font-bold py-5 px-8 rounded-full shadow-lg hover:bg-primary-foreground/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Start Your Project Now
              <ArrowRight className="w-5 h-5" />
            </Button>

            <p className="text-primary-foreground/80 text-sm mt-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Secure process. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
