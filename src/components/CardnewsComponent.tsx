import React from 'react'
import { useNavigate } from 'react-router-dom';
interface CardNewsProps {
    imagecard: string;     // Type pour l'image
    title: string;         // Type pour le titre
    description: string;   // Type pour la description   // Type pour le texte du bouton
}

const Cardnews:React.FC <CardNewsProps> = ({ imagecard, title, description }) => {
  const navigate = useNavigate();
  return (
    <div className=' h-[416px] rounded-[5px] shadow-md text-[13px] bg-white'>
        <div className='h-1/2 w-full'>
        <img src={imagecard} className='w-full h-full object-cover object-center' alt="" />
        </div>
        <div className='h-1/2 w-full p-5 flex justify-between flex-col gap-4'>
        <div className=' px-[10px] py-[5px] w-[96px] rounded-full yellowbackcolor inline-block'>{title}</div>
        <div>
            {description}
        </div>
        <div>
            <button
             onClick={() => navigate("/news")}
            className='p-[10px] rounded-[5px] yellowbackcolor font-bold'>EN SAVOIR PLUS</button>
        </div>
        </div>
    </div>
  )
}

export default Cardnews