import React, { useEffect, useState } from 'react';
import InputComponent from '../components/InputComponent';
import search from "../images/search.png";
import { Link, useNavigate } from 'react-router-dom';
import { Book } from './TypebookSection';
import axios from 'axios';
import { API_URL, API_URLE } from '../components/Url';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const format = [
    { label: 'format', value: '' },
    { label: 'Physique', value: 'Physique' },
    { label: 'Numérique', value: 'Numérique' }
];

const dispo = [
    { label: 'Disponibilité', value: '' },
    { label: 'Nouveauté', value: 'Nouveauté' },
    { label: 'A paraitre', value: 'A paraitre' },
    { label: 'Meilleure vente', value: 'Meilleure vente' },
    { label: 'En promotion', value: 'En promotion' }
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
    { label: 'Langue', value: '' },
    { label: 'Francais', value: 'Francais' },
    { label: 'Anglais', value: 'Anglais' },
    { label: 'Espognol', value: 'Espognol' },
    { label: 'Allemand', value: 'Allemand' }
];


const etude = [
    { label: 'Niveau d’etude', value: '' },
    { label: 'Elève', value: 'Elève' },
    { label: 'Etudiant', value: 'Etudiant' },
    { label: 'Professionnel', value: 'Professionnel' },
    { label: 'Chercheur', value: 'Chercheur' },
    { label: 'Lecteur occasionnel', value: 'Lecteur occasionnel' },
    { label: 'Lecteur passionné', value: 'Lecteur passionné' },
];



const dates = [
    // { label: 'Niveau d’etude', value: '' },
    { label: 'Dernières parutions', value: '1' },
    { label: 'Cette année', value: '2' },
    { label: 'Les 5 dernières années', value: '3' },
    { label: 'Classiques', value: '4' },
    { label: 'À paraître', value: '5' },
];

const Filterbook: React.FC = () => {
    const [allbooks, setAllBooks] = useState<Book[]>([]);
    const [authorOptions, setAuthorOptions] = useState<Option[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<string>('');
    const [selectedFormat, setSelectedFormat] = useState<string>('');
    const [selectedDispo, setSelectedDispo] = useState<string>('');
    const [selectedCatalogue, setSelectedCatalogue] = useState<string>('');
    const [selectedLangue, setSelectedLangue] = useState<string>('');
    const [selectedEtude, setSelectedEtude] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');

    const navigate = useNavigate();

    // Récupérer les livres
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

    // Récupérer les auteurs
    const getauthors = async () => {
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

    // Filtrage des livres
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

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

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
        <div className='w-full h-full flex flex-col mx-auto'>
            <div className=' w-full container  flex flex-col mx-auto justify-center'>
            <div className="w-full lg:h-auto h-auto graybackcolor transform xl:-translate-y-28 -translate-y-40 pt-10 pb-10 xl:pb-0 xl:px-20 md:px-10 px-5 flex flex-col gap-6">
                <form className="w-full lg:h-auto h-auto  pt-10  flex flex-col gap-6">
                    <div className='relative'>
                        <input type="text" className='w-full px-3 h-[58px] rounded-[5px]' placeholder='Recherche titre, auteur' />
                        <img src={search} alt="" className='absolute right-3 top-3 cursor-pointer' />
                    </div>
                    <div className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 lg:px-10'>
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
                        <button type="button" className='px-[12px] py-[10px] border border-white rounded-[5px] font-bold text-white' onClick={resetFilters}>
                            Réinitialiser
                        </button>
                        <button type="button" className='px-[12px] py-[10px] orangebackcolor rounded-[5px] font-bold text-white'>
                            Rechercher
                        </button>
                    </div>
                </form>
            </div>
            </div>
            <div className='opacitybackcolor pb-20'>
                <div className='w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto gap-4 py-10 container'
                
                >
                    {currentNews.map((item) => (
                        <div className='h-[455px] relative space-y-3 cursor-pointer' onClick={() => navigate(`/detailbook/${item.id}`)} key={item.id}
                         data-aos="zoom-in"
                        >
                            <div className='h-[302px] w-full'>
                                <img src={`${API_URLE}/images/books/${item.image}`} alt="" className='w-full h-full object-cover object-center' />
                            </div>
                            <p className='text-[16px] font-bold'>{item.title}</p>
                            <p className='text-[11px] h-[80px]'>{item.description}</p>
                            <Link to={`detailbook/${item.id}`} className='text-[11px] orangecolor font-bold'>Voir plus</Link>
                        </div>
                    ))}
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
    );
};

export default Filterbook;