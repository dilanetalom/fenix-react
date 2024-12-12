import React, { useEffect, useState } from 'react'
import Layouts from '../partials/Layouts'
import Newsletter from '../section/NewsletterSection'
import WishesComponent from '../components/WishesComponent'
import HeadersecondComponent from '../components/HeadersecondComponent'
// import author1 from "../images/author1.png"
import flech2 from "../images/flech2.png"
import book1 from "../images/book1.png"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { API_URL, API_URLE } from '../components/Url'
import axios from 'axios'
import LoadingModal from '../section/LoadingModal'
import { Book } from './Detailbook'


interface Author {
    id: number;
    name: string;
    gender: string;
    country: string;
    imageauthor: File | null; // ou string si vous voulez stocker l'URL de l'image
    description: string;
    date_nais: string; // Format de date, par exemple "YYYY-MM-DD"
    email: string;
    books:Book;
}

const DetailAuthor: React.FC = () => {
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


    // ]
    const typecards = [
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


    ]

    const [author, setAuthor]= useState<Author | null>(null)   
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${API_URL}/getbyauthor/${id}`);
                setAuthor(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors de la récupération du livre :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);



    const navigate = useNavigate()
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Nombre d'articles par page

    useEffect(() => {
        if (author && Array.isArray(author.books)) {
            const calculatedTotalPages = Math.ceil(author.books.length / itemsPerPage);
            setTotalPages(calculatedTotalPages);
        } else {
            console.log('Auteur non trouvé ou aucun livre disponible.');
        }
    }, [author, itemsPerPage]); // Dependency array to re-run effect when author changes

    // const currentBooks = author && Array.isArray(author.books)
    //     ? author.books.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    //     : [];

    // Handle page change
    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };




    if (loading) {
        return <div><LoadingModal /></div>;
    }
    
    if (!author) {
        return <div>Auteur non trouvé.</div>;
    }

    return (
        <>
            <Layouts>
                <HeadersecondComponent title={author.name}/>


                <div className='opacitybackcolor  w-full h-auto'>
                    
                        <div className=' w-full h-auto flex justify-center container mx-auto'>
                            <div className='w-full lg:h-[348px] h-full flex xl:flex-row flex-col  justify-between  mx-auto gap-10 '>
                                <div className='lg:w-[487px] lg:h-[72px] h-auto pt-10 text-[16px]'>
                                {author.description}
                                </div>
                                <div className='h-full md:w-[292px] transform lg:-translate-y-36 -translate-y-0'>
                                    <img src={`${API_URLE}/images/authors/${author.imageauthor}`}
                                    alt="" className='md:h-[348px] h-[250px] w-full object-cover object-center rounded-md' />
                                </div>
                            </div>
                        </div>
                        
                </div>


                <div className='opacitybackcolor w-full h-auto flex flex-col mx-auto md:px-12 pt-10 md:pt-0 pb-20 '>
                    <div className='w-full container'>
                        <div className=' w-full h-auto '>
                            <h2 className='texth2 font-bold'>Bibliographie</h2>
                        </div>
                        <div className='w-full grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 md:gap-4 gap-5 py-10 mx-auto '>
                            {
                                author && Array.isArray(author.books)?
                                author.books.map((item:any) => {
                                    return (
                                        <div className='md:h-[455px]  relative  space-y-3 ' key={item.id}>

                                            <div className='md:h-[302px] w-full'>
                                                <img
                                                src={`${API_URLE}/images/books/${item.image}`}
                                                  alt="" className='w-full h-full object-cover object-center' />
                                            </div>
                                            <p className='text-[16px] font-bold'>
                                                {item.title}
                                            </p>
                                            <p className='text-[11px]'>
                                                {item.description}
                                            </p>
                                            <Link to="" className='text-[11px] orangecolor font-bold flex items-center '>
                                                <span>Voir plus</span>
                                                <img src={flech2} alt="" /></Link>
                                        </div>
                                    )
                                }):null
                            }
                        </div>

                        <div className='flex w-full justify-center mt-5'>
                 
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`mx-2 px-4 py-2 border rounded ${currentPage === index + 1 ? 'graybackcolor text-white' : 'bg-white graycolor'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>



                <div className='bg-white w-full h-auto pt-20 md:px-12 container flex flex-col mx-auto'>
                    <div className=' w-full h-auto'>
                        <h2 className='texth2 font-bold'>Événements</h2>
                    </div>
                    <div className='w-full h-auto py-20  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-5 mx-auto'>
                        {
                            typecards.map((item) => {
                                return (
                                    <div key={item.id} className=' md:h-[208px] border-2 border-gray-500 p-6 shadow-md border-opacity-50 space-y-6 transition-all duration-300 ease-out hover:bg-[#007f99] hover:text-white cursor-pointer'>
                                        <div className='px-[5px] py-[1px] yellowbackcolor inline-block rounded-full '>03/10/2024</div>
                                        <div className='text-[13px]'>
                                            <b>  Alexandra Schwartzbrod invitée des rencontres Littérature, enjeux contemporains </b>
                                            16h00 au Théâtre du Vieux-Colombier / Comédie-Française (Paris)
                                        </div>
                                        <Link to='' className='text-[11px] text-blue-600'>

                                            <span>Voir plus</span>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <WishesComponent
                    title='Souhaiterais-tu devenir aussi auteur chez nous ?'
                    textbuton='OUI JE VEUX DEVENIR AUTEUR'
                    handleFunction={() => navigate("/download")}
                />
                <Newsletter />
            </Layouts>
        </>
    )
}

export default DetailAuthor