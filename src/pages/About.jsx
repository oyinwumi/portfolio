import React from 'react'
import Oyin from '../assest/oyin.jpeg'

const About = () => {
  return (
    <div className='bg-[#000] text-white  xl:px-32 lg:px-28 md:px-28 px-10  py-20'>
        <h2 className='w-72 text-center mx-auto text-5xl  pb-2'>About Me</h2>
        <div className='flex  lg:flex-row md:flex-col flex-col mt-14 w-full'>
           <div className=' w-full my-auto '>
           <img src={Oyin} alt={Oyin} className=' justify-center items-center h-auto border border-gray w-full rounded-full ' />
           </div>
            <div className='lg:ml-10 md:ml-0 ml-0 mt-10 text-white lg:w-full md:w-full w-full text-start '>
                <header className='text-2xl font-bold mb-2'>I am Oyin<span className='text-[aqua]'>damola </span></header>
                <p className='uppercase mb-8 text-lg'>A passionate softWare developer</p>
                <p className=' lg: text-lg text-[16px] mb-2'> I am a graduate of Microbiology. I developed interest in software development during my National Youth service Corps through a friend i met then than was a  computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.</p>
                <p className=' lg: text-lg text-[16px] mb-2'>I was intruged when i saw an opportunity to learn softskill for free at SideHustle i enrolled for basic ui/ux course where i learnt the principle of design and the use of Figma. Ater two month of learning ui/ux basic i have the zeal to make the little design i did then to be useable and this made me enrolled for Frontend development at Stutern where i was thought frontend development skills.</p>
                <p className=' lg: text-lg text-[16px] mb-2'> I am a creative and Enthasiastic Frontend Developer providing high-impact web solution for diverse organisation. I am proactive and always open to learning new things. I have a good team spirit and collaborate well with colleagues. I am skilled in HTML, CSS , REACT JS and REDUX. </p>
                <button className='bg-[aqua] hover:bg-white border w-[150px] h-[46px] p-2 text-center mt-6 text-black hover:text-[aqua] rounded-full border-[aqua] font-extrabold'> <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt" target='blank'>Download cv</a></button>
            </div>
        </div>
    </div>
  )
}

export default About