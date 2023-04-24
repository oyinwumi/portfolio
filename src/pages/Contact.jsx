import React from 'react';
import { FaEnvelope , FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-[#110303] lg:px-32 md:px-28 px-20 py-20'>
        <h2 className='text-5xl text-center text-white mb-14'>Get In Touch</h2>
        <div className='flex lg:flex-row md:flex-col flex-col justify-between w-full'>
            <div className='lg:w-1/2 md:w-full w-full'> 
                <form action="" className='text-white text-xl'>
                  <div className='flex lg:flex-row md:flex-col flex-col gap-5 w-full mb-6'>
                  <div className=' lg:w-1/2 md:w-full w-full'>
                    <label htmlFor="name">First Name</label><br />
                    <input type="text" className='outline-none border-none p-4 w-full  border rounded-lg' />
                    </div>
                    <div className=' lg:w-1/2 md:w-full w-full'>
                    <label htmlFor="name">Last Name</label><br />
                    <input type="text" className='outline-none border-none p-4 w-full border rounded-lg'/>
                    </div>
                  </div>
                  <label htmlFor="email">Email Address</label><br />
                  <input type="email" className='w-full p-4 border rounded-lg outline-none mb-6' /><br /><br />
                  <textarea name="" id="" cols="30" rows="8" placeholder='Message' className='w-full p-4 outline-none border rounded-lg'></textarea>
                  <button className='border text-center rounded-full w-24 h-[40px] p-1 mt-4'>Send</button>
                </form>
            </div>
            <div className='lg:w-1/2 md:w-full w-full lg:ml-36 md:ml-0 ml-0 text-white'>
                <h3 className='text-4xl mb-8 lg:mt-0 md:mt-12 mt-12'>Contact Info</h3>
                <div>
                    <div className='flex gap-4 text-2xl mb-6'>
                        < FaMapMarkerAlt className='text-3xl'/>
                        <p>5, Church Street,Bembo Area, Sango, Ibadan, Nigeria</p>
                    </div>
                    <div className='flex gap-4 text-2xl mb-6'>
                        < FaEnvelope className='text-3xl'/>
                        <p>oyindamoladorcasogunkunle@gmail.com</p>
                    </div>
                    <div className='flex gap-4 text-2xl mb-6'>
                        < FaEnvelope className='text-3xl'/>
                        <p>oyinwumi0229@gmail.com</p>
                    </div>
                    <div className='flex gap-4 text-2xl'>
                        < FaPhoneAlt className='text-3xl'/>
                        <p>+234 (08139715172)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact