import React, { useEffect, useState } from 'react'
import Layouts from '../partials/Layouts'
import Newsletter from '../section/NewsletterSection'
import HeadersecondComponent from '../components/HeadersecondComponent'
import ModalNews from '../components/NewmodalComponent'
import { Link } from 'react-router-dom'
import InputComponent from '../components/InputComponent'
import axios from 'axios'
import { API_URL, API_URLE } from '../components/Url'


export interface NewsData {
    id: number;
    name: string;
    description: string;
    newsdate: string; // Format de date approprié
    image: File | null;
    type: string;
    frome: string;
    user_id: string; // ID de l'utilisateur
}
const Newspage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const book = [
    //     {
    //         id: 1,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 2,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 3,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 4,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 5,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 6,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 7,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 8,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },
    //     {
    //         id: 9,
    //         first: "NOUVEAUTE",
    //         image: book1,
    //         title: "JACARANDA",
    //         description: " Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
    //     },

    // ]
    const[news, setNews]=useState<NewsData[]>([]);

    
    const getBooks = async () => {
        try {
            const response = await axios.get(`${API_URL}/getnews`);
            // Filtrer les actualités de type "interne"
            // const filteredNews = response.data.filter((item:any) => item.frome === "interne");
            setNews(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des actualités:', error);
            throw error;
        }
    };

    useEffect(() => {
        getBooks();
    }, []);




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

    const etude = [
        { label: 'Niveau d’etude', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];

    const [selectedDate, setSelectedDate] = useState('');

    const handleChange = (event:any) => {
        setSelectedDate(event.target.value);
    };

    const[newst, setNewst]=useState<NewsData|null>(null);
    const modalopens = (newt:NewsData)=>{
        setNewst(newt)
        setIsModalOpen(true)
    }

    return (
        <>
            <Layouts>
                <ModalNews isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} news={newst} />
                <HeadersecondComponent title='  Découvrez
                                nos actualités'/>
                <div className='py-20 w-full h-auto opacitybackcolor flex flex-col gap-28 '>
                    <div className='container flex lg:flex-row flex-col justify-center mx-auto'>
                        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 lg:w-[801px] lg:h-[61px]  border-gray-500 rounded-[10px] '>
                            <InputComponent
                                options={etude}
                                first='format'
                            />

                            <div className="flex flex-col ">
                                
                                <input
                                    type="date"
                                    id="date"
                                    value={selectedDate}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-14"
                                />
                                {selectedDate && (
                                    <p className="mt-2 text-gray-500">
                                        Selected Date: {new Date(selectedDate).toLocaleDateString()}
                                    </p>
                                )}
                            </div>

                            <InputComponent
                                options={etude}
                                first='format'
                            />
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto container gap-5'>
                        {
                            currentNews.map((item) => {
                                return (
                                    <Link key={item.id}  to="" className=' md:h-[416px] h-[500px] shadow-xl bg-white rounded-[5px]' onClick={()=>modalopens(item)}>
                                        <div className='h-1/2 w-full'>
                                            <img src={`${API_URLE}/images/news/${item.image}`}
                                            alt="" className='w-full h-full object-cover object-center' />
                                        </div>
                                        <div className='h-1/2 p-6 space-y-4'>
                                            <div className='py-1 px-2 text-[13px] yellowbackcolor inline-block rounded-full'>
                                                {item.newsdate}
                                            </div>
                                            <p className='text-[13px]'>
                                            {item.description}
                                            </p>
                                            <button className='w-[117px] rounded-[5px] p-[10px] yellowbackcolor font-bold text-[11px]'>EN SAVOIR PLUS</button>
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
                <div className='w-full h-auto bg-white '>
                    <div className='h-full w-full container  flex justify-center items-center mx-auto py-24'>
                        <div className='lg:w-[613px] lg:h-[182px] rounded-[10px] orangebackcolor md:p-10 p-5 flex lg:flex-row flex-col gap-5 text-white'>
                            <div className='lg:w-1/2 h-full'>
                                <p className='text-[23px] font-bold'>Abonnez-vous à la newsletter</p>
                                <p className='text-[13px] '>Recevez nos dernières actualités directement dans votre boîte mail</p>
                            </div>
                            <div className='lg:w-1/2 h-full relative flex items-center '>
                                <input type="text" placeholder='Votre e-mail' className='w-full h-[45px] rounded-full orangebackcolor border-[1px] md:text-[13px] text-[11px] outline-none text-white px-3 placeholder-white' />
                                <button className='absolute bg-black right-2 lg:top-8 top-1 h-[36px] w-[89px] rounded-full md:text-[13px] text-[11px]'>ENVOYEZ</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </Layouts>
        </>
    )
}

export default Newspage