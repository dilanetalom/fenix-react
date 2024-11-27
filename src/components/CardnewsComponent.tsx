import React from 'react'
interface CardNewsProps {
    imagecard: string;     // Type pour l'image
    title: string;         // Type pour le titre
    description: string;   // Type pour la description
    butontext: string;     // Type pour le texte du bouton
}

const Cardnews:React.FC <CardNewsProps> = ({ imagecard, title, description, butontext }) => {
  return (
    <div className=' h-[416px] rounded-[5px] shadow-md text-[13px] bg-white'>
        <div className='h-2/5 w-full'>
        <img src={imagecard} className='w-full h-full object-cover object-center' alt="" />
        </div>
        <div className='h-3/5 w-full p-5 flex justify-between flex-col gap-4'>
        <div className=' px-[10px] py-[5px] w-[96px] rounded-full yellowbackcolor inline-block'>{title}</div>
        <div>
            {description}
        </div>
        <div>
            <button className='p-[10px] rounded-[5px] yellowbackcolor font-bold'>{butontext}</button>
        </div>
        </div>
    </div>
  )
}

export default Cardnews