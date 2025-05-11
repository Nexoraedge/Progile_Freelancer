import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/How_it_works'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import React from 'react'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HowItWorks />
    <Features />
    <Benefits />
    <Pricing />
    <Testimonials />
    </>
  )
}

export default page