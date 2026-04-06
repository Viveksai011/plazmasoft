import { solutionData } from "@/utils/solutiondynamic/solutionData";
import HeroSection from "@/components/servicescomponent/Herosection";
import PartnersSection from "@/components/servicescomponent/Partnersection";
import ProjectsSection from "@/components/servicescomponent/Projectsection";
import { Servicetoolkit } from "@/components/servicescomponent/Servicetoolkit";
import FaqSection from "@/components/FaqSection";
import { TestimonialsSection } from "@/components/Testimonial/testimonials-section";
import Stoplosingcustomer from "@/components/servicescomponent/Stoplosingcustomer";
import BenefitsSection from "@/components/servicescomponent/Benefitsection";
import Ourservices from "@/components/servicescomponent/Ourservices";
import ProcessSteps from "@/components/hire-us/ProcessStep";
import GuaranteeSection from "@/components/servicescomponent/Guaranteesection";
import Bannersection from "@/components/servicescomponent/Bannersection";

export async function generateMetadata({ params }) {
  const solution = solutionData[params.solution];
  if (!solution) {
    return {
      title: "Solutions | Krishly - IT Consulting & Development",
      description:
        "Krishly offers innovative technology solutions to help businesses solve complex challenges and drive growth.",
    };
  }
  const hero = solution.heroSection || {};
  const title = hero.heroTitle
    ? `${hero.heroTitle} ${hero.subtitle || ""} | Krishly`.trim()
    : "Solutions | Krishly - IT Consulting & Development";
  const description =
    hero.description ||
    "Krishly offers innovative technology solutions to help businesses solve complex challenges and drive growth.";
  return { title, description };
}

export default function SolutionPage({ params }) {
  const solutionSlug = params.solution;
  const currentSolution = solutionData[solutionSlug] || solutionData.default;

  return (
    <div className="mx-auto w-full">
      <HeroSection
        HeroSection={
          currentSolution.heroSection || {
            heroTitle: currentSolution.heroTitle,
            subtitle: "",
            description: currentSolution.description,
            cta: "Contact Us",
            image: "",
          }
        }
      />
      <PartnersSection />
      {currentSolution.Stoplosing && <Stoplosingcustomer Stoplosing={currentSolution.Stoplosing} />}
      {currentSolution.BenefitsSectiontext && (
        <BenefitsSection groups={currentSolution.BenefitsSectiontext} />
      )}
      {currentSolution.Ourservices && <Ourservices differenceData={currentSolution.Ourservices} />}
      {currentSolution.developmenttool && (
        <Servicetoolkit developmenttool={currentSolution.developmenttool} />
      )}

      {currentSolution.processsteps && (
        <ProcessSteps processstepsHire={currentSolution.processsteps} />
      )}

      {currentSolution.projects && <ProjectsSection projects={currentSolution.projects} />}
      {currentSolution.testimonal && (
        <TestimonialsSection testimonials={currentSolution.testimonal}>
          <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-5xl">
            <span className="text-customBg">23k+ </span>
            Customers gave their Feedback
            <br />
          </h2>
        </TestimonialsSection>
      )}

      {(currentSolution.faq || currentSolution.comparisonData) && (
        <FaqSection faqs={currentSolution.faq} comparisonData={currentSolution.comparisonData} />
      )}
      {currentSolution.Guarantee && <GuaranteeSection items={currentSolution.Guarantee} />}
      <Bannersection />
    </div>
  );
}
