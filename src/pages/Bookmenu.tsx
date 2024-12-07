import React from 'react'
import Layouts from '../partials/Layouts'
import bookmenu from "../images/bookmenu.png"
import Filterbook from '../section/FilterbookSection'
import {  useNavigate } from 'react-router-dom'
import Newsletter from '../section/NewsletterSection'
import WishesComponent from '../components/WishesComponent'

const Bookmenu: React.FC = () => {

  
    const navigate = useNavigate()


    


    return (
        <>
            <Layouts>
                <div>
                    <div className='w-full h-[372px] relative'>
                        <img src={bookmenu} alt="" className='h-full w-full object-cover' />
                        {/* Superposition noire */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Contenu du header */}
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            <h1 className="texth1 font-bold">Découvrez Nos Œuvres</h1>
                        </div>
                    </div>
                </div>
                <Filterbook/>
            
               <WishesComponent 
               handleFunction={()=>navigate("/download")}
               title="Souhaiterais-tu publier ton livre chez nous ?" textbuton='OUI JE VEUX PUBLIER MON LIVRE'/>
                <Newsletter/>
            </Layouts>
        </>
    )
}

export default Bookmenu