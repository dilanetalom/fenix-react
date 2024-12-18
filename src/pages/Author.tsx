import React, { useEffect, useState } from 'react';
import Layouts from '../partials/Layouts';
import Newsletter from '../section/NewsletterSection';
import WishesComponent from '../components/WishesComponent';
import fleche1 from "../images/fleche2.png";
import { Link, useNavigate } from 'react-router-dom';
import HeadersecondComponent from '../components/HeadersecondComponent';
import InputComponent from '../components/InputComponent';
import { API_URL, API_URLE } from '../components/Url';
import axios from 'axios';

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

const Author: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler vers le haut de la page
}, []); //

  const navigate = useNavigate();
  const [allAuthors, setAllAuthors] = useState<Author[]>([]);
  const [filteredAuthors, setFilteredAuthors] = useState<Author[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState<string>(''); // État pour la lettre sélectionnée
  const itemsPerPage = 4;

  const getauthors = async () => {
    try {
      const response = await axios.get(`${API_URL}/allauthor`);
      setAllAuthors(response.data);
      setFilteredAuthors(response.data); // Initialiser avec tous les auteurs
    } catch (error) {
      console.error('Erreur lors de la récupération des livres:', error);
    }
  };

  useEffect(() => {
    getauthors();
  }, []);

  // Filtrer les auteurs selon la lettre sélectionnée
  useEffect(() => {
    if (selectedLetter) {
      const filtered = allAuthors.filter(author =>
        author.name.toLowerCase().startsWith(selectedLetter.toLowerCase())
      );
      setFilteredAuthors(filtered);
    } else {
      setFilteredAuthors(allAuthors); // Réinitialiser si aucune lettre n'est sélectionnée
    }
  }, [selectedLetter, allAuthors]);

  const totalPages = Math.ceil(filteredAuthors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = filteredAuthors.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const alphabetFrancais = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const etude = [
    { label: 'Filtre par ordre alpha', value: '' },
    ...alphabetFrancais.map(lettre => ({ label: lettre, value: lettre }))
  ];

  const handleSelect = (option: Option | undefined) => {
    setSelectedLetter(option?.value || ''); // Met à jour la lettre sélectionnée
  };

  const truncateDescription = (description: string, maxLength: number): string => {
    return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
  };
  const goes = () => {
    navigate("/download"); 
};

  return (
    <>
      <Layouts>
        <HeadersecondComponent title='Découvrez nos auteurs' />
        <div className='opacitybackcolor w-full h-auto'>
          <div className='container w-full h-auto py-20 flex flex-col mx-auto gap-20'>
            <div className='lg:w-[467px] w-full h-[64px]'>
              <InputComponent
                first='Par ordre alphabétique'
                options={etude}
                onSelect={handleSelect}
              />
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto md:gap-6 gap-5'>
              {
                currentNews.map((item) => (
                  <Link key={item.id} to={`/detailauthor/${item.id}`} className='lg:h-[384px] h-[288px] shadow-md bg-white rounded-[5px]'
                  data-aos="fade-right"
                  >
                    <div className='h-1/2 w-full'>
                      <img src={`${API_URLE}/images/authors/${item.imageauthor}`} alt="" className='w-full h-full object-cover object-center rounded-t-[5px]' />
                    </div>
                    <div className='h-1/2 w-full lg:px-5 px-2 lg:py-8 py-3 flex justify-between gap-3 flex-col'>
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
                ))
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
          handleFunction={goes}
        />
        <Newsletter />
      </Layouts>
    </>
  );
};

export default Author;