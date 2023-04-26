import React from 'react'
import { RiHtml5Fill , RiCss3Fill , RiReactjsFill, RiGithubFill} from "react-icons/ri";
import { FaBootstrap, FaNpm } from "react-icons/fa";
import { SiTailwindcss , SiFigma , SiNetlify } from "react-icons/si";
import { TbBrandVscode, TbBrandRedux } from "react-icons/tb";
import { DiJavascript1} from "react-icons/di";

const Skill = () => {
  return (
    <div className=' bg-skyeblue py-20 lg:px-[124px] md:px-28 px-10  items-center w-full mx-auto'>
    <div className='lg:text-[48px] md:text-[30px] text-[22px] text-blu flex lg:flex-row md:flex-col flex-col items-center justify-center lg:gap-5 md:gap-0 gap-0 w-full'>
       <h2 className='lg:text-[48px] md:text-[30px] text-[22px]font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8'>My Skills</h2>
         <p className='lg:text-lg md:text-[16px] text-[16px]  border-t border-blu  pt-2 font-font lg:order-2 md:order-1 order-1'>Proficient in various technical tools</p>
          </div>
    <div className='text-blu  font-font lg:text-[70px] md:text-3xl text-3xl lg:mx-[5%]  text-center grid grid-cols-6 gap-8  w-full mt-10 '>
       <RiHtml5Fill className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <RiCss3Fill  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <RiReactjsFill  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <RiGithubFill  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <FaBootstrap  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <SiTailwindcss  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <SiFigma  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <TbBrandVscode  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <DiJavascript1  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <FaNpm  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
       <TbBrandRedux  className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
       <SiNetlify className='  mb-8  hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
    </div>
  </div>
  )
}

export default Skill