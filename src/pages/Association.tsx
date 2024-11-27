import React from 'react'
import Layouts from '../partials/Layouts'
import AssociaHeaderSection from '../section/AssociaHeaderSection'
import StoryAssoSection from '../section/StoryAssoSection'
import OjectifAssoSection from '../section/OjectifAssoSection'
import Newsletter from '../section/NewsletterSection'
import ActivityAssoSection from '../section/ActivityAssoSection'
import young from "../images/young.png"
import ProjetAssoSection from '../section/ProjetAssoSection'
import EventAssoSection from '../section/EventAssoSection'
import DreamAssoSection from '../section/DreamAssoSection'

const Association:React.FC = () => {
  return (
   <Layouts>
    <div>
        <AssociaHeaderSection/>
        <StoryAssoSection/>
        <OjectifAssoSection/>
        <ActivityAssoSection/>
        <div className='w-full h-[576px] relative'>
             <img src={young} alt="" className='w-full h-full object-cover object-center' />
             <div className='w-full h-full container absolute flex items-center '>
              <div className='lg:w-[467px] w-[374px] lg:h-[363px] h-[225px] bg-white lg:p-10 p-6 rounded-[5px] flex flex-col justify-around'>
                <p className='lg:text-[33px] text-[16px] font-bold'>Une question ou un projet en tête ?</p>
                <p className='text-[13px]'>Contactez-nous dès maintenant pour en savoir plus
                ou collaborer avec nous !</p>
                <button className='lg:w-[181px] w-[157px] h-[46px] px-[25px] py-[12px] orangebackcolor lg:text-[16px] text-[13px] rounded-[5px] text-white font-bold'>Nous Contacter</button>
              </div>
             </div>
        </div>
        <ProjetAssoSection/>
        <EventAssoSection/>
        <DreamAssoSection/>
    </div>
    <Newsletter/>
   </Layouts>
  )
}

export default Association
