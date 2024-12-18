import React, { useEffect, useState } from 'react'
// import book1 from "../images/book1.png"
import vector from "../images/Vector.png"
import right from "../images/right.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { fetchBooksAsync } from '../features/booksSlice'
import axios from 'axios'
import { API_URL, API_URLE } from '../components/Url'
import AOS from 'aos';
import 'aos/dist/aos.css';


// interface Author {
//   id: number;
//   name: string;
//   gender: string;
//   country: string;
//   imageauthor: File | null; // ou string si vous voulez stocker l'URL de l'image
//   description: string;
//   date_nais: string; // Format de date, par exemple "YYYY-MM-DD"
//   email: string;
// }

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
  // author:Author
}
const Typebook: React.FC = () => {
  const [filter, setFilter] = useState('nouveaute'); // État pour le filtre

  const dispatch = useDispatch<AppDispatch>(); // Typage du dispatch
  // const { books} = useSelector((state: RootState) => state.books);
  const [books, setBooks] = useState<Book[]>([]);


  useEffect(() => {
    +
    dispatch(fetchBooksAsync());
  }, [dispatch]);


  const getBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/getbook`,);
      setBooks(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des livres:', error);
      throw error;
    }
  };

  useEffect(() => {
    getBooks()
  }, [])

  // const book = [
  //     {
  //         id:1,
  //         first:"NOUVEAUTE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },
  //     {
  //         id:2,
  //         first:"NOUVEAUTE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },
  //     {
  //         id:3,
  //         first:"NOUVEAUTE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },
  //     {
  //         id:4,
  //         first:"NOUVEAUTE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },
  //     {
  //         id:5,
  //         first:"NOUVEAUTE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },
  //     {
  //         id:6,
  //         first:"A PARAITRE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },
  //     {
  //         id:7,
  //         first:"A PARAITRE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },
  //     {
  //         id:8,
  //         first:"A PARAITRE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },

  //     {
  //         id:9,
  //         first:"A PARAITRE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },

  //     {
  //         id:10,
  //         first:"A PARAITRE",
  //         image:book1,
  //         title:"JACARANDA",
  //         description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
  //     },

  // ]

  // Fonction pour filtrer les livres selon le filtre sélectionné
  const filteredBooks = books.filter((item) => {
    if (filter === 'nouveaute') {
      return item.status === 'Nouveauté';
    } else if (filter === 'A paraitre') {
      return item.status == 'A paraitre';
    }
    return true; // Pour le cas où le filtre n'est ni 'nouveaute' ni 'A PARAITRE'
  });

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
        duration: 1000, // Durée de l'animation
        easing: 'ease-in-out', // Type d'accélération
    });
}, []);
  return (
    <div className='w-full lg:h-auto h-auto flex flex-col mx-auto'>
      <div className='w-full h-[80px] text-white font-bold flex' >
        <div className='w-1/2 h-full flex flex-col items-center'>
          <button
            className={`w-full min-h-[66px] ${filter === 'nouveaute' ? 'orangebackcolor' : 'bg-black'} outline-none`}
            onClick={() => setFilter('nouveaute')}
          >
            NOUVEAUTE
          </button>
          <div className={` ${filter === 'nouveaute' ? 'block' : 'hidden'} outline-none`}>
            <img src={vector} alt="" />
          </div>
        </div>
        <div className='w-1/2 h-full flex flex-col items-center '>
          <button
            className={`w-full min-h-[66px] ${filter === 'A paraitre' ? 'orangebackcolor' : 'bg-black'} outline-none`}
            onClick={() => setFilter('A paraitre')}
          >
            A PARAITRE
          </button>
          <div className={` ${filter === 'A paraitre' ? 'block' : 'hidden'} outline-none`}>
            <img src={vector} alt="" />
          </div>
        </div>
      </div>
      <div className=' h-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mx-auto container md:py-20  '>
        {
          filteredBooks?
          filteredBooks.map((item: any) => {
            return (
              <div 
              className='h-[455px]  relative  space-y-3 cursor-pointer mt-10 ' onClick={() => navigate(`detailbook/${item.id}`)} key={item.id}
              data-aos="zoom-in" // Animation de zoom
              data-aos-delay={item.id * 200}
              >
                <div className={`py-1 px-2 text-[13px] ${item.status === 'Nouveauté' ? 'yellowbackcolor' : 'bg-black text-white'} inline-block rounded-full`}>
                  {item.status}
                </div>
                <div className='lg:h-[302px] h-[250px] w-full'>
                  <img src={`${API_URLE}/images/books/${item.image}`}
                    alt="" className='w-full h-full object-cover object-center' />
                </div>
                <div>
                  {/* ${item.image} */}
                </div>
                <p className='text-[16px] font-bold'>
                  {item.title}
                </p>
                <p className='text-[11px]'>
                  {item.description}
                </p>
                <Link to={`detailbook/${item.id}`} className='text-[11px] orangecolor font-bold'>Voir plus</Link>
              </div>
            )
          }):
          <p>Aucun livre ...</p>
        }

      </div>
      <div className='w-full flex justify-center md:pb-28 pb-10'>
        <button onClick={() => navigate('/menubook')} className='flex items-center justify-center text-[12px] lg:text-[16px] graycolor lg:w-[360.18px] md:w-[280px]  px-[12px] py-[10px] rounded-[5px] border-[1px] border-[#007F99] transition-all duration-300 ease-out hover:bg-[#007f99] hover:text-white'
                data-aos="zoom-in"
                // Animation de zoom
                data-aos-anchor-placement="top-bottom" 
          >
          <span>
            <img src={right} alt="" />
          </span>
          <span>
            DÉCOUVRIR NOS NOUVEAUX LIVRES
          </span>
        </button>
      </div>
    </div>
  )
}

export default Typebook
