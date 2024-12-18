import React, { useState } from 'react'
import cam1 from "../images/cam1.png"
import AssociationComponent from '../components/AssociationComponent'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow,   
  Pagination } from 'swiper/modules';





const EventAssoSection:React.FC = () => {

  const liste = [
    {
      id: 1,
      name: "afr"
    },
    {
      id: 2,
      name: "part1"
    },
  
  
  ]

  const itemsPerSlide = 1; // Nombre d'éléments par slide
    // const swiperRef = useRef(null); // Référence pour le Swiper

    const [currentIndex, setCurrentIndex] = useState(0);
  currentIndex 
  

  return (
    <div className="w-full h-auto bg-white">
      <div className='w-full lg:h-auto container py-20 flex flex-col mx-auto gap-20'>
         <AssociationComponent
         title='Nos concours et campagnes'
         description="Concours & Campagnes"
         />
     
     <div className='w-full h'>
     <Swiper
           spaceBetween={30}
           slidesPerView={itemsPerSlide}
           onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
           pagination={{ clickable: true }}
           modules={[EffectCoverflow, Pagination]}   
        >
         
         {
          liste.map((item) => {
            return (
            <SwiperSlide key={item.id} className=''>
         <div className='w-full flex flex-col gap-5 lg:gap-0 justify-end overflow-x-hidden container'>
            <div className='flex flex-col lg:px-20 transform lg:-translate-x-36'
               data-aos="fade-right" 
               data-aos-duration="1000"
            >
                <div className='w-[467px] h-[351px] transform translate-x-10 hidden lg:block overflow-hidden'
             
                >
                    <img src={cam1} alt="" className='w-full h-full object-cover object-center rounded-[5px] hover:scale-125 duration-100 cursor-pointer' />
                </div>
                <div className='lg:w-[467px] w-full lg:h-[351px] shadow-xl bg-white rounded-[5px] lg:transform lg:translate-x-80 lg:-translate-y-36 lg:p-10 p-5 flex flex-col justify-between gap-3 lg:gap-0 cursor-pointer'
          
                >
                    <div className='text-[13px] yellowbackcolor px-[10px] py-[5px] w-[82px] h-[28px] rounded-full flex items-center'>Concours</div>
                    <p className='font-bold lg:text-[19px] text-[16px]'>Concours d’Écriture Créative 2024</p>
                    <p className='text-[13px]'>Participez à notre concours en soumettant une nouvelle originale sur 
                        le thème "Histoires qui unissent". Les gagnants remporteront 
                        des bons d'achat de livres et une publication dans notre revue littéraire.</p>
                        <p className='font-bold lg:text-[16px] text-[13px]'>Date de début : 1er décembre 2024</p>
                        <p className='font-bold lg:text-[16px] text-[13px]'>Date de fin : 31 janvier 2025</p>
                </div>
            </div>


            <div className='flex flex-col lg:items-end lg:px-20 transform lg:translate-x-36  '
                  data-aos="fade-left" // Animation de zoom
                 data-aos-duration="1000"
            >
                <div className='w-[467px] h-[311px] transform -translate-x-10 hidden lg:block overflow-hidden'
                
                >
                    <img src={cam1} alt="" className='w-full h-full object-cover object-center rounded-[5px] hover:scale-125 duration-100 cursor-pointer' />
                </div>
                <div className='lg:w-[467px] w-full lg:h-[351px] shadow-xl bg-white rounded-[5px] lg:transform lg:-translate-x-80 lg:-translate-y-36 lg:p-10 p-5 flex flex-col justify-between gap-3 lg:gap-0 cursor-pointer'
                    
                >
                    <div className='text-[13px] yellowbackcolor px-[10px] py-[5px] w-[82px] h-[28px] rounded-full flex items-center'>Concours</div>
                    <p className='font-bold lg:text-[19px] text-[16px]'>Concours d’Écriture Créative 2024</p>
                    <p className='text-[13px]'>Participez à notre concours en soumettant une nouvelle originale sur 
                        le thème "Histoires qui unissent". Les gagnants remporteront 
                        des bons d'achat de livres et une publication dans notre revue littéraire.</p>
                        <p className='font-bold lg:text-[16px] text-[13px]'>Date de début : 1er décembre 2024</p>
                        <p className='font-bold lg:text-[16px] text-[13px]'>Date de fin : 31 janvier 2025</p>
                </div>
            </div>


         </div>
          </SwiperSlide>
            )
          })
        }
</Swiper>
     </div>

      </div>
    </div>
  )
}

export default EventAssoSection
