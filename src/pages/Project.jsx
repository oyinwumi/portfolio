import projectList from '../project';


const Project = () => {

  return (
    <div className='bg-offwhite py-20 xl:px-32 lg:px-28 md:px-28 px-10 '>
    <div className=' text-blu flex lg:flex-row md:flex-col flex-col items-center xl:mx[40%] lg:mx-[25%]  lg:gap-5 md:gap-0 gap-0 w-full'>
       <h2 className='lg:text-[48px] md:text-[30px] text-[22px] font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8'>My works</h2>
         <p className='lg:text-lg md:text-[16px] text-[16px] border-t border-blu font-font pt-2 lg:order-2 md:order-1 order-1'>My skill set is documented in various project</p>
          </div>
      <div className='w-full grid xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-14 items-center justify-center  mt-10'>
        {projectList.map((item , id)=>{
          // if(id === 1){
          // return color
          // }
          return <div  style={{backgroundColor: `${item.backgroundColor}` , borderColor: `${item.borderRadius}`} }  className={` lg:items-start md:items-center items-center lg:justify-start md:justify-center justify-center mx-auto  xl:w-full lg:w-full md::w-[310px] w-[300px] lg:h-[310px] md:h-[301px] h-[310px] bg-white text-[#000] border rounded-lg font-extrabold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 '`}>
            <div className=''>
            <h3 className='lg:text-[28px]  md:text-xl text-xl  my-8 text-center px-8'>{item.title}</h3>
            <p className='px-8 font-normal mt-4 h-[100px] lg:text-[16px] md:text-[16px] text-sm'>{item.details}</p> 
            </div>
            <button className=' border items-start rounded-full w-32 h-[46px] bg-[#000]  text-white text-center p-2   lg:my-8 md:my-8 my-8 mx-8'><a href={item.link} target='blank'>View Project</a></button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Project