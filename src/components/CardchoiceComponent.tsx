import React from 'react'
interface modalprops {
  image: string;       
  title: string;       
  description: string;
  color:string
}
const Cardchoice:React.FC <modalprops> = ({ image, title,description,color}) => {
  return (
    <div className=' md:h-[355px] pt-3 h-[355px]  rounded-t-xl shadow-md' style={{ backgroundColor: color }}>
       <div className='w-full h-full bg-white rounded-t-md p-5'  >
          <div className='h-1/3'>
            <img src={image} alt="" />
          </div>
          <div className='h-2/3 flex flex-col md:gap-8 gap-3' >
          <div className='text-[16px] font-bold'>
            {title}
            
          </div>
          <div className='md:text-[13px] text-[13px]'>
            {description}
          </div>
          </div>
       </div>
    </div>
  )
}

export default Cardchoice
