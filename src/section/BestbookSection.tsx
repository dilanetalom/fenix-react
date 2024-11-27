

import 'primereact/resources/themes/saga-blue/theme.css'; // Choisissez le thème que vous préférez
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import book1 from "../images/book1.png"
// import { useState } from 'react';
import { Carousel } from 'primereact/carousel';



const CustomSlider = () => {
    const books = [
        {
            id: 1,
            src: book1,
            title: 'JACARANDA',
            description: 'Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits.Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre,'
        },
        {
            id: 2,
            src: book1,
            title: 'JACARANDA',
            description: 'Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits.Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre.'
        },
        {
            id: 3,
            src: book1,
            title: 'JACARANDA',
            description: 'Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre, Récits de certains faits.Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer ses lecteurs et dédicacer son livre.'
        },
    ];



   

    const itemTemplate = (book:any) => {
        return (
          <div className='w-full'>
              <div className="flex md:flex-row flex-col items-center  w-full gap-6 lg:gap-0">
                <div className='w-full'>
                    <img src={book.src} alt={book.title} className="lg:w-[309px] w-full lg:h-[440px] h-[320px]" />
                </div>
                <div className="flex flex-col gap-5  h-[212px] ">
                    <h2 className="md:text-[23px] text-[16px] text-white font-bold">{book.title}</h2>
                    <p className="text-white md:text-[13px] text-[10px]">{book.description}</p>
                    <button className="px-[12px] py-[10px] bg-yellow-500 rounded-[5px] w-[134px] h-[42px]">
                        En savoir plus
                    </button>
                </div>
            </div>
          </div>
        );
    };


    

    return (


        <div className='w-full h-auto graybackcolor'>
            <div className='container flex flex-col pt-20 mx-auto relative'>

                <div className='lg:block hidden'>
                    <h2 className='text-[40px] font-bold text-white'>05 top meilleur livre</h2>
                </div>

                <div className="w-full relative flex flex-col items-center justify-center py-20 ">
       

            <Carousel 
                value={books}
                itemTemplate={itemTemplate}
                numVisible={1}
                numScroll={1}
                
                className="flex transition-transform duration-500 w-full  "
         
            />

            
        </div>

            </div>
        </div>




    );
};

export default CustomSlider;