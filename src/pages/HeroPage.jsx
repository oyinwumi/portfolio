import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Ok from '../assest/ok.png'
// import { RiFacebookFill , RiTwitterFill, RiGithubFill, RiLinkedinFill , RiInstagramFill} from "react-icons/ri";

const HeroPage = () => {
  return (
    <div className=' w-full bg-blu flex lg:flex-row md:flex-col flex-col lg:px-[124px] md:px-28 px-10 pb-20 border-t-0'>
       <div className=' font-open lg:order-1 md:order-2 order-2 lg:text-start md:text-center text-justify'>
        <h1 className='lg:text-[48px] md:text-[30px] text-[22px] font-open leading-6 text-offwhite fill-offwhite items-center lg:text-start md:text-center text-center mt-[50px]'>I am Oyindamola Dorcas, </h1>
      <div className=''>
        <p className=' flex text-offwhite lg:text-[48px] md:text-[30px] text-[22px] text-center  lg:justify-start md:justify-center justify-center'>a <span className='text-redorange ml-2 fill-redorange'>    <Typewriter  options={{ autoStart: true, loop: true,delay: 75,strings:[' Front end Developer']}}/></span>
        </p>
      </div> 
      <p className='lg:text-xl md:text-lg text-lg text-offwhite lg:w-[632px] md:w-full w-full mt-2 font-font'>Building scalable product for various business is my area of speciality. My core values are unwavering integrity, empathy, team spirit and collaboration, good communication, dedication and imbibing knowledge to others.</p>
  
      <div className='flex gap-4 font-font pt-10 lg:text-[16px] text-sm lg:justify-start md:justify-center justify-center'>
      
        <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt"  target='blank' ><button className=' bg-redorange hover:bg-blu   text-white border lg:w-[156px] md:[156px]  w-[150px] h-[46px] p-2 text-center rounded-full border-redorange hover:border-white font-extrabold'>Download cv</button></a>
        <Link to='/portfolio' className=''><button className='bg-blu hover:bg-redorange text-white border lg:w-[156px] md:[156px] w-[150px] h-[46px] lg:p-2 p-1 text-center rounded-full border-off-white font-extrabold '>Veiw my work</button></Link>
      </div>
       </div>
        <div className='2xl:ml-96 xl:ml-0 lg:ml-0 md:ml-0 ml-0 w-full lg:order-2 md:order-1 order-1'>
          <img src={Ok} alt={Ok} className='w-auto'/>
        </div>
    </div>
  )
}

export default HeroPage