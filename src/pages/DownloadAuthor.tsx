import React from 'react'
import Layouts from '../partials/Layouts'
import book1 from "../images/book1.png"

const DownloadAuthor: React.FC = () => {

    const handleClick = () => {
        const input = document.getElementById('ficheInput') as HTMLInputElement;
        if (input) {
            input.click();
        }
    };

    const handleClick1 = () => {
        const input = document.getElementById('ficheInput1') as HTMLInputElement;
        if (input) {
            input.click();
        }
    };

    return (

        <>
            <Layouts>
                <div className='w-full h-[313px] bg-blue-500 graybackcolor'>
                    <div className='container h-full w-full flex flex-row items-center justify-between'>

                        <div className='w-[680px] flex flex-col justify-center'>
                            <h1 className='texth1 text-white font-bold'>Soumettez Votre Manuscrit</h1>
                            <p className='text-[13px] text-white'>Envoyez-nous votre livre pour une analyse approfondie par notre équipe éditoriale. Que vous soyez un auteur émergent ou confirmé, nous examinons chaque œuvre avec attention pour vous offrir les meilleures opportunités de publication.</p>
                        </div>
                        <div className='transform rotate-[30deg] hidden lg:block'>
                            <img src={book1} alt="" className='h-[226.33px] w-[159px]' />
                        </div>

                    </div>
                </div>

                <div className='w-full h-auto flex   border-b-[2px] border-gray-500 border-opacity-50 px-[146px]'>
                    <div className='pt-10 pb-4 border-b-2 border-yellow-600'>Candidature</div>
                </div>

                <form className='py-10 w-full'>
                    <div className=' border-gray-500 container py-10 w-full'>
                        <p className='text-[16px] font-bold graycolor'>Vos données</p>
                        <p className='text-[13px]'>Parlez-nous de vous</p>
                    </div>
                    <div className='w-full h-auto flex flex-row container'>
                        <div className='lg:w-1/2 flex flex-col gap-5'>
                            <div className='flex flex-col gap-5'>
                                <label htmlFor="" className='graycolor font-bold'>Nom complet <span className='text-red-600'>*</span></label>
                                <input type="text" className='h-[59px] w-full rounded-[5px] border px-3  border-gray-600 outline-none'
                                    placeholder='Votre nom complet'
                                />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <label htmlFor="" className='graycolor font-bold'>Adresse e-mail  <span className='text-red-600'>*</span></label>
                                <input type="text" className='h-[59px] w-full rounded-[5px] border px-3 border-gray-600 outline-none'
                                    placeholder='Votre adresse e-mail'
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" className='graycolor font-bold'>Nom complet <span className='text-red-600'>*</span></label>
                                    <input
                                        placeholder='Cameroun'
                                        type="text" className='h-[59px] w-full rounded-[5px] border px-3  border-gray-600 outline-none' />
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" className='graycolor font-bold'>Adresse e-mail  <span className='text-red-600'>*</span></label>
                                    <input
                                        placeholder='+237'
                                        type="text" className='h-[59px] w-full rounded-[5px] border px-3 border-gray-600 outline-none' />
                                </div>
                            </div>

                        </div>
                        <div className='lg:w-1/2'>
                        </div>
                    </div>
                    <div className='container py-10'>
                        <div className='border border-gray-600  border-opacity-50'>

                        </div>
                        <div className='border-t-1 border-gray-500 py-10 w-full'>
                            <p className='text-[16px] font-bold graycolor'>Questions</p>
                            <p className='text-[13px]'>Merci de compléter les questions additionnelles</p>
                        </div>
                        <div>
                            <p className='text-[16px] font-bold graycolor'>Êtes-vous déjà auteur, actuellement avec plus de 5 ans d’expérience ? *</p>
                            <div >
                                <div className='flex flex-row gap-4 items-center mt-5'>
                                    <input id='oui' name='oui' type="radio" className='w-[15px] h-[15px]' />
                                    <label htmlFor="oui">Oui</label>
                                    <input id='non' name="oui" type="radio" className='w-[15px] h-[15px]' />
                                    <label htmlFor="non">Non</label>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto flex flex-row mt-8 '>
                            <div className='lg:w-1/2 flex flex-col gap-10'>
                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" className='graycolor font-bold'>CV <span className='text-red-600'>*</span></label>
                                    <div id='fiche1' className="h-[123px] border relative flex justify-center items-center cursor-pointer" onClick={handleClick}>
                                        <input type="file" id='ficheInput' className='absolute h-full w-full rounded-[5px] border px-3 border-gray-600 opacity-0 cursor-pointer' />
                                        <label htmlFor='ficheInput' className='absolute w-full h-full flex items-center justify-center text-center font-bold'>
                                            Importez un fichier
                                        </label>
                                        <p className='absolute w-full h-full flex items-center justify-center text-center text-[13px] mt-8'>
                                            Ou glissez-déposez ici (.pdf)
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" className='graycolor font-bold'>Linkedln  <span className='text-red-600'>*</span></label>
                                    <input type="text" className='h-[59px] w-full rounded-[5px] border px-3 border-gray-600 outline-none' />
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" className='graycolor font-bold'>Facebook  <span className='text-red-600'>*</span></label>
                                    <input type="text" className='h-[59px] w-full rounded-[5px] border px-3 border-gray-600 outline-none' />
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" className='graycolor font-bold'>Peux tu partager ton livre ? <span className='text-red-600'>*</span></label>
                                    <div id='fiche1' className="h-[123px] border relative flex justify-center items-center cursor-pointer" onClick={handleClick1}>
                                        <input type="file" id='ficheInput1' className='absolute h-full w-full rounded-[5px] border px-3 border-gray-600 opacity-0 cursor-pointer' />
                                        <label htmlFor='ficheInput1' className='absolute w-full h-full flex items-center justify-center text-center font-bold'>
                                            Importez un fichier
                                        </label>
                                        <p className='absolute w-full h-full flex items-center justify-center text-center text-[13px] mt-8'>
                                            Ou glissez-déposez ici (.pdf)
                                        </p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" className='graycolor font-bold'>Pourquoi souhaites tu rejoindre Finex ?  <span className='text-red-600'>*</span></label>
                                    <textarea name="" id="" className=' p-4 h-[182px] w-full rounded-[5px] border px-3 border-gray-600 outline-none'></textarea>
                                </div>


                            </div>
                            <div className='lg:w-1/2'>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center py-10'>
                        <button className='w-[208px] h-[52px] px-[70px] py-[15px] rounded-[5px] text-[16px] font-bold text-white graybackcolor'>Envoyer</button>
                    </div>
                </form>
            </Layouts>
        </>
    )
}

export default DownloadAuthor