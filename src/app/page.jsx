import Contactsection from "@/components/Contactsection";
import { DevelopmentSection } from "@/components/Developmentsection";
import { ExperienceSection } from "@/components/Experiencesection";
import  FaqSection  from "@/components/FaqSection";
import { faqs, comparisonData } from "@/utils/Faqdata";
import Herosection from "@/components/Herosection";
import Marque from "@/components/Marque";
import Miniaboutsection from "@/components/Miniaboutsection";
import Miniservices from "@/components/Miniservices";
import { ProcessSection } from "@/components/Process";
import { Servicesection } from "@/components/Servicesection";
import { TestimonialsSection } from "@/components/Testimonial/testimonials-section";
import { Testimonaldata } from "@/utils/Hometestimonials";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <div className="absolute h-full opacity-20  w-full bg-secondarycustomBg bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_100%_10%,#000_0%,transparent_110%)]"></div> */}
      <Herosection />
      <Marque/>
      <Miniservices />
      <Miniaboutsection />
      <Servicesection />
      <ExperienceSection />
      <DevelopmentSection />
      <ProcessSection />
       <TestimonialsSection testimonials={Testimonaldata}>
              <h2 className="font-serif font-bold text-3xl lg:text-5xl text-gray-900">
                Customer said
                <br />
                about <span className="italic text-customBg">Krishly</span>
              </h2>
        </TestimonialsSection>
      <Contactsection />
      <FaqSection faqs={faqs} comparisonData={comparisonData} />
    </main>
  );
}
