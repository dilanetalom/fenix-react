import React, { useState } from 'react'
import Layouts from '../partials/Layouts'
import bookmenu from "../images/bookmenu.png"
import book1 from "../images/book1.png"
import Filterbook from '../section/FilterbookSection'
import { Link, useNavigate } from 'react-router-dom'
import Newsletter from '../section/NewsletterSection'
import WishesComponent from '../components/WishesComponent'

const Bookmenu: React.FC = () => {

    const book = [
        {
            id: 1,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 2,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 3,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 4,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 5,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 6,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 7,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 8,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 9,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 10,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 11,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 12,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 13,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 14,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id: 15,
            first: "NOUVEAUTE",
            image: book1,
            title: "JACARANDA",
            description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },

    ]

    const navigate = useNavigate()


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Nombre d'articles par page

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(book.length / itemsPerPage);

    // Calculer les articles à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = book.slice(startIndex, startIndex + itemsPerPage);

    // Gérer le changement de page
    const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <Layouts>
                <div>
                    <div className='w-full h-[372px] relative'>
                        <img src={bookmenu} alt="" className='h-full w-full object-cover' />
                        {/* Superposition noire */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Contenu du header */}
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            <h1 className="texth1 font-bold">Découvrez Nos Œuvres</h1>
                        </div>
                    </div>
                </div>
                <Filterbook/>
                <div className=' opacitybackcolor  pb-20'>
                <div className='w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto  gap-4 py-10 container'>
                        {
                            currentNews.map((item) => {
                                return (
                                    <div className='h-[455px]  relative  space-y-3 ' key={item.id}>
                                       
                                        <div className='h-[302px] w-full'>
                                            <img src={item.image} alt="" className='w-full h-full object-cover object-center' />
                                        </div>
                                        <p className='text-[16px] font-bold'>
                                            {item.title}
                                        </p>
                                        <p className='text-[11px]'>
                                            {item.description}
                                        </p>
                                        <Link to="/detailbook" className='text-[11px] orangecolor font-bold'>Voir plus</Link>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='flex w-full justify-center mt-5'>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`mx-2 px-4 py-2 border rounded ${currentPage === index + 1 ? 'graybackcolor text-white' : 'bg-white graycolor'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
               <WishesComponent 
               handleFunction={()=>navigate("/download")}
               title="Souhaiterais-tu publier ton livre chez nous ?" textbuton='OUI JE VEUX PUBLIER MON LIVRE'/>
                <Newsletter/>
            </Layouts>
        </>
    )
}

export default Bookmenu