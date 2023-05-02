import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { RiHtml5Fill , RiCss3Fill , RiReactjsFill, RiGithubFill} from "react-icons/ri";
import { FaBootstrap, FaNpm } from "react-icons/fa";
import { SiTailwindcss , SiFigma , SiNetlify } from "react-icons/si";
import { TbBrandVscode, TbBrandRedux } from "react-icons/tb";
import { DiJavascript1} from "react-icons/di";
import {  motion } from "framer-motion"

const Skill = () => {
  const isDesktop = useMediaQuery({
    minWidth:600
  })
  const variants = isDesktop 
  ?{
    initial:{
      x: 0,
    },
    animate:{
     x: -1500 
    },
    exit:{
      x: 1500
    },
    transition:{
      duration:10,
      ease: 'linear',
       repeat: 'infinity' ,
        repeatType:'mirror'
    }
  }
  
  :{
    initial:{
      x: 0,
    },
    animate:{
      x: -100
    },
    exit:{
      x: 100
    },
    transition:{
      duration:2,
      ease: 'linear',
       repeat: 'infinity' ,
        repeatType:'mirror'
    }
  }
  return (
    <div className=' bg-skyeblue py-20   w-full '>
    <div className='lg:text-[32px] md:text-[28px] text-[24px] text-blu flex lg:flex-row md:flex-col flex-col items-center justify-center lg:gap-5 md:gap-0 gap-0 w-full mx-auto '>
       <h2 className='lg:text-[32px] md:text-[28px] text-[24px]font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8 fill-blu font-open'>My Skills</h2>
         <p className='lg:text-lg md:text-[16px] text-[16px]  border-t border-blu  pt-2 font-font lg:order-2 md:order-1 order-1'>Proficient in various technical tools</p>
          </div>
    <motion.div variants={variants} initial={variants.initial} animate={variants.animate} exit={variants.exit}  transition={variants.transition} className='text-blu font-font text-[60px] flex justify-center lg:gap-12 md:gap-10 gap-8 w-full   mt-10 '>
       < > <RiHtml5Fill className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4 hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
     < >  <RiCss3Fill  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
      <> <RiReactjsFill  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
     < >  <RiGithubFill  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
    <>   <FaBootstrap  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
     <>  <SiTailwindcss  className=' xl:mb-8 lg:mb-8  md:mb-6 mb-4  hover:text-blu  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/></>
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