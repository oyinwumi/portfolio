import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assest/white-logo.svg'

const Footer = () => {
  return (
    <div className='bg-[#00132D] py-8 border-t border-white flex lg:flex-row md:flex-col flex-col items-center justify-between lg:px-[124px] md:px-28 px-10'>
    <div className='lg:block md:block hidden'>
            <img src={Logo} alt={Logo} className='w-[233px] h-[44px] items-center ' />
            
        </div>
   
        <ul className='flex gap-5 text-white  text-[16px] font-font'>
           <Link to="/" > <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center '>Home</li></Link>
           <Link to="/about"> <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center' >About</li></Link>
           <Link to="/contact" > <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Contact</li></Link>
           <Link to="/portfolio"> <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Portfolio</li></Link>
        </ul>
        <div className='text-offwhite'>
          <p>© 2023 Oyindamola Dorcas</p>
        </div>
    </div>
  )
}

export default Footer