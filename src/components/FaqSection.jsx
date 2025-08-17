import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faqcurve from "@/Icons/Faqcurve";
import { faqs } from "@/utils/Faqdata";

export default function FaqSection() {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      <Faqcurve className="absolute bottom-0 inset-[9px] w-full h-full opacity-100" />

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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-500 font-medium text-sm tracking-wider uppercase mb-6">
              FREQUENTLY ASK QUESTION
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              You ask? We <em className="italic font-light">answer</em>
            </h1>
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
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-gray-800 hover:text-purple-600 transition-colors [&[data-state=open]]:text-purple-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
