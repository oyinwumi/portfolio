import React from 'react'
import { RiHtml5Fill , RiCss3Fill , RiReactjsFill, RiGithubFill} from "react-icons/ri";
import { FaBootstrap, FaNpm } from "react-icons/fa";
import { SiTailwindcss , SiFigma , SiNetlify } from "react-icons/si";
import { TbBrandVscode, TbBrandRedux } from "react-icons/tb";
import { DiJavascript1} from "react-icons/di";

const Skill = () => {
  return (
    <div className=' bg-[#110303] py-20 px-32'>
    <h2 className='text-center text-5xl text-white pb-16'>My Skills</h2>
    <div className='text-[aqua] lg:text-6xl md:text-5xl text-4xl flex w-full  gap-4 flex-wrap text-center justify-center'>
       <RiHtml5Fill className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <RiCss3Fill  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <RiReactjsFill  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <RiGithubFill  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <FaBootstrap  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <SiTailwindcss  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <SiFigma  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <TbBrandVscode  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <DiJavascript1  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
       <FaNpm  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
       <TbBrandRedux  className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
       <SiNetlify className='w-[20%]  mb-8  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
    </div>
  </div>
  )
}

export default Skill