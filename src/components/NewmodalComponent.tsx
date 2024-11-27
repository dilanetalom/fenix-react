
import React from 'react';
import book1 from "../images/book1.png"
interface modalprops {
  isOpen: boolean;
  onClose: () => void;

}
const ModalNews: React.FC<modalprops> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-[1000]">
          <div className="rounded-lg overflow-hidden flex  gap-5 shadow-lg h-[339px] w-[850px]">
            <div className="p-5 flex flex-row bg-white rounded-[5px] w-[798px] h-full ">
              <div className='w-1/3 h-full'>
                <img src={book1} alt="" className='object-cover object-center' />
              </div>
              <div className='w-2/3 h-full  flex flex-col  gap-5 pr-10 justify-center'>
                <div className='px-[10px] py-[5px] rounded-full yellowbackcolor text-[11px] w-[77px]'>01/10/2024</div>
                <div>
                  Yasmina Reza sera à la Librairie Le Neuvième Pays à 
                  Paris pour rencontrer 
                  ses lecteurs et dédicacer son livre, Récits de certains faits
                </div>
                <button className='yellowbackcolor text-[13px] rounded-[5px] w-[135px] p-[10px] font-bold'>EN SAVOIR PLUS</button>
              </div>

            </div>
            <button
              className=" text-white px-4 py-2 rounded border border-white  h-12 w-12"
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

export default ModalNews