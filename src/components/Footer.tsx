

'use client';
import React from "react";
import "./cssfiles/Footer.css";
import { FaArrowCircleUp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { usePathname } from "next/navigation";


const Footer: React.FC = () => {
  const navigate = usePathname();
  return (
    <>
     <hr />
      <div id="footer" className="w-full xl:px-[5%] px-[1%] bg-[#000000] text-[#FFF] py-9 footer md:text-start text-center ">
        <div className=" flex md:flex-row flex-col items-center justify-between py-9">
          {/* --footer-1st-col-- */}
          <div>
            <h1 className="my-2 font-extrabold text-xl uppercase ">
              {" "}
              News verse
            </h1>

            <div>
              <p className="text-base  font-normal md:leading-[20px] leading-normal md:w-[260px]">
                Here we provide the most crucial news that matters to you .
              </p>
            </div>

          

            <div
              className="flex items-center gap-4 pt-4 md:justify-start justify-center"
              id="socialIcons"
            >
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaThreads />
              </div>
              <div>
                <FaLinkedin />
              </div>
            </div>
          </div>
          {/* --footer-2nd-col-- */}
          <div className="lg:block hidden">
            <h1 className="pb-4 font-semibold text-2xl">News Links by</h1>
            <div>
              <ul className="text-base font-medium space-y-2 Links">
                <li>
                  Bangladesh protidin


              
                </li>
                <li>
                  Prothom alo
                  </li>
                <li>
                  Noya diganta 
                </li>
                <li>
                  24 hour news
                </li>
                <li>
                  kaler kontho
                </li>
              </ul>
            </div>
          </div>

          {/* --foter-3rd-col-- */}
          <div className="lg:block hidden">
            <h1 className="pb-4 font-semibold text-2xl">News Types</h1>

            <ul className="text-base font-medium space-y-2 Links">
              <li>
               International news
              </li>
              <li>
                Daily news
              </li>
              <li>
                Politices news
              </li>
              <li>
                Play news
              </li>
              <li>
                24/7 news
              </li>
            </ul>
          </div>

          {/* --footer-4th-col-- */}
          <div className="md:block hidden">
            <h1 className="pb-4 font-semibold text-2xl">Contact info </h1>

            <div>
              <ul className="text-base font-medium space-y-2">
                <li>Mirpur Dhaka 1216 </li>
                <li>call : 0139990003</li>
                <li>Mail : Newsverse2024@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-3 flex flexl-row justify-between items-center relative">
          <p className="text-base font-normal">
            Copyright &copy; News verse All rights reserved.
          </p>

          <div>
              <Link to="Hero" smooth={true} duration={500} className="text-2xl animation-button text-white">
                <FaArrowCircleUp/>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
