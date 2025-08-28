import { servicesData } from "@/utils/dynamic/servicesData";
import HeroSection from "@/components/servicescomponent/Herosection";
import DevelopmentServices from "@/components/servicescomponent/Developmentservices";
import PartnersSection from "@/components/servicescomponent/Partnersection";
import ProjectsSection from "@/components/servicescomponent/Projectsection";
import { Servicetoolkit } from "@/components/servicescomponent/Servicetoolkit";
import TestimonialCarousel from "@/components/servicescomponent/TestimonialCarousel";
import { ProcessSection } from "@/components/Process";
import FaqSection from "@/components/FaqSection";

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
  const currentService = servicesData[serviceSlug] || servicesData.default;

  return (
    <div className="w-full mx-auto">
      <HeroSection
        title={currentService.heroTitle}
        description={currentService.description}
      />
      <PartnersSection />

      <Servicetoolkit developmenttool={currentService.developmenttool} />

      <ProcessSection />

      <DevelopmentServices services={currentService.services} />

      <ProjectsSection projects={currentService.projects} />
      <TestimonialCarousel />
      <FaqSection faqs={currentService.faq} />
    </div>
  );
}
