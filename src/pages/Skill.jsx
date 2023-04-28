import React from 'react'
import { RiHtml5Fill , RiCss3Fill , RiReactjsFill, RiGithubFill} from "react-icons/ri";
import { FaBootstrap, FaNpm } from "react-icons/fa";
import { SiTailwindcss , SiFigma , SiNetlify } from "react-icons/si";
import { TbBrandVscode, TbBrandRedux } from "react-icons/tb";
import { DiJavascript1} from "react-icons/di";
import { motion } from "framer-motion"

const Skill = () => {
  return (
    <div className=' bg-skyeblue py-20 lg:px-[124px] md:px-28 px-10  items-center w-full mx-auto'>
    <div className='lg:text-[48px] md:text-[30px] text-[22px] text-blu flex lg:flex-row md:flex-col flex-col items-center justify-center lg:gap-5 md:gap-0 gap-0 w-full'>
       <h2 className='lg:text-[48px] md:text-[30px] text-[22px]font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8 fill-blu'>My Skills</h2>
         <p className='lg:text-lg md:text-[16px] text-[16px]  border-t border-blu  pt-2 font-font lg:order-2 md:order-1 order-1'>Proficient in various technical tools</p>
          </div>
    <motion.div animate={{x: [0,100,0] }}  transition={{ duration:3, repeat:Infinity , repeatType:'reverse', ease: 'linear' }}  className='text-blu font-font lg:text-[60px] md:text-3xl text-3xl justify-center   text-center grid grid-cols-6 lg:gap-4 md:gap-4 gap-4 lg:w-[80%] mdw-full w-full mx-auto items-center mt-10 '>
       < > <RiHtml5Fill className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4 hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
     < >  <RiCss3Fill  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
      <> <RiReactjsFill  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
     < >  <RiGithubFill  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
    <>   <FaBootstrap  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
     <motion.div >  <SiTailwindcss  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></motion.div>
     <>  <SiFigma  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
    <> <TbBrandVscode  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
      <><DiJavascript1  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
   <><FaNpm  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' /></>
     <> <TbBrandRedux  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' /></>
      <> <SiNetlify className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' /></>
    </motion.div>
  </div>
  )
}

export default Skill