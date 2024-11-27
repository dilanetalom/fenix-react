import React, { useState } from 'react'
import person3 from '../images/new1.png'
import Cardnews from '../components/CardnewsComponent'
import right from "../images/right.png"
import { useNavigate } from 'react-router-dom'


const News: React.FC = () => {
    const navigate = useNavigate();
    const news = [
        {
            id: 1,
            imagecard: person3,     // Type pour l'image
            title: "03/10/2024",         // Type pour le titre
            description: "Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits",
            butontext: "EN SAVOIR PLUS"

        },
        {
            id: 2,
            imagecard: person3,     // Type pour l'image
            title: "03/10/2024",         // Type pour le titre
            description: "Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits",   // Type pour la description
            butontext: "EN SAVOIR PLUS"

        },
        {
            id: 3,
            imagecard: person3,     // Type pour l'image
            title: "03/10/2024",         // Type pour le titre
            description: "Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits",   // Type pour la description
            butontext: "EN SAVOIR PLUS"

        },
        {
            id: 4,
            imagecard: person3,     // Type pour l'image
            title: "09/10/2024",         // Type pour le titre
            description: "Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits",
            butontext: "EN SAVOIR PLUS"

        },
        {
            id: 5,
            imagecard: person3,     // Type pour l'image
            title: "10/10/2024",         // Type pour le titre
            description: "Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits",   // Type pour la description
            butontext: "EN SAVOIR PLUS"

        },
        {
            id: 6,
            imagecard: person3,     // Type pour l'image
            title: "14/10/2024",         // Type pour le titre
            description: "Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits",   // Type pour la description
            butontext: "EN SAVOIR PLUS"

        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Nombre d'articles par page

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(news.length / itemsPerPage);

    // Calculer les articles à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

    // Gérer le changement de page
    const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='w-full h-auto opacitybackcolor py-20'>
            <div className='container py-10 flex flex-col mx-auto gap-10'>
                <h2 className='texth2 font-bold'>Actualités</h2>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5'>
                {currentNews.map((item) => (
                    <Cardnews 
                        key={item.id}
                        imagecard={item.imagecard}
                        title={item.title}
                        description={item.description}
                        butontext={item.butontext}
                    />
                ))}
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
                
                <div className='flex justify-center w-full'>
                    <button onClick={() => navigate("/news")} className='px-[12px] py-[10px] border-[1px] border-[007F99] transition-all duration-300 ease-out hover:bg-[#007f99] hover:text-white  rounded-[5px] graycolor flex items-center'>
                        <img src={right} alt="" />
                        <span>DÉCOUVRIR NOS ACTUALITÉS</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News;