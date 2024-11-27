import React from 'react'
import social1 from "../images/social1.png"
import social2 from "../images/social2.png"
import social3 from "../images/social3.png"

const SocialNetwork : React.FC= () => {
  return (
    <div className="w-full h-full py-10">
       <div className='container flex flex-col gap-20'>
            <h2 className='texth2 font-bold text-center'>Réseaux sociaux</h2>
            <div className='flex justify-around'>
               <div className='flex flex-col items-center'>
                <img src={social3} alt="" className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]' />
                <p className='font-bold text-gray-500'>Facebook</p>
               </div>
               <div  className='flex flex-col items-center'>
                <img src={social1} alt="" className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]' />
                <p  className='font-bold text-gray-500'>Tweeter</p>
               </div>
               <div  className='flex flex-col items-center'>
                <img src={social2} alt="" className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]'/>
                <p  className='font-bold text-gray-500'>Linkeldin</p>
               </div>
               
            </div>
       </div>
    </div>
  )
}

export default SocialNetwork
