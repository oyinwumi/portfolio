import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import MashUp from '../assest/mash-up1.png'
import Calculator from '../assest/calculator.jpeg'
import PrimeTable from '../assest/primeTable.jpeg'
import User from '../assest/fetch-users.jpeg'
import MockUp from '../assest/mockup2.png'
import Logo from '../assest/portfolio-logo.svg'




const Portfolio = () => {
  return (
    <div className='bg-[#ffffff] pt-20 lg:px-[124px] md:px-28 px-8 w-full'>
      <div className='text-center lg:w-[809px] justify-center mx-auto font-normal'>
     
      <div className='text-center lg:w-[809px] justify-center mx-auto  font-medium leading-[60px] lg:text-[48px] md:text-[36px] text-[34px]'>
        <p className=' flex flex-col text-[#0F0A00]  '>I design and build usable <span className='text-redorange ml-2 fill-[#0F0A00]'>    <Typewriter  options={{ autoStart: true, loop: true,delay: 75,strings:[' interface', 'experience', 'product']}}/></span>
        </p>
      </div> 
       <p className='text-[#667085] lg:text-xl md
       text:lg text-[16px] font-font mt-4 '>Building scalable product for various business is my area of speciality. My core values are unwavering integrity, empathy, team spirit and collaboration, good communication, <br /> dedication and imbibing knowledge to others.</p>
       <div className='flex gap-4 font-font pt-10 lg:text-[16px] text-sm  justify-center'>
      
      <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt"  target='blank' ><button className=' bg-redorange hover:bg-blu   text-white border lg:w-[156px] md:[156px]  w-[150px] h-[46px] p-2 text-center rounded-full border-redorange hover:border-white font-extrabold outline-none'>Download cv</button></a>
      <Link to='/portfolio' className=''><button className='bg-offwhite hover:bg-redorange text-blu border lg:w-[156px] md:[156px] w-[150px] h-[46px] lg:p-2 p-1 text-center rounded-full border-blu hover:border-redorange outline-none font-extrabold '>Veiw my work</button></Link>
    </div>
      </div>

       <div className='flex lg:flex-row md:flex-col flex-col lg:py-24 md:py-14 py-14 justify-center'>
        <div className='w-full lg:order-1 md:order-2 order-2'> 
          <img src={MashUp} alt={MashUp} className='w-full h-full  ' />
          </div>
         <div className='lg:w-full md:w-full w-full lg:ml-16 md:ml-0 ml-0  lg:order-2 md:order-1 order-1 xl:mt-10 lg:mt-0 md:mt-0 mt-0' >
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Portfolio Website</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
          text:lg text-[16px] font-font leading-[32px] '>This is my personal website which contains my resume and portfolio. I buit it with React, Tailwind Css and  typewriter effect , Framer motion and many react feactures such as React hooks,  </p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   mt-8'><a href='https://portfolio-blue-seven-98.vercel.app/' target='blank'>View Project</a></button>
          </div>
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col lg:py-24 md:py-14 py-14  w-full justify-center'>
         <div className='lg:w-2/5 md:w-full w-full lg:mr-16 md:mr-0 mr-0  xl:mt-10 lg:mt-0 md:mt-0 mt-0'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Simple Calculator</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
           text:lg text-[16px] font-font leading-[32px] '>This project was part of the javascript basic module for the Frontend Development Track at Stutern. I built this calculator for performing basic arithemetic. It was built with HTML , CSS and JavaScript</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2 mt-8'><a href='https://javascript-calculator-app-nu.vercel.app/' target='blank'>View Project</a></button>
          </div>
        <div className='lg:w-2/5 md:w-full w-full  items-center lg:mt-0 md:mt-10 mt-10'> 
        <img src={Calculator} alt={Calculator} className='w-full h-[486px] object-cover   ' />
          </div>
        
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col lg:py-24 md:py-14 py-14  w-full justify-center'>
        <div className='lg:w-2/5 md:w-full w-full items-center lg:order-1 md:order-2 order-2 lg:mt-0 md:mt-10 mt-10'> 
        <img src={User} alt={User} className='w-full   h-[486px]   object-cover  ' />
          </div>
         <div className='lg:w-2/5 md:w-full w-full lg:ml-14 md:ml-0 ml-0  lg:order-2 md:order-1 order-1  xl:mt-10 lg:mt-0 md:mt-0 mt-0'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Fetch User</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
         text:lg text-[16px] font-font leading-[32px]'>I built this project as part of the React basic module for the Frontend Development Track at Stutern. It is a simple design for search or fetching users using their name or username. It was built with React js</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2 mt-8'><a href='https://async-react-wine.vercel.app/' target='blank'>View Project</a></button>
          </div>
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col lg:py-24 md:py-14 py-14 w-full justify-center'>
         <div className='lg:w-2/5 md:w-full w-full lg:mr-16 md:md:mr-0 mr-0  xl:mt-10 lg:mt-0 md:mt-0 mt-0'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Prime table</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
            text:lg text-[16px] font-font leading-[32px]'>I built this project as part of the React js basic module for the Frontend Development Track at Stutern. It is a dynamic prime number multiplication table .It was built with React js</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2 mt-8'><a href='https://prime-number-table.vercel.app/' target='blank'>View Project</a></button>
          </div>
        <div className='lg:w-2/5 md:w-full w-full items-center lg:mt-0 md:mt-10 mt-10'> 
          <img src={PrimeTable} alt={PrimeTable}  className='w-full  h-[486px]  object-cover  ' />
          </div>
        
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col lg:py-24 md:py-14 py-14 w-full justify-center'>
        <div className='lg:w-2/5 md:w-full w-full lg:mt-0 md:mt-10 mt-10 lg:order-1 md:order-2 order-2'> 
          <img src={MockUp} alt={MockUp} className='w-full object-cover  h-[486px] ' />
          </div>
         <div className='lg:w-2/5 md:w-full w-full lg:ml-16 md:ml-0 ml-0  lg:order-2 md:order-1 order-1  xl:mt-10 lg:mt-0 md:mt-0 mt-0'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Citrone</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
       text:lg text-[16px] font-font leading-[32px]'>I am leading a team of three frontend developer to build a website which is a learning experience platform for seamlessly access learning material at Stutern. It was built with Reactjs and Redux toolkit.

       </p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2 mt-8'><a href='https://citrone-redesign-crater.vercel.app/' target='blank'>View Project</a></button>
          </div>
         </div>
         <div className='flex lg:flex-row md:flex-col flex-col lg:py-24 md:py-14 py-14 w-full justify-center '>
         <div className='lg:w-2/5 md:w-full w-full lg:mr-16 md:mr-0 mr-0  xl:mt-10 lg:mt-0 md:mt-0 mt-0'>
          <h3 className='text-blu font-open fill-blu mb-12 lg:text-[32px] md:text-[28px] text-[26px] items-start'>Finsweet</h3>
          <p className='text-[#667085] text-justify lg:text-xl md
            text:lg text-[16px] font-font leading-[32px]'>I built this web page while learning html and css .The webpage different pages that can be route to . It was built with HTML and vanilla CSS.</p>
          <button className=' border  rounded-full w-32 h-[46px] bg-blue  text-white text-center p-2   lg:my-8 md:my-8 my-8'><a href='https://fin-sweet-rouge.vercel.app/contact.html' target='blank'>View Project</a></button>
          </div>
        <div className='lg:w-2/5 md:w-full w-full items-center lg:mt-0 md:mt-10 mt-10'> 
          <img src={MashUp} alt={MashUp} className='w-full object-cover   h-[486px] ' />
          </div>
        
         </div>
         <div className='  py-8 border-t border-whity flex lg:flex-row md:flex-col flex-col items-center justify-between '>
         <div className='lg:block md:hidden hidden'>
            <img src={Logo} alt={Logo} className='w-[233px] h-[44px] items-center ' />
            
        </div>
   
        <ul className='flex gap-5 text-[#667085]  text-[16px] font-font'>
           <Link to="/" > <li className=' lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center '>Home</li></Link>
           <Link to="/about"> <li className=' lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center' >About</li></Link>
           <Link to="/contact" > <li className='lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Contact</li></Link>
           <Link to="/portfolio"> <li className='lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Portfolio</li></Link>
        </ul>
        <div className='text-[#667085] lg:text-sm md:text-sm text-xs font-font'>
          <p>© 2023 Oyindamola Dorcas</p>
        </div>
    </div>
       </div>
    
  )
}

export default Portfolio;