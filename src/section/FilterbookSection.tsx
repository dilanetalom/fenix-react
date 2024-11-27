import React from 'react'
import InputComponent from '../components/InputComponent';
import search from "../images/search.png"

const Filterbook: React.FC = () => {

    const auteur = [
        { label: 'auteur', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];

    const format = [
        { label: 'format', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];
    const dispo = [
        { label: 'Disponibilité', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];
    const catalogue = [
        { label: 'Catalogue', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];
    const Langue = [
        { label: 'Langue', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];
    const etude = [
        { label: 'Niveau d’etude', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
    ];
   
    return (
        <div className='container w-full h-full flex mx-auto'>
            <div className="w-full lg:h-[413px] h-auto graybackcolor transform xl:-translate-y-28 -translate-y-36 pt-10 pb-10 xl:pb-0 xl:px-20 md:px-10 px-5 flex flex-col gap-6">
            <div className='relative'>
                        <input type="text" className='w-full px-3 h-[58px] rounded-[5px]' placeholder='Recherche titre, auteur' />
                        <img src={search} alt="" className='absolute right-3 top-3 cursor-pointer' />
                    </div>
                <div className='grid xl:grid-cols-3  md:grid-cols-3  grid-cols-1 gap-3 lg:px-10'>

                 <InputComponent
                 options={auteur}
                 first='auteur'
                 />
                 <InputComponent
                 options={format}
                 first='format'
                 />
                 <InputComponent
                 options={dispo}
                 first='Disponibilite'
                 />
                 <InputComponent
                 options={catalogue}
                 first='catalogue'
                 />
                 <InputComponent
                 options={Langue}
                 first='Langue'
                 />
                 <InputComponent
                 options={etude}
                 first='format'
                 />
                 <InputComponent
                 options={etude}
                 first='format'
                 />


                    

                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                    <button className='px-[12px] py-[10px] border border-white rounded-[5px] font-bold text-white'>Réinitialiser</button>
                    <button className='px-[12px] py-[10px] orangebackcolor rounded-[5px] font-bold text-white'>Rechercher</button>
                </div>
            </div>
        </div>
    )
}

export default Filterbook