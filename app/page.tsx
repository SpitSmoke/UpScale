import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import ResultsCharts from '@/components/ResultsCharts'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Pricing />
        <ResultsCharts />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
