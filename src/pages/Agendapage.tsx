import React, { useState } from 'react'
import Layouts from '../partials/Layouts'
import type1 from "../images/type1.png"
import type2 from "../images/type2.png"
import type3 from "../images/type3.png"
import agendas1 from "../images/agendas1.png"
import agendas2 from "../images/agendas2.png"
import agendas3 from "../images/agendas3.png"
import Newsletter from '../section/NewsletterSection'
import { Link } from 'react-router-dom'
import Agendamodal from '../components/Agendamodal'

const Agendapage: React.FC = () => {

    const typecard = [
        {
            id: 1,
            image: type3,
            hoverImage: agendas1,
            text: "Radio"
        },
        {
            id: 2,
            image: type1,
            hoverImage: agendas2,
            text: "Télévision"
        },
        {
            id: 3,
            image: type2,
            hoverImage: agendas3,
            text: "Rencontre"
        },
    ]
    const typecards = [
        {
            id: 1,
            image: type1,
            text: "Radio"
        },
        {
            id: 2,
            image: type2,
            text: "Télévision"
        },
        {
            id: 3,
            image: type3,
            text: "Rencontre"
        },
        {
            id: 4,
            image: type3,
            text: "Rencontre"
        },
        {
            id: 5,
            image: type3,
            text: "Rencontre"
        },
        {
            id: 6,
            image: type3,
            text: "Rencontre"
        },
        {
            id: 7,
            image: type3,
            text: "Rencontre"
        },
        {
            id: 8,
            image: type3,
            text: "Rencontre"
        },
        {
            id: 9,
            image: type3,
            text: "Rencontre"
        },
    ]
    const [isModalOpen, setIsModalOpen] = useState(false);



    return (

        <>
            <Layouts>
                <Agendamodal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <div className='h-auto w-full opacitybackcolor py-16 mt-20 lg:mt-0'>
                    <div className='w-full h-auto flex justify-center mx-auto items-center gap-6 px-5 lg:px-0'>
                        {typecard.map((item) => {
                            const [hovered, setHovered] = useState(false); // État local pour chaque élément

                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                    className='shadow-md bg-white lg:w-[195px] lg:h-[148px] w-[109px] h-[83px] rounded-[5px] flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-out hover:bg-[#007f99] cursor-pointer'
                                >
                                    {hovered ? (
                                        <img src={item.hoverImage} alt="" className='lg:w-[83px] lg:h-[83px] w-[48px] h-[47px]' />
                                    ) : (
                                        <img src={item.image} alt="" className='lg:w-[83px] lg:h-[83px] w-[48px] h-[47px]' />
                                    )}
                                    <p className={`font-bold lg:text-[16px] text-[11px] ${hovered ? 'text-white' : 'text-black'}`}>
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className='w-full h-auto py-20 container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-5 justify-center'>
                        {
                            typecards.map((item) => {
                                return (
                                    <div key={item.id} onClick={() => setIsModalOpen(true)} className=' md:h-[208px] border-2 border-gray-500 p-6 shadow-md rounded-[5px] border-opacity-50 space-y-6 cursor-pointer transition-all duration-300 ease-out hover:bg-[#007f99] hover:text-white'>
                                        <div className='px-[5px] py-[1px] yellowbackcolor inline-block rounded-full '>03/10/2024</div>
                                        <div className='text-[13px]'>
                                            <b>  Alexandra Schwartzbrod invitée des rencontres Littérature, enjeux contemporains </b>
                                            16h00 au Théâtre du Vieux-Colombier / Comédie-Française (Paris)
                                        </div>
                                        <Link to='' className='text-[11px] text-blue-600 hover:text-white'>Voir plus</Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='w-full h-auto bg-white '>
                    <div className='h-full w-full container  flex justify-center items-center mx-auto py-24'>
                        <div className='w-[613px] lg:h-[182px]  rounded-[10px] orangebackcolor lg:p-10 p-5 flex lg:flex-row  flex-col gap-5 text-white'>
                            <div className='lg:w-1/2 h-full'>
                                <p className='text-[23px] font-bold'>Abonnez-vous à la newsletter</p>
                                <p className='text-[13px] '>Recevez nos dernières actualités directement dans votre boîte mail</p>
                            </div>
                            <div className='lg:w-1/2 h-full relative flex items-center justify-center '>
                                <input type="text" placeholder='Votre e-mail' className='w-full h-[45px] rounded-full orangebackcolor border-[1px] outline-none text-white px-3' />
                                <button className='absolute bg-black right-2 lg:top-8 top-1 h-[36px] w-[89px] rounded-full text-[13px]'>ENVOYEZ</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </Layouts>
        </>
    )
}

export default Agendapage