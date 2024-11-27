import React, { useEffect, useState } from 'react'
import book1 from "../images/book1.png"
import vector from "../images/Vector.png"
import right from "../images/right.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch} from '../store'
import { fetchBooksAsync } from '../features/booksSlice'


const Typebook:React.FC = () => {
    const [filter, setFilter] = useState('nouveaute'); // État pour le filtre

    const dispatch = useDispatch<AppDispatch>(); // Typage du dispatch
    // const { books} = useSelector((state: RootState) => state.books);

    useEffect(() => {+
        dispatch(fetchBooksAsync());
    }, [dispatch]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    // Appliquez un filtre selon votre logique
    // const filteredBooks = books.filter(book => book.type === filter);

    const book = [
        {
            id:1,
            first:"NOUVEAUTE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id:2,
            first:"NOUVEAUTE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id:3,
            first:"NOUVEAUTE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id:4,
            first:"NOUVEAUTE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id:5,
            first:"NOUVEAUTE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id:6,
            first:"A PARAITRE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id:7,
            first:"A PARAITRE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
        {
            id:8,
            first:"A PARAITRE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
     
        {
            id:9,
            first:"A PARAITRE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
     
        {
            id:10,
            first:"A PARAITRE",
            image:book1,
            title:"JACARANDA",
            description:" Jacaranda célèbre l’humanité, paradoxale, aimante, vivante"
        },
     
    ]

      // Fonction pour filtrer les livres selon le filtre sélectionné
      const filteredBooks = book.filter((item) => {
        if (filter === 'nouveaute') {
            return item.first === 'NOUVEAUTE';
        } else if (filter === 'A PARAITRE') {
            return item.first !== 'NOUVEAUTE';
        }
        return true; // Pour le cas où le filtre n'est ni 'nouveaute' ni 'A PARAITRE'
    });

      const navigate = useNavigate();
  return (
    <div className='w-full h-auto flex flex-col mx-auto'>
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
          className={`w-full min-h-[66px] ${filter === 'A PARAITRE' ? 'orangebackcolor' : 'bg-black'} outline-none`}
          onClick={() => setFilter('A PARAITRE')}
        >
          A PARAITRE
        </button>
        <div className={` ${filter === 'A PARAITRE' ? 'block' : 'hidden'} outline-none`}>
          <img src={vector} alt="" />
        </div>
        </div>
        </div>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mx-auto container md:py-20 '>
            {
                filteredBooks.map((item)=>{
                    return(
                        <div className='h-[455px]  relative  space-y-3 ' key={item.id}>
                        <div className={`py-1 px-2 text-[13px] ${item.first === 'NOUVEAUTE' ? 'yellowbackcolor' : 'bg-black text-white'} inline-block rounded-full`}>
                          {item.first}
                        </div>
                        <div className='lg:h-[302px] w-full'>
                            <img src={item.image} alt="" className='w-full h-full object-cover object-center' />
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
        <div className='w-full flex justify-center md:pb-28 pb-10'> 
                      <button onClick={()=>navigate('/menubook')} className='flex items-center text-[13px] lg:text-[16px] graycolor lg:w-[360.18px] w-[303px] px-[12px] py-[10px] rounded-[5px] border-[1px] border-[007F99] transition-all duration-300 ease-out hover:bg-[#007f99] hover:text-white'>
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
