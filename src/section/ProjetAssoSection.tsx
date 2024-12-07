import React, { useEffect, useState } from 'react'
import activity1 from "../images/activity1.png"
import AssociationComponent from '../components/AssociationComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,   
    Pagination } from 'swiper/modules';
import axios from 'axios';
import { NewsData } from '../pages/Newspage';
// import 'swiper/css';






const ProjetAssoSection: React.FC = () => {


    const datas = [
        { id: 1, image: activity1, title: "Actualité", description: "Une belle soirée d’échanges avec des auteurs locaux et plus de 50 participants passionnés." },
        { id: 2, image: activity1, title: "Projet", description: "Une belle soirée d’échanges avec des auteurs locaux et plus de 50 participants passionnés." },
        { id: 3, image: activity1, title: "Actualité", description: "Une belle soirée d’échanges avec des auteurs locaux et plus de 50 participants passionnés." },
        { id: 4, image: activity1, title: "Actualité", description: "Une belle soirée d’échanges avec des auteurs locaux et plus de 50 participants passionnés." },
        { id: 5, image: activity1, title: "Projet", description: "Une belle soirée d’échanges avec des auteurs locaux et plus de 50 participants passionnés." },
        { id: 6, image: activity1, title: "Actualité", description: "Une belle soirée d’échanges avec des auteurs locaux et plus de 50 participants passionnés." },
    ];



    const[news, setNews]=useState<NewsData[]>([]);
    const API_URL = 'http://127.0.0.1:8000/api';

    const getBooks = async () => {
           try {
               const response = await axios.get(`${API_URL}/getnews`,);
               setNews(response.data);
           } catch (error) {
               console.error('Erreur lors de la récupération des livres:', error);
               throw error;
           }
       };
   
       useEffect(()=>{
           getBooks()
       },[])





    return (
        <div className='w-full lg:h-[865px] opacitybackcolor'>
            <div className='w-full h-full container py-20 flex flex-col mx-auto lg:gap-28 gap-16'>
                <AssociationComponent
                    title='Actualités et Projets en Cours'
                    description="Actualités de l'Association"
                />
        <div className=''>
                <div className='flex gap-5 transition-transform duration-500  h-[550px]'>
                <Swiper 
                   slidesPerView={window.innerWidth <= 675 ? 1: window.innerWidth <= 960 ? 2  : 3}
                 pagination={{ clickable: true }}
                 modules={[EffectCoverflow, Pagination]}   
               
                >
                    {news.map((item) => (
                         <SwiperSlide>
                        <div key={item.id} className='w-[300px] h-[445px]'> {/* Chaque slide prend un tiers de l'espace */}
                           <img src={`http://127.0.0.1:8000/images/news/${item.image}`}
                            alt={item.name} className='w-full h-[270px] object-cover rounded-[5px]' />
                            <div className='flex flex-col   gap-5 pt-5'>
                                <div className={`w-[79px] h-[28px] rounded-full px-[10px] py-[5px] ${item.name === "Projet" ? "bg-orange-500 text-white" : "bg-yellow-500"} text-[13px] flex justify-center`}>
                                    {item.type}
                                </div>
                                <div className='text-[13px] h-[80px]'>{item.description}</div>
                                <button className='w-[131px] h-[38px] p-[10px] border-[1px] border-gray-400 text-[13px] transition-all duration-300 ease-out hover:bg-[#007f99] hover:text-white'>
                                    EN SAVOIR PLUS
                                </button>

                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                      </Swiper>
                </div>
            </div>
         
           
        </div>
  
               
            </div>
    
    )
}

export default ProjetAssoSection
