import React from 'react'

const Newsletter:React.FC = () => {
  return (
    <div className='w-full lg:h-[215px] orangebackcolor text-white'>
      <div className='w-full h-full mx-auto container py-10 flex lg:flex-row flex-col justify-between'>
      <div className='lg:w-[500px] flex flex-col gap-2'>
             <h4 className='texth4 font-bold'>Souscrivez à notre newsletter
             pour ne rien manquer</h4>
             <p className='text-[13px]  lg:text-[14px]'>Restez informé de toutes nos dernières nouvelles, conseils,
             et réalisations en vous inscrivant à notre newsletter</p>
       </div>
       <div className='flex lg:flex-row flex-col gap-5 items-center'>
              <input type="text" className='outline-none w-full border-b-[0.1px] border-white orangebackcolor'/>
              <button className='bg-black px-[10px] py-[8px] w-full rounded-[5px]'>je m’inscris </button>
       </div>
      </div>
    </div>
  )
}

export default Newsletter
