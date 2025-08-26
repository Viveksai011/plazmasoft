import FaqSection from '@/components/FaqSection'
import { ProcessSection } from '@/components/Process'
import DevelopmentServices from '@/components/servicescomponent/Developmentservices'
import HeroSection from '@/components/servicescomponent/Herosection'
import PartnersSection from '@/components/servicescomponent/Partnersection'
import ProjectsSection from '@/components/servicescomponent/Projectsection'
import { Servicetoolkit } from '@/components/servicescomponent/Servicetoolkit'
import TestimonialCarousel from '@/components/servicescomponent/TestimonialCarousel'

import React from 'react'

const page = () => {
  return (
    <div className='w-full mx-auto'>
      <HeroSection/>
      <PartnersSection/>
      <Servicetoolkit />
      <ProcessSection />
      <DevelopmentServices/>
      <ProjectsSection/>
      <TestimonialCarousel/>
      <FaqSection />
    </div>
  )
}

export default page
