import Contactsection from "@/components/Contactsection";
import { DevelopmentSection } from "@/components/Developmentsection";
import { ExperienceSection } from "@/components/Experiencesection";
import FaqSection from "@/components/FaqSection";
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
      <Herosection />
      <Marque />
      <Miniservices />
      <Miniaboutsection />
      <Servicesection />
      <ExperienceSection />
      <DevelopmentSection />
      <ProcessSection />
      <TestimonialsSection testimonials={Testimonaldata}>
        <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-5xl">
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
