import React from 'react'
import Typewriter from 'typewriter-effect';
import { RiFacebookFill , RiTwitterFill, RiGithubFill, RiLinkedinFill , RiInstagramFill} from "react-icons/ri";

const HeroPage = () => {
  return (
    <div className=' w-full h-[80vh] object-cover bg-gradient-to-t  from-red to-[aqua] hero '>
       <div className='text-white pt-52 text-center hero-text m-auto'>
        <h1 className='lg:text-xl md:text-lg  mt-10 font pb-8 uppercase'>WelCome to my website</h1>
      <div className='flex lg:flex-row md:flex-col flex-col items-center text-center justify-center'>
      <h2 className='xl:text-5xl lg:text-4xl md:text-4xl text-3xl '>Hi, I'm Oyindamola Dorcas </h2>
       <span className=' xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:text-[aqua] md:text-red text-red lg:ml-3 md:ml-0 ml-0 lg:mt-0 md:mt-2 mt-2'>
        <Typewriter  options={{
            autoStart: true,
            loop: true,
            delay: 75,
            strings:[' I am a Frontend React Developer ']
        }}/>
       </span>
      </div> 
      <div className='text-[aqua] flex  justify-center text-center gap-6 text-xl py-8'>
        <a href="https://web.facebook.com/oyindamolaoluwumi"  target='blank' className='w-8 h-8 border rounded-full bg-[#000] hover:bg-[aqua] hover:text-black p-1 border-[aqua] flex items-center justify-center' ><RiFacebookFill /></a>
        <a href="https://www.instagram.com/oyinwumi_0229/"  target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center'><RiTwitterFill/></a>
        <a href="https://twitter.com/Oyinwumi0229"  target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center'><RiInstagramFill/></a>
        <a href="https://github.com/oyinwumi" target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center' ><RiGithubFill/></a>
        <a href="https://www.linkedin.com/in/oyindamola-ogunkunle" target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center'><RiLinkedinFill/></a>
      </div>
      <div className='flex gap-4 justify-center pb-10'>
        <button className='bg-red hover:bg-white  hover:text-red border w-[150px] h-[46px] p-2 text-center rounded-full border-red font-extrabold '> <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt">Download cv</a></button>
        <button className='bg-red hover:bg-white  hover:text-red border w-[150px] h-[46px] p-2 text-center rounded-full border-red font-extrabold'>Hire me</button>
      </div>
       </div>

    </div>
  )
}

export default HeroPage