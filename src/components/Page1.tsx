'use client';

import { FaArrowCircleDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Page1: React.FC = () => (
  <div id="page1" className='min-h-screen bg-black text-center flex flex-col lg:gap-2 md:gap-3 gap-4 items-center justify-center'>
    <div >
      <p className='lg:text-3xl md:text-2xl text-xl'>Finding reliable news these days is as difficult as finding water in the desert .</p>
    </div>
    <Link to="page2" smooth={true} duration={500} className=" bg-gradient-to-bl bg-slate-800 py-2 px-1 rounded-sm hover:cursor-pointer text-white md:text-base text-sm flex flex-row items-center gap-2 top-[55%] left-[50%]">
      Click & get solution <FaArrowCircleDown />
    </Link>
  </div>
);

export default Page1;
