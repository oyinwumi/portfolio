import React from 'react'
import Oyin from '../assest/oyin.jpeg'

const About = () => {
  return (
    <div className='bg-[#000] text-white  lg:px-32 md:px-28 px-20 py-20'>
        <h2 className='w-72 text-center mx-auto text-5xl  pb-2'>About Me</h2>
        <hr className='w-60 border-dotted border-b-4  border-white mx-auto' />
        <div className='flex  lg:flex-row md:flex-col flex-col mt-14 w-full'>
           <div className=' border-2 border-gray rounded p-6  '>
           <img src={Oyin} alt={Oyin} className='items-center' />
           </div>
            <div className='lg:ml-10 md:ml-0 ml-0 mt-10 text-white lg:w-1/2 md:w-full w-full text-start '>
                <header className='text-2xl mb-2'>I am Oyin<span className='text-[aqua]'>damola </span></header>
                <p className='uppercase mb-8 text-lg'>A passionate softWare developer</p>
                <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quas vero ipsam saepe, consectetur ducimus, aut et explicabo sed officiis quibusdam excepturi quo, ab ad inventore aliquid laboriosam numquam unde  laboriosam numquam unde orem ipsum dolor sit, amet consectetur adipisicing elit. Vel quas vero ipsam saepe, consectetur ducimus, aut et explicabo sed officiis quibusdam excepturi quo, ab ad inventore aliquid laboriosam numquam unde  laboriosam numquam unde.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quas vero ipsam saepe, consectetur ducimus, aut et explicabo sed officiis quibusdam excepturi quo, ab ad inventore aliquid laboriosam numquam unde  laboriosam numquam unde. lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quas vero ipsam saepe, consectetur ducimus, aut et explicabo sed officiis quibusdam excepturi quo, ab ad inventore aliquid laboriosam numquam unde  laboriosam numquam unde</p>
                <button className='bg-[aqua] hover:bg-white border w-[150px] h-[46px] p-2 text-center mt-6 text-black hover:text-[aqua] rounded-full border-[aqua] font-extrabold'> <a href="https://docs.google.com/document/d/121ZnIMVgnoDHn0gNVnJ8Q6FfabEZ667OTuZ1Ztjm0I4/edit#heading=h.arnrh62rcfpt" target='blank'>Download cv</a></button>
            </div>
        </div>
    </div>
  )
}

export default About