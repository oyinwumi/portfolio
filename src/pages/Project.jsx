import React from 'react';
import projectList from '../project';

const Project = () => {
  return (
    <div className='bg-[aqua] py-20 lg:px-32 md:px-28 px-10'>
      <h2 className='lg:text-5xl md:text-4xl text-4xl text-black text-center'>Projects</h2>
      <div className='w-full flex lg:flex-nowrap md:flex-wrap flex-wrap items-center justify-center gap-5 mt-10'>
        {projectList.map((item)=>{
          return <div className='lg:w-1/4 md:w-2/3 items-center w-full lg:h-[500px] md:h-[450px] h-[450px]] bg-white text-[#000] border rounded-lg font-extrabold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '>
            <img src={item.image} alt={item.image} className='h-[150px] w-full object-cover mb-8' />
            <div className='lg:h-[200px] md-h-[180px]h-[180px]'>
            <h3 className='text-3xl  my-4 text-center px-4'>{item.title}</h3>
            <p className='text-start px-4 font-normal'>{item.details}</p> 
            </div>
            <button className=' border items-start rounded-full w-32 h-[46px] bg-[#000] text-white text-center p-2 lg:mt-12 md:mt-6 mt-4 lg-mb-0 md:mb-3 mb-3 mx-4'><a href={item.link} target='blank'>View Project</a></button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Project