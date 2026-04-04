import { solutionData } from "@/utils/solutiondynamic/solutionData";
import HeroSection from "@/components/servicescomponent/Herosection";
import DevelopmentServices from "@/components/servicescomponent/Developmentservices";
import PartnersSection from "@/components/servicescomponent/Partnersection";
import ProjectsSection from "@/components/servicescomponent/Projectsection";
import { Servicetoolkit } from "@/components/servicescomponent/Servicetoolkit";
import { ProcessSection } from "@/components/Process";
import FaqSection from "@/components/FaqSection";
import { TestimonialsSection } from "@/components/Testimonial/testimonials-section";

export async function generateMetadata({ params }) {
  const solution = solutionData[params.solution] || solutionData.default;
  return {
    title: solution.heroTitle || "PlazmaSoft Services",
    description:
      solution.description ||
      "PlazmaSoft offers comprehensive IT services and solutions.",
  };
}

export default function SolutionPage({ params }) {
  const solutionSlug = params.solution;

  const currentSolution = solutionData[solutionSlug] || solutionData.default;

  return (
    <div className="w-full mx-auto">
      <HeroSection
        title={currentSolution.heroTitle}
        description={currentSolution.description}
        text={solutionSlug}
      />
      <PartnersSection />

      <Servicetoolkit developmenttool={currentSolution.developmenttool} />

      <ProcessSection />

      <DevelopmentServices services={currentSolution.services} />

      <ProjectsSection projects={currentSolution.projects} />
      <TestimonialsSection testimonials={currentSolution.testimonal}>
        <h2 className="font-serif font-bold text-3xl lg:text-5xl text-gray-900">
          Customer said
          <br />
          about <span className="italic text-customBg">Krishly</span>
        </h2>
      </TestimonialsSection>
      <FaqSection faqs={currentSolution.faq} />
    </div>
  );
}