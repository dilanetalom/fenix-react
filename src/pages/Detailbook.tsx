import React, { useEffect, useState } from 'react'
import Layouts from '../partials/Layouts'
import choice1 from "../images/agenda.png"
import Newsletter from '../section/NewsletterSection'
import down from "../images/down.png"
import what from "../images/what.png"
import al from "../images/al.png"
import phone from "../images/phone.png"
import date from "../images/date.png"
import person from "../images/person.png"
import physique from "../images/physique.png"
import { Link, useNavigate, useParams } from 'react-router-dom'
import Paiement from '../components/Paiement'
import Downloadmodal from '../components/Modaldownload'
import axios from 'axios'
import { API_URL, API_URLE } from '../components/Url'
import LoadingModal from '../section/LoadingModal'

// import { Book } from '../section/TypebookSection'



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

export interface Book {
    id?: number; // Optionnel pour un nouvel livre
    title: string;
    description: string;
    category: string;
    language: string;
    image: File | null; // Pour gérer les fichiers d'image
    status: string;
    niveau: string;
    pub_date: string;
    price_n: string;
    price_p: string;
    user_id: string;
    author_id: string;
    author: Author; // Détails de l'auteur
}



const Detailbook: React.FC = () => {


    useEffect(() => {
        window.scrollTo(0, 0); // Fait défiler vers le haut de la page
    }, []); //
    
    const [text, setText] = useState("detail")
    const [texts, setTexts] = useState("meme")
    const navigate = useNavigate();

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

    // ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpens, setIsModalOpens] = useState(false);


    const { id } = useParams();

    const [books, setBooks] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [allbooks, setAllBooks] = useState<Book[]>([]);
    const [samecollection, setSamecollection] = useState<Book[]>([]);
    const [sameauthor, setSameauthor] = useState<Book[]>([]);


    // Récupérer les détails du livre
    useEffect(() => {
        const fetchBookDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${API_URL}/getbybook/${id}`);
                setBooks(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération du livre :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);


    // Récupérer tous les livres
    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get(`${API_URL}/getbook`);
                setAllBooks(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des livres:', error);
            }
        };

        getBooks();
    }, []);

    // Filtrer les livres similaires
    useEffect(() => {
        if (books && allbooks.length > 0) {
            const currentBook = allbooks.find(b => b.id === books.id);
            if (currentBook) {
                const filteredByCollection = allbooks.filter(b => b.status === currentBook.status && b.id !== currentBook.id);
                setSamecollection(filteredByCollection);
                const filteredByAuthor = allbooks.filter(b => b.author_id === currentBook.author_id && b.id !== currentBook.id);
                setSameauthor(filteredByAuthor);
            }
        }
    }, [books, allbooks]);

    if (loading) {
        return <div><LoadingModal /></div>;
    }

    if (!books) {
        return <div>Aucun livre trouvé.</div>;
    }

    const handleWhatsAppClick = () => {
        const message = `Bonjour! Je suis intéressé par le livre "${books.title}". Prix numerique: ${books.price_n}. Prix physique: ${books.price_p}. Description: ${books.description}.`;
        const whatsappNumber = '+237 690841749'; // Remplacez par le numéro WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank'); // Ouvre le lien dans un nouvel onglet
    };

    // const [selectedCategory, setSelectedCategory] = useState('');

    // const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedCategory(event.target.value);
    // };
    // const isButtonDisabled = selectedCategory.trim() === '';




    // doawnload book



    

    return (
        <>
            <Layouts>
           
                <Paiement isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


                <div className='lg:h-[608px] h-auto  bg-yellow-100 w-full'>
                    <div className='w-full h-full container lg:py-10 py-36 flex lg:flex-row flex-reverse-col  mx-auto  justify-center gap-10'>
                        <div className='h-[420px] w-[292px] md:block hidden'>
                            <img src={`${API_URLE}/images/books/${books.image}`}

                                alt="" className='h-full w-full object-cover object-center' />
                        </div>
                        <div className='space-y-[15px] '>
                            <div className='px-[5px] py-[1px] yellowbackcolor inline-block rounded-full '>{books.status}</div>
                            <h1 className='texth1'>{books.title}</h1>
                            <div className='flex lg:flex-row   text-[16px] gap-3'>


                                <div className='border border-gray-600  border-opacity-45 lg:w-[252px] h-[37px] w-[177px] text-[11px]  flex justify-between'>
                                    <div className='flex items-center md:gap-2 px-2'>
                                        <img src={person} alt="" className='lg:w-[25px] lg:h-[25px] w-[15px] h-[15px]' />
                                        <span className='p-2 md:text-[13px]'>
                                            Auteur</span>
                                    </div>
                                    {/* <span className='border-l border-gray-600 border-opacity-45 w-1/2  font-bold p-2 flex items-center md:text-[13px]'>{books.author.name}</span> */}
                                </div>


                                <div className='border border-gray-600 border-opacity-45 lg:w-[252px] w-[177px] h-[37px] flex justify-between text-[13px]'>
                                    <div className='flex items-center md:gap-2 px-2'>
                                        <img src={al} alt="" className='lg:w-[25px] lg:h-[25px] w-[15px] h-[15px]' />
                                        <span className='p-2'>
                                            Langue</span>
                                    </div>

                                    <span className='border-l border-gray-600 border-opacity-45 font-bold p-2 flex items-center md:text-[13px]'>{books.language}</span>
                                </div>


                            </div>
                            <div className='flex  md:w-[350px] w-[276px] h-[37px] md:text-[16px] text-[13px] mt-8 border border-gray-600 border-opacity-45'>

                                <div className='flex items-center gap-2 px-2'>
                                    <img src={date} alt="" />
                                    <span className='p-2'>
                                        Date de publication</span>
                                </div>


                                <div className='border-l border-gray-600 border-opacity-45 p-2 font-bold flex items-center'>{books.pub_date}</div>
                            </div>
                            <p className='text-[13px] font-bold'>Commander selon votre choix de format</p>
                            <div className='lg:h-[93px] w-full flex lg:flex-row flex-col   md:gap-10 gap-5'>
                                <div className='w-full h-full flex flex-col gap-2'>
                                    <div className='flex items-center gap-2 '>
                                        <input 
                                        type="radio" 
                                        value='physique'
                                        className='w-6 h-6 cursor-pointer' id='phy' name='cat' />
                                        <label htmlFor='phy' className='flex text-[16px] cursor-pointer'>
                                            <div className='border border-gray-600 yellowbackcolor  w-[252px] flex justify-between'>
                                                <div className='flex items-center gap-2 px-2'>
                                                    <img src={physique} alt="" />
                                                    <span className='p-2'>Physique</span>
                                                </div>
                                                <span className='border-l border-gray-600  font-bold p-2'>{books.price_p} fcfa</span>
                                            </div>

                                        </label>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <input
                                         type="radio" 
                                         value='numerique'
                                         className='w-6 h-6 cursor-pointer' id='cat' name='cat' />
                                        <div className='flex text-[16px] text-white cursor-' >
                                            <label htmlFor='cat' className=' cursor-pointer border border-gray-600 bg-[#808080] w-[252px] flex justify-between'>
                                                <div className='flex items-center gap-2 px-2'>
                                                    <img src={phone} alt="" />
                                                    <span className='p-2'>Numerique</span>
                                                </div>

                                                <span className='border-l border-gray-600  font-bold p-2'>{books.price_n} fcfa</span>
                                            </label>

                                        </div>
                                    </div>


                                </div>
                                <div className='md:w-1/2 h-full w-full'>
                                    <button onClick={() => setIsModalOpens(true)} className='font-bold md:w-[250px] w-full lg:h-full h-[93px] border border-black px-[12px] py-[10px] flex items-center justify-center gap-2'>
                                        <span>   Télécharger fiche détail</span>
                                        <span>
                                            <img src={down} alt="" />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className='flex lg:flex-row flex-col lg:justify-between  gap-9 text-white'>
                                <div className='flex w-full ' onClick={handleWhatsAppClick} >
                                    <button className='md:w-[245px] w-[321.51px] h-[42px] bg-[#29A71A] font-bold' >Commande via Whatsapp</button>
                                    <button className='h-[42px] border border-[#29A71A] w-[42px] flex justify-center items-center bg-white'>
                                        <img src={what} alt="" />
                                    </button>
                                </div>
                                <button onClick={() => setIsModalOpen(true)} className='md:w-full  px-[12px] py-[10px] h-[42px] graybackcolor font-bold'>Acheter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto container py-24 flex flex-col mx-auto'>
                    <div className='w-full border-b border-gray-400 flex gap-3 '>
                        <Link className={` ${text === 'description' ? 'border-b-2 border-yellow-500' : ''} `} onClick={() => setText("description")} to="">Description</Link>
                        <Link className={` ${text === 'detail' ? 'border-b-2 border-yellow-500' : ''} outline-none`} onClick={() => setText("detail")} to="">Détails</Link>
                    </div>
                    {
                        text === 'description' ?
                            <div className="w-full py-10 ">
                                <p>
                                  {books.description}
                                </p>
                            </div> :


                            <div className="w-full py-10 ">
                                <p>                      Vous ne la connaissez pas, pourtant elle a tenu le
                                    monde entre ses mains. Au lendemain de la Première Guerre mondiale,
                                    Gertrude Bell a dessiné les frontières de l'Orient, dans ce désert
                                    sauvage où tout a commencé : le pays entre deux fleuves, le Tigre et
                                    l'Euphrate.</p>
                                <p>
                                    Aventurière, archéologue, espionne, parlant l'arabe et
                                    le persan, elle fut la première femme puissante de l'Empire britannique,
                                    mais aussi une héroïne tragique. Idéaliste comme son ami et frère d'âme
                                    Lawrence d'Arabie. Impérialiste et courageuse comme le jeune Winston
                                    Churchill. Enfant aimée et incomprise d'une riche famille victorienne.
                                    Amoureuse éperdue. Et une énigme pour nous : celle des femmes que l'Histoire a effacées.  Olivier Guez lui rend sa gloire et nous offre une épopée flamboyante : de la découverte de gigantesques gisements pétroliers aux jeux de pouvoir cruels entre Britanniques, Français et Allemands, des négociations sous les tentes bédouines aux sables de Bagdad où se perdent nos rêves.Le roman de Gertrude Bell dessine la vaste fresque de la première mondialisation, quand le plus grand empire de tous les temps s'approprie une contrée mythique et maudite, terre d'Abraham,
                                    du déluge et de Babel, tombeau d'Alexandre le Grand : la Mésopotamie.
                                </p>
                            </div>
                    }

                </div>

                <div className='w-full h-auto  py-16 yellowbackcolor '>
                    <div className='container w-full h-full flex lg:flex-row gap-10 lg:gap-0 flex-col justify-between items-center  mx-auto'>
                        <div className='flex flex-col gap-5  lg:items-start'>
                            <h2 className='texth2 font-bold'>Rentrée littéraire 2024</h2>
                            <p className='text-[13px]'>Découvrez les 12 titres de la Rentrée littéraire Finex</p>
                            <button onClick={() => navigate("/menubook")} className='w-[222px] h-[42px] px-[12px] py-[10px] rounded-[5px] border border-black'>JE VEUX DECOUVRIR</button>
                        </div>
                        <div className='lg:w-[467px] w-full h-[269px]'>
                            <img src={choice1} alt="" className='h-full w-full object-cover object-center' />
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto container flex flex-col  mx-auto py-10 bg-white'>
                    <h2 className='texth2 font-bold text-center'>D’autre livres</h2>
                    <div className='w-full border-b border-gray-400 flex gap-3  justify-center lg:text-[16px] text-[13px]'>
                        <Link className={` py-5 ${texts === 'meme' ? 'border-b-2 border-yellow-500' : ''} `} onClick={() => setTexts("meme")} to="">Du même auteur</Link>
                        <Link className={`py-5 ${texts === 'collection' ? 'border-b-2 border-yellow-500' : ''} `} onClick={() => setTexts("collection")} to="">De la même collection</Link>
                    </div>
                    <div className='w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  mx-auto gap-4 py-10'>
                        {
                            texts === 'meme' ?
                                sameauthor.map((item) => {
                                    return (
                                        <div className='lg:h-[455px]  relative  space-y-3 ' key={item.id}>
                                            <div className='py-1 px-2 text-[13px] yellowbackcolor inline-block rounded-full'>
                                                {item.status}
                                            </div>
                                            <div className='lg:h-[302px]  w-full'>
                                                <img src={`${API_URLE}/images/books/${item.image}`}
                                                    alt="" className='w-full h-full object-cover object-center' />
                                            </div>
                                            <p className='text-[16px] font-bold'>
                                                {item.title}
                                            </p>
                                            <p className='text-[11px]'>
                                                {item.description}
                                            </p>
                                            <Link to="" className='text-[11px] orangecolor font-bold'>Voir plus</Link>
                                        </div>
                                    )
                                }) :

                                samecollection.map((item) => {
                                    return (
                                        <div className='lg:h-[455px]  relative  space-y-3 ' key={item.id}>
                                            <div className='py-1 px-2 text-[13px] yellowbackcolor inline-block rounded-full'>
                                                {item.status}
                                            </div>
                                            <div className='lg:h-[302px]  w-full'>
                                                <img src={`${API_URLE}/images/books/${item.image}`}

                                                    alt=""
                                                    className='w-full h-full object-cover object-center' />
                                            </div>
                                            <p className='text-[16px] font-bold'>
                                                {item.title}
                                            </p>
                                            <p className='text-[11px]'>
                                                {item.description}
                                            </p>
                                            <Link to="" className='text-[11px] orangecolor font-bold'>Voir plus</Link>
                                        </div>
                                    )
                                })
                        }

                    </div>
                </div>
                <Downloadmodal isOpen={isModalOpens} onCloses={() => setIsModalOpens(false)} 
                    currentBooks={books}
                    />
                <Newsletter />
            </Layouts>
        </>
    )
}

export default Detailbook
