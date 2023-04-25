import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Ok from '../assest/ok.png'
// import { RiFacebookFill , RiTwitterFill, RiGithubFill, RiLinkedinFill , RiInstagramFill} from "react-icons/ri";

const HeroPage = () => {
  return (
    <div className=' w-full bg-blu flex lg:flex-row md:flex-col flex-col lg:px-[124px] md:px-28 px-10 pb-20'>
       <div className='font-open lg:order-1 md:order-2 order-2 lg:text-start md:text-center text-center'>
        <h1 className='lg:text-[48px] md:text-[30px] text-[22px] font-open leading-6 text-offwhite items-center lg:text-start md:text-center text-center mt-[50px]'>I am Oyindamola Dorcas, </h1>
      <div className=''>
        <p className=' flex text-offwhite lg:text-[48px] md:text-[30px] text-[22px] text-center  lg:justify-start md:justify-center justify-center'>a <span className='text-redorange ml-2'>    <Typewriter  options={{ autoStart: true, loop: true,delay: 75,strings:[' Front end Developer']}}/></span>
        </p>
      </div> 
      <p className='lg:text-xl md:text-lg text-lg text-offwhite lg:w-[632px] md:w-full w-full mt-2 font-font'>Building scalable product for various business is my area of speciality. My core values are unwavering integrity, empathy, team spirit and collaboration, good communication, dedication and imbibing knowledge to others.</p>
      {/* <div className='text-[aqua] flex  justify-center text-center gap-6 text-xl py-8'>
        <a href="https://web.facebook.com/oyindamolaoluwumi"  target='blank' className='w-8 h-8 border rounded-full bg-[#000] hover:bg-[aqua] hover:text-black p-1 border-[aqua] flex items-center justify-center' ><RiFacebookFill /></a>
        <a href="https://www.instagram.com/oyinwumi_0229/"  target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center'><RiTwitterFill/></a>
        <a href="https://twitter.com/Oyinwumi0229"  target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center'><RiInstagramFill/></a>
        <a href="https://github.com/oyinwumi" target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center' ><RiGithubFill/></a>
        <a href="https://www.linkedin.com/in/oyindamola-ogunkunle" target='blank' className='w-8 h-8 border rounded-full bg-[#000] p-1 border-[aqua] hover:bg-[aqua] hover:text-black flex items-center justify-center'><RiLinkedinFill/></a>
      </div> */}
      <div className='flex gap-4 font-font pt-10'>
        <button className=' bg-redorange hover:bg-blu   text-white border w-[154px] h-[46px] p-2 text-center rounded-full border-redorange hover:border-white font-extrabold shadow-lg shadow-[black]'> <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt">Download cv</a></button>
        <Link to='/portfolio'><button className='bg-blu hover:bg-redorange text-white border w-[156px] h-[46px] p-2 text-center rounded-full border-off-white font-extrabold shadow-lg shadow-[black]'>Veiw my work</button></Link>
      </div>
       </div>
        <div className='lg:ml-96 md:ml-0 ml-0 w-full lg:order-2 md:order-1 order-1'>
          <img src={Ok} alt={Ok} />
        </div>
    </div>
  )
}

export default HeroPage