import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layouts from '../partials/Layouts'
import bookmenu from "../images/bookmenu.png"
import Filterbook from '../section/FilterbookSection'
import {  useNavigate } from 'react-router-dom'
import Newsletter from '../section/NewsletterSection'
import WishesComponent from '../components/WishesComponent'

const Bookmenu: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Fait défiler vers le haut de la page
    }, []); //
  
    const navigate = useNavigate()


    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation
            easing: 'ease-in-out', // Type d'accélération
        });
    }, []);


    return (
        <>
            <Layouts>
                <div>
                    <div className='w-full h-[372px] relative'
                    >
                        <img src={bookmenu} alt="" className='h-full w-full object-cover' />
                        {/* Superposition noire */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Contenu du header */}
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            <h1 className="texth1 font-bold"
                            data-aos="fade-up" 
                            >Découvrez Nos Œuvres</h1>
                        </div>
                    </div>
                </div>
                <Filterbook/>
            
               <WishesComponent 
               handleFunction={()=>navigate("/download")}
               title="Souhaiterais-tu publier ton livre chez nous ?" textbuton='OUI JE VEUX PUBLIER MON LIVRE'/>
                <Newsletter/>
            </Layouts>
        </>
    )
}

export default Bookmenu