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
                <h2 className='lg:text-[32px] md:text-[28px] text-[24px] font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8 fill-blu'>About</h2>
                <p className='lg:text-lg md:text-[16px] text-[16px] border-t border-blu lg:w-[499px] md:w-auto w-auto pt-2 lg:order-2 md:order-1 order-1'>Intuitive, Innovative, Team Player</p>
              </div>
              <p className='lg:text-lg md:text-[16px] text-[16px]  font-font leading-8  justify-center text-justify lg:mt-10 md:mt-6 mt-6'>I hold a Higher National Diploma (HND) as well as a Bachelor of Science in Microbiology. During my mandatory one-year National Youth Service Corps, I developed a strong interest in software development after being introduced to the field by a friend with a computer science degree. Although I received an A in the basic Computer Programming language course (FORTRAN) I took during my undergraduate studies, I did not initially consider pursuing a career in technology. However, my interest was sparked when I had the opportunity to take a free course in UI/UX design, where I learned design principles and gained experience using Figma. After completing this course, I decided to pursue a career in Tech by enrolling in a Frontend Development program at Stutern, where I honed my skills in HTML, CSS, REACT JS, and REDUX and have since pursued a career in technology.</p>
                <button className= ' font-font bg-blue hover:bg-black border lg:w-[156px] md:[156px]  w-[145px] h-[46px] p-2 text-center mt-8 mb-20 text-offwhite  rounded-full border-blu font-extrabold'> <a href="https://docs.google.com/document/d/1FXbNHnOJHeMbi84DnXZEJe_5J9fbN7dxg_VKaQZrNB0/edit?usp=sharing" target='blank'>Download cv</a></button>
            </div>
        </div>
    </div>
  )
}

export default About