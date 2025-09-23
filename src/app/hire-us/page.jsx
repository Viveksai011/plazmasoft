import ExpandingCardsDemo from '@/components/hire-us/expanding-cards-demo'
import DifferenceSection from '@/components/hire-us/Differencesection'
// import Herosection from '@/components/hire-us/Herosection'
import Techsection from '@/components/hire-us/Techsection'
import React from 'react'
import ProcessSteps from '@/components/hire-us/ProcessStep'
import ComparisonTable from '@/components/hire-us/Comparisontable'
import PricingProcrastination from '@/components/hire-us/Pricingprocasting'
import { TestimonialsSection } from '@/components/Testimonial/testimonials-section'
import Guaranteesection from '@/components/hire-us/Guaranteesection'
import Actionablesection from '@/components/hire-us/Actionablesection'
import Herosection from '@/components/Parallaxscroll/Heroparallax'

const page = () => {
  return (
    <>
    {/* <Herosection/> */}
    <Herosection/>
    <Techsection/>
     <ExpandingCardsDemo />
     <DifferenceSection/>
     <ProcessSteps/>
     <ComparisonTable/>
      <Guaranteesection/>
      <Actionablesection/>
      <TestimonialsSection>
        <h2 className="font-serif font-bold text-3xl lg:text-5xl text-gray-900">
          Social Proof & Testimonials
        </h2>
      </TestimonialsSection>
     <PricingProcrastination/>
    </>
  )
}

export default page
