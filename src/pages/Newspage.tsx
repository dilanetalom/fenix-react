

      import React, { useEffect, useState } from 'react';
      import Layouts from '../partials/Layouts';
      import Newsletter from '../section/NewsletterSection';
      import HeadersecondComponent from '../components/HeadersecondComponent';
      import ModalNews from '../components/NewmodalComponent';
      import { Link } from 'react-router-dom';
      import InputComponent from '../components/InputComponent';
      import axios from 'axios';
      import { API_URL, API_URLE } from '../components/Url';
      import Author from './Author';
      import AOS from 'aos';
      import 'aos/dist/aos.css';
      
      export interface Option {
          label: string;
          value: string;
      }
      
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
          const [news, setNews] = useState<NewsData[]>([]);
          const [selectedDate, setSelectedDate] = useState('');
          const [selectedFormat, setSelectedFormat] = useState<string>('');
          const [selectedAuthor, setSelectedAuthor] = useState<string>('');
          const [filteredNews, setFilteredNews] = useState<NewsData[]>([]);
          const [currentNews, setCurrentNews] = useState<NewsData[]>([]);
          const [currentPage, setCurrentPage] = useState(1);
          const itemsPerPage = 3; // Nombre d'articles par page
      
          const etude = [
              { label: 'Type', value: '' },
              { label: 'Nouvelles Publications', value: 'Nouvelles Publications' },
              { label: 'Prix Littéraires', value: 'Prix Littéraires' },
              { label: 'Critiques Littéraires', value: 'Critiques Littéraires' },
              { label: 'Événements Littéraires', value: 'Événements Littéraires' },
              { label: "Interviews d'Auteurs", value: "Interviews d'Auteurs" },
              { label: "Tendances Littéraires", value: "Tendances Littéraires" },
              { label: "Adaptations Cinématographiques", value: "Adaptations Cinématographiques" },
              { label: "Littérature et Société", value: "Littérature et Société" },
              { label: "Littérature Internationale", value: "Littérature Internationale" },
          ];
          
          useEffect(() => {
            window.scrollTo(0, 0); // Fait défiler vers le haut de la page
        }, []); //
      
          useEffect(() => {
              const getBooks = async () => {
                  try {
                      const response = await axios.get(`${API_URL}/getnews`);
                      setNews(response.data);
                      setFilteredNews(response.data); // Initialiser avec toutes les actualités
                  } catch (error) {
                      console.error('Erreur lors de la récupération des actualités:', error);
                  }
              };
      
              getBooks();
          }, []);
      
          useEffect(() => {
              // Mettre à jour les actualités affichées à chaque changement de page ou de filtre
              const startIndex = (currentPage - 1) * itemsPerPage;
              setCurrentNews(filteredNews.slice(startIndex, startIndex + itemsPerPage));
          }, [filteredNews, currentPage]);
      
          const handlePageChange = (pageNumber: number) => {
              setCurrentPage(pageNumber);
          };
      
          const handleSelectFormat = (option: Option | undefined) => {
              setSelectedFormat(option?.value || '');
              filterNews(option?.value || '', selectedDate, selectedAuthor);
          };
      
          const handleSelectAuthor = (option: Option | undefined) => {
              setSelectedAuthor(option?.value || '');
              filterNews(selectedFormat, selectedDate, option?.value || '');
          };
      
          const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
              const date = event.target.value;
              setSelectedDate(date);
              filterNews(selectedFormat, date, selectedAuthor);
          };
      
          const filterNews = (type: string, date: string, author: string) => {
              let filtered = news;
      
              if (type) {
                  filtered = filtered.filter(news => news.type === type);
              }
              if (date) {
                  filtered = filtered.filter(news => new Date(news.newsdate).toLocaleDateString() === new Date(date).toLocaleDateString());
              }
              if (author) {
                  filtered = filtered.filter(news => news.user_id === author);
              }
      
              setFilteredNews(filtered); // Met à jour la liste filtrée
              setCurrentPage(1); // Réinitialiser à la première page après le filtrage
          };
      
      
          const [authorOptions, setAuthorOptions] = useState<Option[]>([]);

    
          const getauthors = async () => {
            try {
              const response = await axios.get(`${API_URL}/allauthor`);
            //   setAllAuthors(response.data);
            //   setFilteredAuthors(response.data); // Initialiser avec tous les auteurs
              const options = response.data.map((author: Author) => ({
                label: author.name,
                value: author.id // ou author.id si vous préférez utiliser l'ID
              }));
              setAuthorOptions(options);
            } catch (error) {
              console.error('Erreur lors de la récupération des livres:', error);
            }
          };
        
          useEffect(() => {
            getauthors();
          }, []);
      
          useEffect(() => {
            AOS.init({
                duration: 1000, // Durée de l'animation
                easing: 'ease-in-out', // Type d'accélération
            });
        }, []);
          
          return (
              <>
                  <Layouts>
                      <ModalNews isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} news={null} />
                      <HeadersecondComponent title='Découvrez nos actualités' />
                      <div className='py-20 w-full h-auto opacitybackcolor flex flex-col gap-28'>
                          <div className='container flex lg:flex-row flex-col justify-center mx-auto'>
                              <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 lg:w-[801px] lg:h-[61px] border-gray-500 rounded-[10px]'>
                                  <InputComponent
                                      options={etude}
                                      first='Format'
                                      onSelect={handleSelectFormat}
                                  />
                                  <div className="flex flex-col">
                                      <input
                                          type="date"
                                          id="date"
                                          value={selectedDate}
                                          onChange={handleChangeDate}
                                          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-14"
                                      />
                                  </div>
                                  <InputComponent
                                      options={authorOptions} // Remplacez par les options d'auteurs si vous les avez
                                      first='Auteur'
                                      onSelect={handleSelectAuthor}
                                  />
                              </div>
                          </div>
                          <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto container gap-5'>
                              {currentNews.map((item) => (
                                  <Link key={item.id} to="" className='md:h-[416px] h-[500px] shadow-xl bg-white rounded-[5px]' onClick={() => setIsModalOpen(true)}
                                      data-aos="zoom-in"
                                  >
                                      <div className='h-1/2 w-full'>
                                          <img src={`${API_URLE}/images/news/${item.image}`} alt="" className='w-full h-full object-cover object-center' />
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
                              ))}
                          </div>
      
                          <div className='flex w-full justify-center mt-5'>
                              {Array.from({ length: Math.ceil(filteredNews.length / itemsPerPage) }, (_, index) => (
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
                      <div className='w-full h-auto bg-white'>
                          <div className='h-full w-full container flex justify-center items-center mx-auto py-24'>
                              <div className='lg:w-[613px] lg:h-[182px] rounded-[10px] orangebackcolor md:p-10 p-5 flex lg:flex-row flex-col gap-5 text-white'>
                                  <div className='lg:w-1/2 h-full'>
                                      <p className='text-[23px] font-bold'>Abonnez-vous à la newsletter</p>
                                      <p className='text-[13px]'>Recevez nos dernières actualités directement dans votre boîte mail</p>
                                  </div>
                                  <div className='lg:w-1/2 h-full relative flex items-center'>
                                      <input type="text" placeholder='Votre e-mail' className='w-full h-[45px] rounded-full orangebackcolor border-[1px] md:text-[13px] text-[11px] outline-none text-white px-3 placeholder-white' />
                                      <button className='absolute bg-black right-2 lg:top-8 top-1 h-[36px] w-[89px] rounded-full md:text-[13px] text-[11px]'>ENVOYEZ</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <Newsletter />
                  </Layouts>
              </>
          );
      }
      
      export default Newspage;