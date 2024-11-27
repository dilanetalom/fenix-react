import React from 'react'
import AssociationComponent from '../components/AssociationComponent'
import act1 from "../images/act1.png"
import act2 from "../images/act2.png"
import act3 from "../images/act3.png"
import act4 from "../images/act4.png"
import act5 from "../images/act5.png"


const ActivityAssoSection: React.FC = () => {


 

    const datas = [
        {
            id: 1,
            icon: act3,
            title: "Organisation de salons littéraires."
        },
        {
            id: 2,
            icon: act2,
            title: "Ateliers d’écriture créative."
        },
        {
            id: 3,
            icon: act4,
            title: "Séances de lecture publique."
        },
        {
            id: 4,
            icon: act5,
            title: "Camps de lecture pour enfants et jeunes."
        },
        {
            id: 5,
            icon: act1,
            title: "Développement de clubs de lecture en milieu scolaire"
        },
    ]

    
    return (
        <div className='w-full h-auto bg-white'>
            <div className='w-full h-auto container py-20 flex flex-col mx-auto gap-20'>

                <AssociationComponent
                    title='Nos Activités'
                    description="Activités de l'Association"
                />
                <div className='w-full lg:h-[316px]  flex lg:flex-row flex-col gap-10 lg:gap-0'>
                    <div className="lg:w-1/2 h-full flex flex-col gap-5">
                        {
                            datas.map((item) => {
                                return (
                                    <div key={item.id} className='flex flex-row gap-5 items-center'>
                                        <div className='w-[52px] h-[45px] orangebackcolor flex justify-center items-center'>
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className='text-[13px] lg:w-full w-[311px]'>
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="lg:w-1/2 h-full">
                        <video className="w-full h-full rounded-lg shadow-lg" controls>

                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityAssoSection
