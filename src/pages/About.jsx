import React from 'react'
import Oyin from '../assest/Image.png'

const About = () => {
  return (
    <div className='bg-[#F5F5F5] text-white  lg:px-[124px] md:px-28 px-8  py-20'>
      <div className='text-[32px] text-blu flex lg:flex-row md:flex-col flex-col items-center xl:mx-[40%C] lg:mx-[25%]  lg:gap-5 md:gap-0 gap-0 w-full'>
                <h2 className='text-[32px] font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8'>About</h2>
                <p className='text-lg border-t border-blu lg:w-[499px] md:w-auto w-auto pt-2 lg:order-2 md:order-1 order-1'>Intuitive, Innovative, Team Player</p>
              </div>
        <div className='flex  lg:flex-row md:flex-col flex-col w-full'>
    <div className='justify-center'>
      <img src={Oyin} alt={Oyin} className=' object-cover items-center xl:w-auto lg:w-full xl:mt-0 lg:mt-20 md:mt-0 mt-0  ' />
    </div>        
    <div className=' items-center  lg:ml-10  md:ml-0 ml-0 mt-10 text-[#667085] xl:w-2/3 lg:w-1/2 md:w-full w-full  '>
              <p className='lg:text-xl md:text-lg text-[16px]  font-font leading-8'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.
                      I was intrigued when i saw an opportunity to learn softskill for free at SideHustle, I enrolled for basic ui/ux course where i learnt the principle of design and the use of Figma. After two month of learning ui/ux basic i have the zeal to make the little design i did then to be useable and this made me enrolled for Frontend development at Stutern where i was thought frontend development skills.
                      I am a creative and Enthasiastic Frontend Developer providing high-impact web solution for diverse organisation. I am proactive and always open to learning new things. I have a good team spirit and collaborate well with colleagues. I am skilled in HTML, CSS , REACT JS and REDUX.</p>
                <button className= ' font-font bg-blue hover:bg-black border shadow-lg shadow-[black] w-[156px] h-[46px] p-2 text-center mt-8 mb-20 text-offwhite  rounded-full border-blu font-extrabold'> <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt" target='blank'>Download cv</a></button>
            </div>
        </div>
    </div>
  )
}

export default About