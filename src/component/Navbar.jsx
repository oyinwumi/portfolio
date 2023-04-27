import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assest/portfolio-logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='font-font w-full h-[88px] bg-blu flex justify-between lg:px-[124px] md:px-28 px-8 text-white text-xl items-center border-b-0 '>
        <div className=' '>
            <img src={Logo} alt={Logo} className='md:w-[233px] md:h-[44px] w-[233px] h-[44px] items-center ' />     
        </div>
        <div  onClick={() => setOpen(!open)}className=' text-white text-4xl  font-light ml-2 lg:hidden'>
           <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>
        <ul className={` flex lg:flex-row md:flex-col flex-col justify-center px-4 md:z-50 z-50 lg:static  md:absolute absolute  right-0 lg:w-auto md:w-full w-full  bg-blu  text-2xl
         md:pb-0 pb-12   md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
           <Link to="/" > <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center '>Home</li></Link>
           <Link to="/about"> <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center' >About</li></Link>
           <Link to="/contact" > <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Contact</li></Link>
           <Link to="/portfolio"> <li className='px-4 lg:pb-0 md:pb-6 pb-6 hover:text-redorange hover:border-b-2 text-center'>Portfolio</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar