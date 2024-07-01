'use client';
import React from "react";
import { GlobeDemo } from "./GlobeDemo";

import { Link } from "react-scroll";
import { FaArrowCircleDown } from "react-icons/fa";



const HeroSection: React.FC = () => {


  
  return (

    <>
     
      <section id="Hero" className="min-h-[95vh] relative pt-10 md:pt-0 bg-black px-[2%] flex md:flex-row flex-col  gap-5 md:justify-between  items-center ">
        <div className={`md:w-[50%] lg:text-6xl md:text-4xl text-2xl text-center md:text-left font-semibold text-wrap w-full`}>

          Explore the latest updates in the <span className='text-yellow-300'>news </span> with insightful commentary in our <span className="text-yellow-300">verse</span>

        </div>
        <div className="lg:flex-1 md:w-[50%] w-full">
          <GlobeDemo />
        </div>


        <Link to="About" smooth={true} duration={500} className="absolute animation-button text-white text-2xl top-[88%]  left-[50%]">
          <FaArrowCircleDown />
        </Link>
      </section>



    </>
  );
};

export default HeroSection;
