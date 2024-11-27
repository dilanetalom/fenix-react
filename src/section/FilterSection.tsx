import React from 'react'
import mask1 from "../images/mask1.png"
import mask2 from "../images/mask2.png"
import mask3 from "../images/mask3.png"
import search from "../images/search.png"
import InputComponent from '../components/InputComponent'


const Filter: React.FC = () => {
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
        <div className='w-full opacitybackcolor h-auto  py-10'>
            <div className=' w-full container  flex flex-col mx-auto justify-center'>
                <div className="w-full lg:h-[413px] h-auto graybackcolor transform xl:-translate-y-48 -translate-y-40 pt-10 pb-10 xl:pb-0 xl:px-20 md:px-10 px-5 flex flex-col gap-6">
                    <div className='relative'>
                        <input type="text" className='w-full px-3 h-[58px] rounded-[5px]' placeholder='Recherche titre, auteur' />
                        <img src={search} alt="" className='absolute right-3 top-3 cursor-pointer' />
                    </div>
                    
                    <div className='grid xl:grid-cols-3  md:grid-cols-3  grid-cols-1 gap-3 lg:px-10 relative'>


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
                <div className='w-full flex flex-col container justify-center items-center gap-10 transform -translate-y-20 text-center'>
                    <div className='h-[3px] w-[77px] orangebackcolor'></div>
                    <p className='orangecolor lg:text-[16px] text-[13px] font-bold'>NOUS SOMMES EXPERTS EN LITTÉRATURE DEPUIS PLUS DE 20 ANS</p>
                    <h2 className='texth2 font-bold lg:w-[954px] text-center'>Auteurs, Ouvrages et Événements en Chiffres</h2>
                    <div className='flex  gap-10 justify-between font-bold lg:w-[954px] '>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={mask1} alt="" className='' />
                            <p className='text-[23px]'>123</p>
                            <p className='text-[13px] text-gray-500'>Auteurs publiés</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={mask2} alt="" />
                            <p className='text-[23px]'>345</p>
                            <p className='text-[13px] text-gray-500'>Auteurs publiés</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={mask3} alt="" />
                            <p className='text-[23px]'>80</p>
                            <p className='text-[13px] text-gray-500'>Auteurs publiés</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter;
