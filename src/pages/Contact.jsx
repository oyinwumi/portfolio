import React from 'react';
import { Link } from 'react-router-dom';
import Frame from '../assest/Frame.svg'
import Frame1 from '../assest/Frame (1).svg'
import Frame2 from '../assest/Frame (2).svg'
import Frame3 from '../assest/Frame (3).svg'
import Frame4 from '../assest/Frame (4).svg'
import Frame5 from '../assest/Frame (5).svg'
import NavT from '../assest/nav.svg'


// import { FaEnvelope , FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";

const Contact = () => {
    
  return (
    <div className='bg-[#00132D] lg:px-[124px] md:px-28 px-8 pt-20 pb-36'>
        <div className='lg:text-[48px] md:text-[30px] text-[22px] text-whity flex lg:flex-row md:flex-col flex-col items-center  justify-center mb-10  lg:gap-5 md:gap-0 gap-0 w-full'>
                <p className='lg:text-[48px] md:text-[30px] text-[22px] font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8'>Get In Touch</p>
                <p className='lg:text-lg md:text-[16px]  text-[16px] border-t border-whity  pt-2 font-font lg:order-2 md:order-1 order-1'>Available to communicate</p>
              </div>
        <div className='flex lg:flex-row md:flex-col flex-col justify-between w-full text-whity font-font'>
            <div className='lg:w-1/2 md:w-full w-full'> 
                <form action="oyindamoladorcasogunkunle@gmail.com" method='post'  className=' text-xl capitalize '>
                  <div className='flex lg:flex-row md:flex-col flex-col gap-5 w-full mb-6'>
                  <div className=' lg:w-1/2 md:w-full w-full'>
                    <label htmlFor="name" className='text-whity'>First Name</label><br />
                    <input type="text" className='outline-none p-2 w-full  border rounded-lg capitalize bg-darkblue' />
                    </div>
                    <div className=' lg:w-1/2 md:w-full w-full'>
                    <label htmlFor="name"  className='text-whity' >Last Name</label><br />
                    <input type="text" className='outline-none  p-2 w-full border rounded-lg capitalize bg-darkblue'/>
                    </div>
                  </div>
                  <label htmlFor="email "  className='text-whity pb-3'>Email Address</label><br />
                  <input type="email" className='w-full p-2 border rounded-lg outline-none mb-6 capitalize bg-darkblue' /><br /><br />
                  <textarea name="" id="" cols="30" rows="3" placeholder='Message' className='w-full p-4 outline-none bg-darkblue border rounded-lg'></textarea>
                  <button className='border text-center rounded-full w-full h-[46px] p-1 mt-4 bg-offwhite text-darkblue lg:mb-0 md:mb-14 mb-14'>Send</button> <br />
                 
                </form>
            </div>
            <div className='lg:w-1/2 md:w-full w-full xl:ml-36 lg:ml-14 md:ml-0 ml-0 text-whity  relative'>
                <div>
                    <div className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                    <img src={Frame} alt={Frame} />
                     <p className=''>5, Church Street,Bembo Area, Sango, Ibadan, Nigeria</p>
                    </div>
                    <div className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                      <img src={Frame1} alt={Frame1} />
                        <p>oyinwumi0229@gmail.com</p>
                    </div>
                    <div className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                    <img src={Frame2} alt={Frame2} />
                        <p>+234 (08139715172)</p>
                    </div>
                    <a href='https://www.linkedin.com/in/oyindamola-ogunkunle' target='blank' className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                       <span  ><img src={Frame3} alt={Frame3} /></span>
                        <span>Ogunkunle oyindamola</span>
                    </a>
                    <a  href='https://twitter.com/Oyinwumi0229' target='blank' className='flex gap-4 lg:text-xl md:text-xl text-[16px] mb-6'>
                       <span  ><img src={Frame4} alt={Frame4} /></span>
                        <spanan>Ogunkunle oyindamola</spanan>
                    </a>
                    <a  href='https://github.com/oyinwumi' target='blank' className='flex gap-4 lg:text-xl md:text-xl text-[16px] '>
                       <span><img src={Frame5} alt={Frame5} /></span>
                        <span>Ogunkunle oyindamola</span>
                    </a>
                    </div>
                    <Link to='/' className='text-offwhite lg:text-[24px] font-font w-full  float-right inset-y-0 right-0'>
                    <img src={NavT} alt={NavT} />
        
                  </Link>
                </div>
            </div>
        </div>
    
  )
}

export default Contact