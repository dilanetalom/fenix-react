import React, { useState } from 'react'
import logo from '../images/logo.png'
import panier from '../images/panier.png'
import bookicon from '../images/bookicon.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './navbar.css';


const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const lien = [
    {
      id: 1,
      text: "Agenda",
      link: "/agenda"
    },
    {
      id: 2,
      text: "Nos Livres",
      link: "/menubook"
    },
    {
      id: 3,
      text: "Nos Actualités",
      link: "/news"
    },
    {
      id: 4,
      text: "Auteurs",
      link: "/author"
    },
    {
      id: 5,
      text: "Notre maison",
      link: "/about"
    },
    {
      id: 6,
      text: "Notre Association",
      link: "/association"
    },
    {
      id: 7,
      text: "Contact",
      link: "/contact"
    },
  ]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='w-full lg:h-[161px] z-[999] opacitybackcolor fixed'>
      <div className='container w-full pb-3 mx-auto flex flex-col justify-between h-full'>
        <header className='flex flex-row justify-between items-center h-3/5 '>
          <Link to="/">
            <img src={logo} alt="Logo" className='lg:h-[114px] lg:w-[101px] h-[84px] w-[73px]' />
          </Link>
          <div className='flex items-center gap-6'>
            <button onClick={() => navigate("/download")} className='h-[44px] px-5 rounded-md graybackcolor md:flex items-center gap-2 hidden'>
              <span>
                <img src={bookicon} alt="Book Icon" />
              </span>
              <span className='text-[16px] text-white font-[400]'>Publiez Vos Livres</span>
            </button>
            <div className='md:flex gap-2 hidden'>
              <span><FaFacebook size={25} /></span>
              <span><FaInstagram size={25} /></span>
              <span><FaLinkedin size={25} /></span>
            </div>
            <div className='relative'>
              <img src={panier} alt="Panier" className='h-[25px] w-[25px]' />
              <div className='w-[22px] h-[22px] rounded-full orangebackcolor flex items-center justify-center text-white absolute -top-4 -right-2'>0</div>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </header>

        {/* Menu de navigation responsive */}
        <nav className={`flex flex-col md:flex-row items-center mt-2  hidden md:block`}>
          {lien.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`ml-5 text-capitalize ${location.pathname === item.link ? 'orangecolor' : 'text-gray-700'} hover:text-orange-500`}
            >
              {item.text}
            </Link>
          ))}
        </nav>

        {isOpen && (
          <nav
            className={`
              nav-links flex flex-col items-center mt-2 z-999 w-full h-screen md:hidden absolute bg-white
              transition duration-300 ease-in-out pt-8 gap-4
            `}
          >
            <button onClick={toggleNavbar} className="absolute top-4 right-4">
              ✖ {/* Crois pour fermer */}
            </button>
            {lien.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`ml-5 text-capitalize ${location.pathname === item.link ? 'orangecolor' : 'text-gray-700'} hover:text-orange-500`}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}

export default Navbar

