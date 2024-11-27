import React from 'react'
import agenda from "../images/agenda.png"
import left from "../images/left.png"
import fleche from "../images/fleche.png"

import { Link, useNavigate } from 'react-router-dom'

const Agendasection:React.FC = () => {
    const navigate = useNavigate();
    const agendas = [
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        },
    ]
  return (
    <div className='w-full h-auto graybackcolor mx-auto flex lg:flex-row  flex-col gap-10'>
       <div className='lg:w-[55%] lg:pl-[146px] py-10 flex flex-col gap-5 lg:border-b border-white px-5 lg:px-0'>
<h2 className='texth2 font-bold text-white'>Agenda</h2>

{
    agendas.map((item)=>{
        return(
            <div key={item.id} className='border-b-[0.1px] border-white border-opacity-20 py-2 lg:space-y-1 space-y-4'>
            <div className='px-[5px] py-[1px] yellowbackcolor inline-block rounded-full text-[11px] lg:text-[14px] '>03/10/2024</div>
            <div className='flex lg:flex-row flex-col gap-3 justify-between lg:items-end'>
                <div className='lg:w-[379px] text-[13px] text-white'>
                Yasmina Reza sera à la Librairie Le Neuvième Pays à Paris pour rencontrer 
                ses lecteurs et dédicacer son livre, Récits de certains faits
                </div>
                <Link to="" className='yellowcolor font-bold text-[11px] flex items-center lg:justify-center'>
                <span>Voir plus</span>
                <span>
                    <img src={fleche} alt="" />
                </span>
                </Link>
            </div>
        </div>  
        )
    })
}
<div className='flex lg:justify-end justify-center'>
    <button onClick={()=>navigate("/agenda")} className='px-[12px] py-[10px] rounded-[5px] yellowbackcolor flex gap-2 text-[13px] lg:text-[16px]'>
        <img src={left} alt="" />
        <span>DÉCOUVRIR NOTRE AGENDA</span>
    </button>
</div>
       </div>
       <div className='lg:w-[45%] lg:h-[616px] h-[310px]'>
            <img src={agenda} alt="" className='w-full h-full object-cover object-center' />
       </div>
    </div>
  )
}

export default Agendasection
