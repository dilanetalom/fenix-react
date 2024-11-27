import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../sectionstyle/dream.css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow,   
 Pagination } from 'swiper/modules';
import image from "../images/about1.png"

const DreamAssoSection: React.FC = () => {


  return (
   <div className='w-full lg:h-[700px] h-[600px] graybackcolor'>
      <div className='w-full h-full container mx-auto py-16 space-y-16'>
        <h2 className='texth2 text-white font-bold text-center'>
        Nos souvenirs
        </h2>
    <div className='w-full h-[600px]'>
    <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={window.innerWidth <= 528 ? 1: window.innerWidth <= 768 ? 2: window.innerWidth <= 968 ? 3  : 3}
    spaceBetween={20}
    coverflowEffect={{
      rotate: 50,
      stretch:   0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination]}   

  >
    
  
      <SwiperSlide>
        <img src={image} alt="" className="w-[297px] h-[345px] object-cover rounded-lg shadow-md" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" className="w-[297px] h-[345px] object-cover rounded-lg shadow-md" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" className="w-[297px] h-[345px] object-cover rounded-lg shadow-md" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" className="w-[297px] h-[345px] object-cover rounded-lg shadow-md" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" className="w-[297px] h-[345px] object-cover rounded-lg shadow-md" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="" className="w-[297px] h-[345px] object-cover rounded-lg shadow-md" />
      </SwiperSlide>
     
 
  </Swiper>
    </div>
      </div>
   </div>
  )
}

export default DreamAssoSection
