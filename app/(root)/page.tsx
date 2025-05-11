import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/How_it_works'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import React from 'react'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

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
    <Footer />
    </>
  )
}

export default page