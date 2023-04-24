import React from 'react';
import { RiFacebookFill , RiTwitterFill, RiGithubFill, RiLinkedinFill , RiInstagramFill} from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-[#000] py-8'>
          <div className='text-[aqua] flex justify-center items-center text-center gap-6 text-xl'>
        <a href="https://web.facebook.com/oyindamolaoluwumi" className='w-8 h-8 border rounded-full bg-[#000] hover:bg-[aqua] hover:text-black  border-[aqua] flex items-center justify-center' ><RiFacebookFill /></a>
        <a href="https://web.facebook.com/oyindamolaoluwumi" className='w-8 h-8 border rounded-full bg-[#000]  border-[aqua] hover:bg-[aqua] hover:text-[#000] flex items-center justify-center '><RiTwitterFill/></a>
        <a href="https://web.facebook.com/oyindamolaoluwumi" className='w-8 h-8 border rounded-full bg-[#000]  border-[aqua] hover:bg-[aqua] hover:text-[#000] flex items-center justify-center'><RiInstagramFill/></a>
        <a href="https://web.facebook.com/oyindamolaoluwumi" className='w-8 h-8 border rounded-full bg-[#000]  border-[aqua] hover:bg-[aqua] hover:text-[#000] flex items-center justify-center'><RiGithubFill/></a>
        <a href="https://web.facebook.com/oyindamolaoluwumi" className='w-8 h-8 border rounded-full bg-[#000]  border-[aqua] hover:bg-[aqua] hover:text-[#000] flex items-center justify-center'><RiLinkedinFill/></a>
      </div>
      <div className='text-white text-center text-sm mt-6'>
         <p className='mb-2 '>Copyright © 2023 - All Right Reserved.</p>
         <small>Designed by Cute <span className='text-[aqua]'>Oyindamola</span>.</small>
      </div>
    </div>
  )
}

export default Footer