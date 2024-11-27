import React from 'react'
import card from "../images/card.png"
import paypal from "../images/paypal.png"
interface modalprops {
    isOpen: boolean;
    onClose: () => void;

}
const Paiement: React.FC<modalprops> = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]" onClick={onClose}>
                    <div className=" rounded-lg overflow-hidden shadow-lg h-[580px] w-[550px] flex flex-row gap-3 p-10 lg:p-0">
                        <div className='lg:w-[473px] h-full flex flex-col justify-between opacitybackcolor rounded-lg lg:px-10 px-5 lg:py-16 py-8'>
                            <h3 className='font-bold text-[23px]'>
                                Moyen de paiement
                            </h3>
                            <div className='p-3 h-[60px] flex flex-row items-center bg-white rounded-[5px] flex justify-between'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={card} alt="" />
                                    <span className='font-bold text-[13px] lg:text-[16px]'>Credit card</span>
                                </div>
                                <input type='radio' className='h-[26px] w-[26px] rounded-full border border-gray-200 cursor-pointer'id='paie' name='paie1'/>
                            </div>
                            <div className='p-3 h-[60px] flex flex-row items-center bg-white rounded-[5px] flex justify-between'>
                            <img src={paypal} alt=""  className='h-14'/>
                            <input type='radio' className='h-[26px] w-[26px] rounded-full border border-gray-200 cursor-pointer'id='paie' name='paie1'/>
                            </div>
                            <div className='text-[13px] flex flex-col gap-5'>
                                <div className='w-full flex justify-between'>
                                    <p>Transfer Amount</p>
                                    <p className='font-bold'>$23,00</p>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <p>Transfer Amount</p>
                                    <p className='font-bold'>$23,00</p>
                                </div>
                                <div className='w-full h-1 graybackcolor'></div>
                                <div className='w-full flex justify-between'>
                                    <p>Total</p>
                                    <p className='font-bold'>$25,00</p>
                                </div>

                                </div>
                                <button className='w-full h-[48px] rounded-[5px] bg-black text-white'>Pay</button>

                        </div>
                        <button
                            className=" text-white px-4 py-2 rounded border border-white  h-12 md:block hidden"
                            onClick={onClose}
                        >
                            ✖
                        </button>

                    </div>
                </div>
            )}
        </>
    );
};

export default Paiement