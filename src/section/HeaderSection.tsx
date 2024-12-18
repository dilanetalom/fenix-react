import React, { useEffect } from 'react'
import header from "../images/header.png"
import AOS from 'aos'; // Assurez-vous d'importer AOS
import 'aos/dist/aos.css';

const Header: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: 'ease-in-out', // Type d'accélération
    });
  }, []);
  
  return (
    <div className='w-full md:h-[533px]  h-[407px] relative'>
      <img src={header} alt="" className='h-full w-full object-cover' />
      {/* Superposition noire */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenu du header */}
      <div className="w-full absolute inset-0 flex items-center justify-center text-white container">
        <h1 className="texth1  text-center font-bold"
           data-aos="fade-down"
        >Bienvenue dans l'Univers du Livre</h1>
      </div>
    </div>
  )
}

export default Header;
