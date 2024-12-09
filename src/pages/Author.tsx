import React, { useEffect, useState } from 'react'
import Layouts from '../partials/Layouts'
import Newsletter from '../section/NewsletterSection'
import WishesComponent from '../components/WishesComponent'
// import author1 from "../images/author1.png"
import fleche1 from "../images/fleche2.png"
import { Link, useNavigate } from 'react-router-dom'

import HeadersecondComponent from '../components/HeadersecondComponent'
import InputComponent from '../components/InputComponent'
import { API_URL, API_URLE } from '../components/Url'
import axios from 'axios'
// import axios from 'axios'

interface Author {
    id: number;
    name: string;
    gender: string;
    country: string;
    imageauthor: File | null; // ou string si vous voulez stocker l'URL de l'image
    description: string;
    date_nais: string; // Format de date, par exemple "YYYY-MM-DD"
    email: string;
}
const Author: React.FC = () => {
const navigate = useNavigate();
    // const typecards = [
    //     {
    //         id: 1,
    //         image: author1,
    //         text: "Radio"
    //     },
    //     {
    //         id: 2,
    //         image: author1,
    //         text: "Télévision"
    //     },
    //     {
    //         id: 3,
    //         image: author1,
    //         text: "Rencontre"
    //     },
    //     {
    //         id: 4,
    //         image: author1,
    //         text: "Rencontre"
    //     },
    //     {
    //         id: 5,
    //         image: author1,
    //         text: "Rencontre"
    //     },
    //     {
    //         id: 6,
    //         image: author1,
    //         text: "Rencontre"
    //     },
    //     {
    //         id: 7,
    //         image: author1,
    //         text: "Rencontre"
    //     },
    //     {
    //         id: 8,
    //         image: author1,
    //         text: "Rencontre"
    //     },

    // ]
    const goes = () => {
        navigate("/download"); 
    };



    const [allAuthors, setAllAuthors] = useState<Author[]>([]);
    const getauthors = async () => {
           try {
               const response = await axios.get(`${API_URL}/allauthor`,);
               setAllAuthors(response.data);
           } catch (error) {
               console.error('Erreur lors de la récupération des livres:', error);
               throw error;
           }
       };
   
       useEffect(()=>{
        getauthors()
       },[])


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Nombre d'articles par page

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(allAuthors.length / itemsPerPage);

    // Calculer les articles à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = allAuthors.slice(startIndex, startIndex + itemsPerPage);

    // Gérer le changement de page
    const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };

    const alphabetFrancais = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const etude = [
        { label: 'Niveau d’étude', value: '' },
        ...alphabetFrancais.map(lettre => ({ label: lettre, value: lettre }))
      ];


      const truncateDescription = (description: string, maxLength: number): string => {
        return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
    };
     


    return (
        <>
            <Layouts>
             
                <HeadersecondComponent title='  Découvrez
                                nos auteurs'/>
                <div className='opacitybackcolor w-full h-auto'>
                    <div className='container w-full h-auto py-20 flex flex-col mx-auto gap-20'>
                        <div className='lg:w-[467px] w-full h-[64px]'>
                            {/* <select name="" id="" className='lg:w-[467px] w-full h-[64px] rounded-[10px] border-[1px]  border-black p-2 outline-none opacitybackcolor'>
                                <option value="">sdskdjksd</option>
                                <option value="">sdskdjksd</option>
                            </select> */}
                            <InputComponent
                             first='auteur'
                             options={etude}
                            />
                        </div>
                        <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto md:gap-6 gap-5'>
                            {
                                currentNews.map((item) => {
                                    return (
                                        <Link key={item.id} to={`/detailauthor/${item.id}`} className=' lg:h-[384px] h-[288px] shadow-md bg-white rounded-[5px]'>
                                            <div className='h-1/2  w-full'>
                                            <img src={`${API_URLE}/images/authors/${item.imageauthor}`}
                                                
                                                alt="" className='w-full h-full object-cover object-center rounded-t-[5px]' />
                                            </div>
                                            <div className='h-1/2  w-full lg:px-5 px-2 lg:py-8 py-3 flex justify-between gap-3 flex-col'>
                                                <p className='font-bold lg:text-[16px] text-[13px]'>{item.name}</p>
                                                <p className='lg:text-[13px] text-[13px]'>{truncateDescription(item.description, 50)}</p>
                                                <Link to={`/detailauthor/${item.id}`} className='lg:text-[13px] text-[11px] font-bold graycolor flex items-center '>
                                                <span>Voir plus</span>
                                                <span>
                                                    <img src={fleche1} alt="" />
                                                </span>
                                                </Link>
                                            </div>
                                        </Link>
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
                </div>
                <WishesComponent title='Souhaiterais-tu partager ton livre avec nous pour devenir aussi auteur chez nous ?'
                    textbuton='OUI JE VEUX PARTAGER MON LIVRE'
                    handleFunction = {goes}
                    />
                <Newsletter />
            </Layouts>
        </>
    )
}

export default Author