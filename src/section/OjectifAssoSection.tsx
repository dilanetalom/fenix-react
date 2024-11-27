import React from 'react'
import assobook from "../images/assobook.png"
import as1 from "../images/as1.png"
import as2 from "../images/as2.png"
import as3 from "../images/as3.png"
import as4 from "../images/as4.png"


const OjectifAssoSection: React.FC = () => {

    const datas = [
        {
            id: 1,
            image: as1,
            description: "Promouvoir la lecture et l'écriture dans les communautés locales."
        },
        {
            id: 2,
            image: as2,
            description: "Offrir une plateforme aux jeunes auteurs."
        },
        {
            id: 3,
            image: as3,
            description: "Organiser des événements culturels pour valoriser les talents"
        },
        {
            id: 4,
            image: as4,
            description: "Encourager le don et la circulation de livres dans les écoles et bibliothèques."
        },
    ]
    return (
        <div className='w-full md:h-[721px] h-[750px]  relative graybackcolor'>

            <div className=' w-full h-full   absolute'></div>
            <img src={assobook} alt="" className='w-full h-full object-cover object-center absolute' />
            <div className='text-white absolute w-full md:h-full h-auto flex items-center mx-auto   '>
                <div className='relative w-full flex flex-col lg:gap-20 gap-10 justify-center container mx-auto  '>
                    <h2 className='texth2 font-bold text-center'>Objectifs de notre l'Association</h2>

                    <div className='flex lg:flex-row  flex-col w-full gap-10 lg:gap-0'>

                        <div className=' lg:w-1/2 flex justify-start items-center '>
                            <div className='w-[466px] lg:h-[224px]  font-montecarlo texth2 '>
                                "   Un livre ouvert est une porte vers un monde meilleur.
                                À travers nos objectifs, nous bâtissons des ponts entre
                                les esprits et les cœurs. "
                            </div>
                        </div>

                        <div className='lg:w-1/2 grid grid-cols-2  gap-3'>
                            {
                                datas.map((item) => {
                                    return (
                                        <div key={item.id} className=' lg:h-[189px] h-[124px] rounded-[22px] border-[1px] border-white p-5'>
                                            <div className='w-full h-1/2 '>
                                                <img src={item.image} alt="" className='lg:w-[50px] w-[33px] lg:h-[50px] h-[33px] ' />
                                            </div>
                                            <div className='w-full h-1/2 md:text-[16px] text-[9px]'>
                                                {item.description}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OjectifAssoSection
