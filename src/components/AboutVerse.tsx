'use client';

import React from 'react';
import Card from './share/Card';
import { Link } from 'react-scroll';
import { FaArrowCircleDown } from 'react-icons/fa';




const AboutVerse: React.FC = () => {
  return (
    <div id='About' className='min-h-screen  bg-black relative '>
      <h1 className='lg:text-4xl md:text-3xl text-xl font-bold text-center py-20 uppercase'>About news verse</h1>


      <div className='flex flex-row flex-wrap gap-9 items-center justify-center'>
        <Card title='Comprehensive Coverage' description='News from all continents, curated to keep you informed.' />
        <Card title='Reliable Sources' description='Information you can trust, sourced from credible outlets' />
        <Card title='Instant Updates' description='Stay up-to-date with real-time news updates and alerts' />

      </div>


      <Link to="page1" smooth={true} duration={500} className="absolute animation-button text-white text-2xl top-[88%] left-[50%]">
          <FaArrowCircleDown/>
        </Link>
    </div>
  )
}

export default AboutVerse