import { servicesData } from "@/utils/dynamic/servicesData";
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
  const service = servicesData[params.service] || servicesData.default;
  return {
    title: service.heroTitle || "PlazmaSoft Services",
    description:
      service.description ||
      "PlazmaSoft offers comprehensive IT services and solutions.",
  };
}

export default function ServicePage({ params }) {
  const serviceSlug = params.service;
  console.log("Service Slug:", serviceSlug); // Debugging line
  const currentService = servicesData[serviceSlug] || servicesData.default;

  return (
    <div className="w-full mx-auto">
      <HeroSection HeroSection={currentService.heroSection || {
        heroTitle: currentService.heroTitle,
        subtitle: "",
        description: currentService.description,
        cta: "Contact Us",
        image: ""
      }} />
      <PartnersSection />
      {currentService.Stoplosing && <Stoplosingcustomer Stoplosing={currentService.Stoplosing} />}
      {currentService.BenefitsSectiontext && <BenefitsSection groups={currentService.BenefitsSectiontext} />}
      {currentService.Ourservices && <Ourservices differenceData={currentService.Ourservices} />}
      {currentService.developmenttool && <Servicetoolkit developmenttool={currentService.developmenttool} />}

      {currentService.processsteps && <ProcessSteps processstepsHire={currentService.processsteps} />}

      {currentService.projects && <ProjectsSection projects={currentService.projects} />}
      {currentService.testimonal && (
        <TestimonialsSection testimonials={currentService.testimonal}>
          <h2 className="font-serif font-bold text-3xl lg:text-5xl text-gray-900">
            <span className=" text-customBg">23k+ </span>
            Customers gave their Feedback
            <br />
          </h2>
        </TestimonialsSection>
      )}
      
      {(currentService.faq || currentService.comparisonData) && (
        <FaqSection
          faqs={currentService.faq}
          comparisonData={currentService.comparisonData}
        />
      )}
      {currentService.Guarantee && <GuaranteeSection items={currentService.Guarantee} />}
      <Bannersection />
    </div>
  );
}
