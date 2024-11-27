import React from 'react'
import Cardchoice from '../components/CardchoiceComponent'
import bookicon from "../images/bookicon.png"
import { useNavigate } from 'react-router-dom';
import choice1 from "../images/choice1.png"
import choice2 from "../images/choice2.png"
import choice3 from "../images/choice3.png"


const Whychoice:React.FC = () => {
  const choices = [
    {
      id:1,
      image:choice1,
      title:"Une Bibliothèque Littéraire Variée",
      color:"#007F99",
      description:"   Découvrez une vaste collection de livres couvrant divers genres littéraires, des classiques aux nouveautés. Chaque ouvrage est accompagné de descriptions détaillées, d'avis de lecteurs, et est disponible à l'achat ou en précommande."
    },
    {
      id:2,
      image:choice2,
      title:"Une Bibliothèque Littéraire Variée",
      color:"#FF7300",
      description:"   Découvrez une vaste collection de livres couvrant divers genres littéraires, des classiques aux nouveautés. Chaque ouvrage est accompagné de descriptions détaillées, d'avis de lecteurs, et est disponible à l'achat ou en précommande."
    },
    {
      id:3,
      image:choice3,
      title:"Une Bibliothèque Littéraire Variée",
      color:"#F6D860",
      description:"   Découvrez une vaste collection de livres couvrant divers genres littéraires, des classiques aux nouveautés. Chaque ouvrage est accompagné de descriptions détaillées, d'avis de lecteurs, et est disponible à l'achat ou en précommande."
    },
  ]
   const navigate = useNavigate();
  return (
    <div className='w-full h-auto py-16'>
       <div className=' w-full container py-10 flex flex-col mx-auto  gap-20'> 
           <h2 className='texth2 font-bold text-center'>Pourquoi Nous Choisir ?</h2>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          
            {
              choices.map((item)=>{
               return(
                <Cardchoice
                key={item.id}
                image={item.image}
                title={item.title}
                color={item.color}
                description={item.description}
                />
               )
              })
            }
           </div>
           <div className='flex justify-center'>
           <button onClick={()=>navigate("/download")} className='h-[44px]  px-5 rounded-[5px] graybackcolor  gap-2 flex items-center'>
                    <span>
                        <img src={bookicon} alt="" />
                    </span>
                    <span className='text-[16px] text-white font-[400] '>Publiez Vos Livres</span>
                </button>
           </div>
       </div>
    </div>
  )
}

export default Whychoice
