import React from 'react'
import Oyin from '../assest/Image.png'

const About = () => {
  return (
    <div className='bg-[#F5F5F5] text-whity  lg:px-[124px] md:px-28 px-8  py-20'>
    
        <div className='flex items-center lg:flex-row md:flex-col flex-col w-full'>
    <div className='justify-center xl:mb-0 lg:mb-0 md:mb- 10 mb-14 '>
      <img src={Oyin} alt={Oyin} className=' mx-auto items-center w-auto  ' />
    </div>        
    <div className=' items-center  lg:ml-10  md:ml-0 ml-0  text-[#667085] xl:w-1/2 lg:w-1/2 md:w-full w-full  '>
    <div className=' text-blu flex lg:flex-row md:flex-col items-center flex-col lg:gap-5 md:gap-0 gap-0 w-full'>
                <h2 className='lg:text-[48px] md:text-[30px] text-[22px] font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8 fill-blu'>About</h2>
                <p className='lg:text-lg md:text-[16px] text-[16px] border-t border-blu lg:w-[499px] md:w-auto w-auto pt-2 lg:order-2 md:order-1 order-1'>Intuitive, Innovative, Team Player</p>
              </div>
              <p className='lg:text-lg md:text-[16px] text-[16px]  font-font leading-8  justify-center text-justify lg:mt-10 md:mt-6 mt-6'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.
              I was intrigued when i saw an opportunity to learn softskill for free at SideHustle, I enrolled for basic ui/ux course where i learnt the principle of design and the use of Figma. After two month of learning ui/ux basic i have the zeal to make the little design i did then to be useable and this made me enrolled for Frontend development at Stutern.
               I am skilled in HTML, CSS , REACT JS and REDUX.</p>
                <button className= ' font-font bg-blue hover:bg-black border  w-[156px] h-[46px] p-2 text-center mt-8 mb-20 text-offwhite  rounded-full border-blu font-extrabold'> <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt" target='blank'>Download cv</a></button>
            </div>
        </div>
    </div>
  )
}

export default About