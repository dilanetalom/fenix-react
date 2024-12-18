import React, { useEffect, useState } from 'react'
import mask1 from "../images/mask1.png"
import mask2 from "../images/mask2.png"
import mask3 from "../images/mask3.png"
import search from "../images/search.png"
import InputComponent from '../components/InputComponent'
import { Book } from './TypebookSection'
import axios from 'axios'
import AOS from 'aos'; // Assurez-vous d'importer AOS
import 'aos/dist/aos.css'; // Importer le CSS de AOS
import { API_URL } from '../components/Url'

export interface Option {
    label: string;
    value: string;
}

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
const Filter: React.FC = () => {


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
        { label: 'Catalogue', value: '1' },
        { label: 'Développement personnel', value: 'Développement personnel' },
        { label: 'Histoire et culture', value: 'Histoire et culture' },
        { label: 'Science et technologie', value: 'Science et technologie' },
        { label: 'Arts et loisirs', value: 'Arts et loisirs' },
        { label: 'Education et Pédagogie', value: 'Education et Pédagogie' }
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

    const [allbooks, setAllBooks] = useState<Book[]>([]);
    const [authorOptions, setAuthorOptions] = useState<Option[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<string>('');
    const [selectedFormat, setSelectedFormat] = useState<string>('');
    const [selectedDispo, setSelectedDispo] = useState<string>('');
    const [selectedCatalogue, setSelectedCatalogue] = useState<string>('');
    const [selectedLangue, setSelectedLangue] = useState<string>('');
    const [selectedEtude, setSelectedEtude] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');

    // const navigate = useNavigate();


    const filteredBooks = allbooks.filter(book => {
        return (
            (selectedAuthor ? book.author_id.toString() === selectedAuthor : true) &&
            (selectedFormat ? book.price_n === selectedFormat : true) &&
            (selectedDispo ? book.status === selectedDispo : true) &&
            (selectedCatalogue ? book.category === selectedCatalogue : true) &&
            (selectedLangue ? book.language === selectedLangue : true) &&
            (selectedEtude ? book.niveau === selectedEtude : true) &&
            (selectedDate ? book.pub_date === selectedDate : true)
        );
    });


    const getauthors = async () => {
        filteredBooks
        try {
            const response = await axios.get(`${API_URL}/allauthor`);
            const options = response.data.map((author: Author) => ({
                label: author.name,
                value: author.id.toString()
            }));
            setAuthorOptions(options);
        } catch (error) {
            console.error('Erreur lors de la récupération des auteurs:', error);
        }
    };

    useEffect(() => {
        getauthors();
    }, []);


        // Pagination
        // const [currentPage, setCurrentPage] = useState(1);
        // const itemsPerPage = 5;
        // const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
        // const startIndex = (currentPage - 1) * itemsPerPage;
        // const currentNews = filteredBooks.slice(startIndex, startIndex + itemsPerPage);
    
        // const handlePageChange = (pageNumber: number) => {
        //     setCurrentPage(pageNumber);
        // };


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


    
    const resetFilters = () => {
        setSelectedAuthor('');
        setSelectedFormat('');
        setSelectedDispo('');
        setSelectedCatalogue('');
        setSelectedLangue('');
        setSelectedEtude('');
        setSelectedDate('');
    };


    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation
            easing: 'ease-in-out', // Type d'accélération
        });
    }, []);

    return (
        <div className='w-full opacitybackcolor h-auto  py-10'>
            <div className=' w-full container  flex flex-col mx-auto justify-center'>
                <div className="w-full lg:h-[413px] h-auto graybackcolor transform xl:-translate-y-48 -translate-y-40 pt-10 pb-10 xl:pb-0 xl:px-20 md:px-10 px-5 flex flex-col gap-6">
                    <div className='relative'>
                        <input type="text" className='w-full px-3 h-[58px] rounded-[5px]' placeholder='Recherche titre, auteur' />
                        <img src={search} alt="" className='absolute right-3 top-3 cursor-pointer' />
                    </div>

                    <div className='grid xl:grid-cols-3  md:grid-cols-3  grid-cols-1 gap-3 lg:px-10 relative'>

                        <InputComponent
                            options={authorOptions}
                            first='Auteur'
                            onSelect={option => setSelectedAuthor(option ? option.value : '')}
                        />
                        <InputComponent
                            options={format}
                            first='Format'
                            onSelect={option => setSelectedFormat(option ? option.value : '')}
                        />
                        <InputComponent
                            options={dispo}
                            first='Disponibilité'
                            onSelect={option => setSelectedDispo(option ? option.value : '')}
                        />
                        <InputComponent
                            options={catalogue}
                            first='Catalogue'
                            onSelect={option => setSelectedCatalogue(option ? option.value : '')}
                        />
                        <InputComponent
                            options={Langue}
                            first='Langue'
                            onSelect={option => setSelectedLangue(option ? option.value : '')}
                        />
                        <InputComponent
                            options={etude}
                            first='Niveau'
                            onSelect={option => setSelectedEtude(option ? option.value : '')}
                        />
                        <InputComponent
                            options={dates}
                            first='Date de publication'
                            onSelect={option => setSelectedDate(option ? option.value : '')}
                        />



                    </div>
                    <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                        <button className='px-[12px] py-[10px] border border-white rounded-[5px] font-bold text-white' onClick={resetFilters}>Réinitialiser</button>
                        <button className='px-[12px] py-[10px] orangebackcolor rounded-[5px] font-bold text-white'>Rechercher</button>
                    </div>
                </div>



                {/* <div className='opacitybackcolor pb-20'>
                    <div className='w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto gap-4 py-10 '>
                        {currentNews.map((item) => (
                            <div className='h-[455px] relative space-y-3 cursor-pointer' onClick={() => navigate(`/detailbook/${item.id}`)} key={item.id}>
                                <div className='h-[302px] w-full'>
                                    <img src={`${API_URLE}/images/books/${item.image}`} alt="" className='w-full h-full object-cover object-center' />
                                </div>
                                <p className='text-[16px] font-bold'>{item.title}</p>
                                <p className='text-[11px] h-[80px]'>{item.description}</p>
                                <Link to={`detailbook/${item.id}`} className='text-[11px] orangecolor font-bold'>Voir plus</Link>
                            </div>
                        ))}
                    </div>
                    <div className='flex w-full justify-center lg:mt-5 pb-6'>
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
                </div> */}


                <div className='w-full flex flex-col container justify-center items-center gap-10 transform -translate-y-20 text-center'>
                    <div className='h-[3px] w-[77px] orangebackcolor'></div>
                    <p className='orangecolor lg:text-[16px] text-[13px] font-bold' data-aos="zoom-in">NOUS SOMMES EXPERTS EN LITTÉRATURE DEPUIS PLUS DE 20 ANS</p>
                    <h2 className='texth2 font-bold lg:w-[954px] text-center' data-aos="zoom-in">Auteurs, Ouvrages et Événements en Chiffres</h2>
                    <div className='flex  gap-10 justify-between font-bold lg:w-[954px] '>
                        <div className='flex flex-col justify-center items-center'
                         data-aos="fade-right"
                        >
                            <img src={mask1} alt="" className='' />
                            <p className='text-[23px]'>123</p>
                            <p className='text-[13px] text-gray-500'>Auteurs publiés</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'
                            data-aos="fade-down"
                        >
                            <img src={mask2} alt="" />
                            <p className='text-[23px]'>345</p>
                            <p className='text-[13px] text-gray-500'>Auteurs publiés</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'
                        data-aos="fade-left"
                        >
                            <img src={mask3} alt="" />
                            <p className='text-[23px]'>80</p>
                            <p className='text-[13px] text-gray-500'>Auteurs publiés</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter;
