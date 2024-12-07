import React, { useState } from 'react'
import InputComponent from '../components/InputComponent';
import search from "../images/search.png"
import book1 from "../images/book1.png"
import { Link } from 'react-router-dom';

const Filterbook: React.FC = () => {

    const auteur = [
        // { label: 'auteur', value: '' },
        { label: 'Engelbert Mveng', value: '1' },
        { label: 'Chinua Achebe', value: '2' },
        { label: 'Douala Manga Bell', value: '3' },
        { label: 'Gustave Flaubert', value: '4' },
        { label: 'Wole Soyinka', value: '5' },
        { label: 'Léopold Sédar Senghor', value: '6' },
        { label: 'Léon Tolstoï', value: '7' },
        { label: 'Charles Dickens', value: '8' },
        { label: 'Virginia Woolf', value: '9' },
        { label: 'James Joyce', value: '10' },
    ];

    const format = [
        // { label: 'format', value: '' },
        { label: 'Physique', value: '1' },
        { label: 'Numérique', value: '2' }
    ];
    const dispo = [
        // { label: 'Disponibilité', value: '' },
        { label: 'Nouveauté', value: '1' },
        { label: 'A paraitre', value: '2' },
        { label: 'Meilleure vente', value: '3' },
        { label: 'En promotion', value: '4' }
    ];
    const catalogue = [
        // { label: 'Catalogue', value: '1' },
        { label: 'Développement personnel', value: '1' },
        { label: 'Histoire et culture', value: '2' },
        { label: 'Science et technologie', value: '3' },
        { label: 'Arts et loisirs', value: '4' },
        { label: 'Education et Pédagogie', value: '5' }
    ];
    
    const Langue = [
        // { label: 'Langue', value: '1' },
        { label: 'Francais', value: '1' },
        { label: 'Anglais', value: '2' },
        { label: 'Espognol', value: '3' },
        { label: 'Allemand', value: '4' }
    ];


    const etude = [
        // { label: 'Niveau d’etude', value: '' },
        { label: 'Elève', value: '1' },
        { label: 'Etudiant', value: '2' },
        { label: 'Professionnel', value: '3' },
        { label: 'Chercheur', value: '4' },
        { label: 'Lecteur occasionnel', value: '5' },
        { label: 'Lecteur passionné', value: '6' },
    ];


    
    const dates = [
        // { label: 'Niveau d’etude', value: '' },
        { label: 'Dernières parutions', value: '1' },
        { label: 'Cette année', value: '2' },
        { label: 'Les 5 dernières années', value: '3' },
        { label: 'Classiques', value: '4' },
        { label: 'À paraître', value: '5' },
    ];




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
        <div className=' w-full h-full flex flex-col mx-auto'>
            <div className='w-full h-full container flex mx-auto'>
            <div className="w-full lg:h-[413px]  h-auto graybackcolor transform xl:-translate-y-28 -translate-y-36 pt-10 pb-10 xl:pb-0 xl:px-20 md:px-10 px-5 flex flex-col gap-6">
            <div className='relative'>
                        <input type="text" className='w-full px-3 h-[58px] rounded-[5px]' placeholder='Recherche titre, auteur' />
                        <img src={search} alt="" className='absolute right-3 top-3 cursor-pointer' />
                    </div>
                <div className='grid xl:grid-cols-3  md:grid-cols-3  grid-cols-1 gap-3 lg:px-10'>

                 <InputComponent
                 options={auteur}
                 first='auteur'
                 />
                 <InputComponent
                 options={format}
                 first='format'
                 />
                 <InputComponent
                 options={dispo}
                 first='Disponibilite'
                 />
                 <InputComponent
                 options={catalogue}
                 first='catalogue'
                 />
                 <InputComponent
                 options={Langue}
                 first='Langue'
                 />
                <InputComponent
                 options={etude}
                 first='Niveau'
                 />
                 <InputComponent
                 options={dates}
                 first='Date de publication'
                 />


                    

                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                    <button className='px-[12px] py-[10px] border border-white rounded-[5px] font-bold text-white'>Réinitialiser</button>
                    <button className='px-[12px] py-[10px] orangebackcolor rounded-[5px] font-bold text-white'>Rechercher</button>
                </div>
            </div>
            </div>
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
                    <div className='flex w-full justify-center lg:mt-5'>
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
    )
}

export default Filterbook