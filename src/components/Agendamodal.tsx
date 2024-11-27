import React from 'react'
interface modalprops {
    isOpen: boolean;
    onClose: () => void;

}
const Agendamodal:React.FC <modalprops> = ({ isOpen, onClose }) => {
  return (
    <>
    {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
            <div className=" rounded-lg overflow-hidden shadow-lg h-[271px] w-[720px] flex flex-row gap-3">
                <div className='w-[473px] h-full flex flex-col gap-2 justify-between opacitybackcolor rounded-lg px-10 py-10'>
                    
                     <h4 className='text-[23px] font-bold'>
                     Alexandra Schwartzbrod invitée des rencontres
                     Littérature, enjeux contemporains.
                     </h4>
                     <div className='flex gap-3'>
                        <div className='yellowbackcolor p-2 rounded-full w-[70px] text-[11px]'>03/10/2024</div>
                        <p>16h00</p>
                     </div>
                     <div className='flex gap-3 text-[11px]'>
                        <span className='font-bold'>Lieu</span>
                        <span> : Théâtre du Vieux-Colombier / Comédie-Française </span>
                     </div>
                     <div className='flex gap-3 text-[11px]'>
                        <span className='font-bold'>Pays </span>
                        <span>: France</span>
                     </div>
                </div>
                <button
                    className=" text-white px-4 py-2 rounded border border-white  h-12"
                    onClick={onClose}
                >
                    ✖
                </button>

            </div>
        </div>
    )}
</>
  )
}

export default Agendamodal