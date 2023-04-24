import React from 'react';
import projectList from '../project';

const Project = () => {
  return (
    <div className='bg-[aqua] py-20 xl:px-32 lg:px-28 md:px-28 px-10 '>
      <h2 className='lg:text-5xl md:text-4xl text-4xl text-black text-center'>Projects</h2>
      <div className='w-full flex xl:flex-nowrap lg:flex-wrap md:flex-wrap flex-wrap items-center justify-center gap-5 mt-10'>
        {projectList.map((item)=>{
          return <div className=' xl:w-1/4 lg:w-2/4 md:w-1/3 items-center w-full xl:h-[500px] lg:h-[450] md:h-[450px] h-[450px]] bg-white text-[#000] border rounded-lg font-extrabold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>
            <img src={item.image} alt={item.image} className='h-[150px] w-full object-cover mb-8' />
            <div className='lg:h-[200px] md-h-[180px]h-[180px]'>
            <h3 className='text-3xl  my-4 text-center px-4'>{item.title}</h3>
            <p className='text-start px-4 font-normal'>{item.details}</p> 
            </div>
            <button className=' border items-start rounded-full w-32 h-[46px] bg-[#000] text-white text-center p-2 xl:mt-12 lg:mt-2 md:mt-6 mt-4 lg-mb-0 md:mb-3 mb-3 mx-4'><a href={item.link} target='blank'>View Project</a></button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Project