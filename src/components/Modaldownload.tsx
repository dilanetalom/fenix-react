import React from 'react'
interface modalprops {
    isOpen: boolean;
    onCloses: () => void;

}
const Downloadmodal: React.FC<modalprops> = ({ isOpen, onCloses }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"  onClick={onCloses}>
                    <div className=" rounded-lg overflow-hidden shadow-lg h-[580px] lg:w-[550px] flex flex-row gap-3 p-10">
                        <div className='lg:w-[473px] w-full  h-full flex flex-col justify-between opacitybackcolor rounded-lg lg:px-10 px-5 lg:py-16 py-8'>
                            <div className='w-full flex justify-center'>
                                <div className=' text-[13px] text-red-500 flex justify-center items-center text-center w-[342px] h-[38px] border border-red-500 padding-[10px]'>
                                    Tous les champs marqués d'un * sont obligatoires
                                </div>
                            </div>


                            <div className='flex flex-col '>
                                <label htmlFor="" className='font-bold'>Votre nom <span className='text-red-600'>*</span></label>
                                <input type='text' className='p-3 h-[60px]  bg-white rounded-[5px] outline-none' placeholder='Votre Nom' />

                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="" className='font-bold'>Votre email <span className='text-red-600'>*</span></label>
                                <input type='email' className='p-3 h-[60px]  bg-white rounded-[5px] outline-none' placeholder='Votre email' />
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="" className='font-bold'>Votre téléphone</label>
                                <input type='number' className='p-3 h-[60px]  bg-white rounded-[5px] outline-none' placeholder='Votre téléphone' />
                            </div>


                            <button className='w-full h-[48px] rounded-[5px] bg-black text-white'>Téléchager</button>

                        </div>
                        <button
                            className=" text-white px-4 py-2 rounded border border-white  h-12 md:block hidden"
                            onClick={onCloses}
                        >
                            ✖
                        </button>

                    </div>
                </div >
            )}
        </>
    );
};

export default Downloadmodal