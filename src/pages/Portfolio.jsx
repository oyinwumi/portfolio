import React from 'react';
import { Link } from 'react-router-dom';
import MashUp from '../assest/mashup1.png'
import Logo from '../assest/portfolio-logo.svg'


const Portfolio = () => {
  return (
    <div className='bg-offwhite pt-20 lg:px-[124px] md:px-28 px-8'>
      <div className='text-center lg:w-[809px] justify-center mx-auto font-normal'>
      <h2 className='lg:text-[48px] md:text-[35px] text-[30px] text-[#0F0A00] fill-[#0F0A00] font-medium leading-[60px] font-open'>I design and build usable  <br /> interface</h2>
       <p className='text-[#667085] lg:text-xl md
       text:lg text-[16px] font-font'>Building scalable product for various business is my area of speciality. My core values are unwavering integrity, empathy, team spirit and collaboration, good communication, <br /> dedication and imbibing knowledge to others.</p>
       <div className='flex gap-4 font-font pt-10 lg:text-[16px] text-sm  justify-center'>
      
      <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt"  target='blank' ><button className=' bg-redorange hover:bg-blu   text-white border lg:w-[156px] md:[156px]  w-[150px] h-[46px] p-2 text-center rounded-full border-redorange hover:border-white font-extrabold'>Download cv</button></a>
      <Link to='/portfolio' className=''><button className='bg-offwhite hover:bg-redorange text-blu border lg:w-[156px] md:[156px] w-[150px] h-[46px] lg:p-2 p-1 text-center rounded-full border-blu font-extrabold '>Veiw my work</button></Link>
    </div>
      </div>

       <div className='flex lg:flex-row md:flex-col flex-col py-20'>
        <div className='w-1/2 h-[271px]'> 
          <img src={MashUp} alt={MashUp} className='w-full object-cover ' />
          </div>
         <div className='lg:w-1/3 ml-14'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Portfolio Website</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
       text:lg text-[16px] font-font leading-[32px]'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   lg:my-8 md:my-8 my-8'><a href='https://portfolio-blue-seven-98.vercel.app/' target='blank'>View Project</a></button>
          </div>
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col py-20'>
         <div className='lg:w-1/3 ml-14'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Simple Calculator</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
       text:lg text-[16px] font-font leading-[32px]'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   lg:my-8 md:my-8 my-8'><a href='https://portfolio-blue-seven-98.vercel.app/' target='blank'>View Project</a></button>
          </div>
        <div className='w-1/2 h-[271px]'> 
          <img src={MashUp} alt={MashUp} className='w-full object-cover ' />
          </div>
        
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col py-20'>
        <div className='w-1/2 h-[271px]'> 
          <img src={MashUp} alt={MashUp} className='w-full object-cover ' />
          </div>
         <div className='lg:w-1/3 ml-14'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Fetch User</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
       text:lg text-[16px] font-font leading-[32px]'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   lg:my-8 md:my-8 my-8'><a href='https://portfolio-blue-seven-98.vercel.app/' target='blank'>View Project</a></button>
          </div>
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col py-20'>
         <div className='lg:w-1/3 ml-14'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Prime table</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
       text:lg text-[16px] font-font leading-[32px]'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   lg:my-8 md:my-8 my-8'><a href='https://portfolio-blue-seven-98.vercel.app/' target='blank'>View Project</a></button>
          </div>
        <div className='w-1/2 h-[271px]'> 
          <img src={MashUp} alt={MashUp} className='w-full object-cover ' />
          </div>
        
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col py-20'>
        <div className='w-1/2 h-[271px]'> 
          <img src={MashUp} alt={MashUp} className='w-full object-cover ' />
          </div>
         <div className='lg:w-1/3 ml-14'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Citrone</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
       text:lg text-[16px] font-font leading-[32px]'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   lg:my-8 md:my-8 my-8'><a href='https://portfolio-blue-seven-98.vercel.app/' target='blank'>View Project</a></button>
          </div>
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col py-20'>
         <div className='lg:w-1/3 ml-14'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Finsweet</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
       text:lg text-[16px] font-font leading-[32px]'>I am a graduate of Microbiology. My interest in software development started during my National Youth service Corps through a friend who has a degree in computer science graduate. I took computer programming language as part of my undergraduate course (FORTRAN) even though it doesnt interest me much then i still passed it with A.</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   lg:my-8 md:my-8 my-8'><a href='https://portfolio-blue-seven-98.vercel.app/' target='blank'>View Project</a></button>
          </div>
        <div className='w-1/2 h-[271px]'> 
          <img src={MashUp} alt={MashUp} className='w-full object-cover ' />
          </div>
        
         </div>
         <div className='bg-offwhite  py-8 border-t border-whity flex lg:flex-row md:flex-col flex-col items-center justify-between '>
         <div className='lg:block md:block hidden'>
            <img src={Logo} alt={Logo} className='w-[233px] h-[44px] items-center ' />
            
        </div>
   
        <ul className='flex gap-5 text-[#667085]  text-[16px] font-font'>
           <Link to="/" > <li className=' lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center '>Home</li></Link>
           <Link to="/about"> <li className=' lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center' >About</li></Link>
           <Link to="/contact" > <li className='lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Contact</li></Link>
           <Link to="/portfolio"> <li className='lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Portfolio</li></Link>
        </ul>
        <div className='text-[#667085] lg:text-[16px] md:text-[16px] text-sm'>
          <p>© 2023 Oyindamola Dorcas</p>
        </div>
    </div>
       </div>
    
  )
}

export default Portfolio;