import React from 'react'
import header from "../images/header.png"

const Header: React.FC = () => {
  return (
    <div className='w-full md:h-[533px]  h-[407px] relative'>
      <img src={header} alt="" className='h-full w-full object-cover' />
      {/* Superposition noire */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenu du header */}
      <div className="w-full absolute inset-0 flex items-center justify-center text-white container">
        <h1 className="texth1  text-center font-bold">Bienvenue dans l'Univers du Livre</h1>
      </div>
    </div>
  )
}

export default Header;
