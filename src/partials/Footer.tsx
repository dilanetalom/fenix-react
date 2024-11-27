
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import logo from '../images/logo2.png'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    const lien = [
        {
            id: 1,
            text: "Nouveautés",
            link: ""
        },
        {
            id: 2,
            text: "Auteurs",
            link: ""
        },
        {
            id: 3,
            text: "Catalogue finex",
            link: ""
        },
        {
            id: 4,
            text: "Actualités",
            link: ""
        },
        {
            id: 5,
            text: "Agenda",
            link: ""
        },


    ]
    const liens = [
        {
            id: 1,
            text: "Qui somme-nous ?",
            link: ""
        },
        {
            id: 2,
            text: "Contactez-nous ?",
            link: ""
        },
        {
            id: 3,
            text: "Question fréquentes",
            link: ""
        },

    ]

    return (
        <div className='w-full  graybackcolor lg:h-[412px] text-white text-[13px]'>
            <div className='container mx-auto px-10 h-full  py-10'>
                <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-12 gap-6 h-[90%] border-b-[0.1px] border-white border-opacity-20'>
                    <div className=' flex flex-col gap-5'>
                        <div>
                            <img src={logo} alt="" />
                            <span>61 rue des Saints-Pères 75006 Paris</span>
                        </div>
                        <div>
                            <div className='flex gap-2 items-center'>
                            <span><FaPhoneAlt size={20} /></span>
                            <span>Téléphone</span>
                        </div>
                        <div>+237 698 615 740 / 678 974 567</div>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Link to=""><FaFacebook size={25} className='text-white'/></Link>
                            <Link to=""><FaInstagram size={25} className='text-white '/></Link>
                            <Link to=""><FaLinkedinIn size={25} className='text-white '/></Link>
                            
                        </div>
                    </div>
                <div className='flex flex-col gap-5 pt-10'>
                    <div className='font-bold border-b-[0.1px] border-white border-opacity-20 py-2'>Nos livres</div>
                    <div className='flex flex-col gap-3'>
                        {
                            lien.map((item) => {
                                return (
                                    <Link key={item.id} to={item.link} className=' text-capitalize'>{item.text}</Link>
                                    )                
                                })
                            }
                </div>
            </div>
                    <div  className='flex flex-col gap-5 pt-10'>
        <div className='font-bold border-b-[0.1px] border-white border-opacity-20  py-2'>La maison</div>
        <div className='flex flex-col gap-3'>
            {
                liens.map((item) => {
                    return (
                        <Link key={item.id} to={item.link} className=' text-capitalize'>{item.text}</Link>
                                    )                
                                })
                            }
    </div>
                    </div> 
                </div> 
                <div  className='h-[10%] md:flex justify-between pt-3'>
      <div>  
                   Finex 2024 | Tous droits réservés
                   </div >
                   <div  className=' flex gap-4'>
<span>Confidentialité</span>
<span>Conditions générales</span>
                   </div >  
                </div>
            </div> 
        </div> 
    ) 
}

export default Footer
