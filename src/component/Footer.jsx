import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assest/white-logo.svg'

const Footer = () => {
  return (
    <div className='bg-[#00132D]  py-8 border-t border-whity flex lg:flex-row md:flex-col flex-col items-center justify-between lg:px-[124px] md:px-28 px-8'>
    <div className='lg:block md:hidden  hidden'>
            <img src={Logo} alt={Logo} className='w-[233px] h-[44px] items-center ' />
            
        </div>
   
        <ul className='flex gap-5 text-whity  text-[16px] font-font'>
           <Link to="/" > <li className=' lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center '>Home</li></Link>
           <Link to="/about"> <li className=' lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center' >About</li></Link>
           <Link to="/contact" > <li className='lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Contact</li></Link>
           <Link to="/portfolio"> <li className='lg:text-[16px] md:text-[16px] text-sm lg:px-4 md:px-3 px-2  lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Portfolio</li></Link>
        </ul>
        <div className='text-whity lg:text-sm md:text-sm text-xs font-font'>
          <p>© 2023 Oyindamola Dorcas</p>
        </div>
    </div>
  )
}

export default Footer