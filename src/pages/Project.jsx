import projectList from '../project';


const Project = () => {

  return (
    <div className='bg-offwhite py-20 xl:px-32 lg:px-28 md:px-28 px-10 '>
    <div className=' text-blu flex lg:flex-row md:flex-col flex-col items-center xl:mx[40%] lg:mx-[25%]  lg:gap-5 md:gap-0 gap-0 w-full'>
       <h2 className='lg:text-[32px] md:text-[28px] text-[24px] font-open lg:order-1 md:order-2 order-2 lg:mb-0 md:mb-8 mb-8 fill-blu'>My works</h2>
         <p className='lg:text-lg md:text-[16px] text-[16px] border-t border-blu font-font pt-2 lg:order-2 md:order-1 order-1'>My skill set is documented in various project</p>
          </div>
      <div className=' w-full grid xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-14 items-center justify-center  mt-10'>
        {projectList.map((item , id)=>{
          return <div  style={{backgroundColor: `${item.backgroundColor}` , borderColor: `${item.borderRadius}`} }  className={` lg:items-start md:items-center items-center justify-start mx-auto  xl:w-full lg:w-full md:w-full w-[320px] h-[315px] bg-white text-[#000] border rounded-lg font-normal transition ease-in-out delay-150  hover:translate-y-1 hover:scale-105  duration-300  '`}>
            <div className=' '>
            <h3 className='lg:text-[24px]  md:text-xl text-xl  mt-6  font-open lg:px-8 mx-4'>{item.title}</h3>
            <p className=' font-font mt-4 h-[100px] lg:text-[16px] md:text-[16px] text-sm leading-[32px] lg:px-8 mx-4'>{item.details}</p> 
            </div>
            <button style={{color: `${item.backgroundColor}`}} className=' border items-start rounded-full w-32 lg:h-[46px] md:h-[42px] h-[40px] bg-[#000]  text-center p-2  my-16 lg:mx-8 mx-4'><a href={item.link} target='blank'>View Project</a></button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Project