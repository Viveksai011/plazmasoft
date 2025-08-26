import FaqSection from '@/components/FaqSection'
import DevelopmentServices from '@/components/servicescomponent/Developmentservices'
import HeroSection from '@/components/servicescomponent/Herosection'
import PartnersSection from '@/components/servicescomponent/Partnersection'
import ProjectsSection from '@/components/servicescomponent/Projectsection'
import { Servicesprocess } from '@/components/servicescomponent/Servicesprocess'
import { Servicetoolkit } from '@/components/servicescomponent/Servicetoolkit'
import TestimonialCarousel from '@/components/servicescomponent/TestimonialCarousel'

import React from 'react'

const page = () => {
  return (
    <div className='w-full mx-auto'>
      <HeroSection/>
      <PartnersSection/>
      <Servicetoolkit />
      <Servicesprocess/>
      <DevelopmentServices/>
      <ProjectsSection/>
      <TestimonialCarousel/>
      <FaqSection />
    </div>
  )
}

export default page
