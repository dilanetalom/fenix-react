
import React from 'react';
// import book1 from "../images/book1.png"
import { NewsData } from '../pages/Newspage';
import { API_URLE } from './Url';
interface modalprops {
  isOpen: boolean;
  onClose: () => void;
  news:NewsData|null;

}
const ModalNews: React.FC<modalprops> = ({ isOpen, onClose, news }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-[1000]">
          <div className="rounded-lg overflow-hidden flex  gap-5 shadow-lg h-[339px] w-[850px]">
            <div className="p-5 flex flex-row bg-white rounded-[5px] w-[798px] h-full ">
              <div className='w-1/3 h-full'>
                <img 
               src={`${API_URLE}/images/news/${news?.image}`}
                alt="" className='object-cover object-center h-full w-full' />
              </div>
              <div className='w-2/3 h-full  flex flex-col  gap-5 px-10 justify-center'>
                <div className='px-[10px] py-[5px] rounded-full yellowbackcolor text-[11px] w-[77px]'>{news?.newsdate}</div>
                <div className='font-bold'>
                {news?.name}
                </div>
                <div>
                  <span className='font-bold'>Type : </span>
                  <span>{news?.name}</span>
                </div>
                <div>
                {news?.description}
                </div>
                {/* <button className='yellowbackcolor text-[13px] rounded-[5px] w-[135px] p-[10px] font-bold'>EN SAVOIR PLUS</button> */}
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