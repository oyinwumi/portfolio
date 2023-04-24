import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assest/port-logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='h-[80px] flex justify-between lg:px-32 md:px-28 px-10 text-white text-xl items-center bg-[#000] '>
        <div className=' '>
            <img src={Logo} alt={Logo} className='w-[70px] h-[70px] items-center hover:opacity-60' />
            
        </div>
        <div  onClick={() => setOpen(!open)}className=' text-white text-5xl ml-2 lg:hidden'>
           <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>
        <ul className={`md:flex justify-center px-4 md:z-auto z-50 md:static absolute w-full left-0 md:w-auto text-2xl
         md:pb-0 pb-12 md:pl-0 pl-9  lg:py-0 md:py-6 py-6 md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
           <Link to="/" > <li className='pr-6 lg:pb-0 md:pb-6 pb-6 lg:hover:text-[aqua] md:hover:text-white'>Home</li></Link>
           <Link to="/about"> <li className='pr-6 lg:pb-0 md:pb-6 pb-6 lg:hover:text-[aqua] md:hover:text-white' >About</li></Link>
           <Link to="/contact" > <li className='pr-6 lg:pb-0 md:pb-6 pb-6 lg:hover:text-[aqua] md:hover:text-white'>Contact</li></Link>
           <Link to="/portfolio"> <li className='pr-6 lg:pb-0 md:pb-6 pb-6 lg:hover:text-[aqua] md:hover:text-white'>Portfolio</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar