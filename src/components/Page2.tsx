'use client';

import { FaArrowCircleDown, FaHandPointDown, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Page2: React.FC = () => (
  <div id="page2" className='bg-black min-h-screen text-center flex flex-col items-center justify-center gap-3'>

      <h1 className=' text-center flex flex-row items-center gap-1'>Solution is here <FaHandPointDown /></h1>
      <p className='lg:text-3xl md:text-2xl text-xl'>News Verse is a solution for every reliable news source</p>
     
    <Link to="page3" smooth={true} duration={500} className=" hover:cursor-pointer bg-purple-600 bg-gradient-to-bl flex flex-row gap-1 justify-center items-center  p-1 rounded-sm">
      But how <FaQuestionCircle />
    </Link>
  </div>
);

export default Page2;
