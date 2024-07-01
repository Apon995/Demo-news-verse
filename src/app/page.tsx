import AboutVerse from '@/components/AboutVerse'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'


import React from 'react'

const page: React.FC = () => {
  return (
    <div className=''>
      <HeroSection />
      <AboutVerse/>
       <Page1/>
       <Page2/>
       <Page3/>
       <Footer/>
   
      
      
    
      
  
    </div>
  )
}

export default page