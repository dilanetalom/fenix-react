import React from 'react'
import asso1 from "../images/asso1.png"

const AssociaHeaderSection: React.FC = () => {
    return (
        <div className='w-full lg:h-[544px] graybackcolor'>
            <div className='w-full h-full flex lg:flex-row flex-col gap-8 '>
                <div className='lg:w-1/2 h-full lg:pl-40 px-10 lg:px-0 py-20 text-white flex flex-col gap-8'>
                    <h1 className='texth1 font-bold mt-10 lg:mt-0 '>
                    Découvrez l'âme de
                    notre association
                    </h1>
                    <p className='text-[13px]'> 
                    Plongez au cœur de notre engagement ! Notre association œuvre sans relâche pour 
                    promouvoir la culture, l'éducation et l'épanouissement des talents littéraires. 
                    À travers des projets innovants, des événements inspirants et des initiatives solidaires,
                     nous nous efforçons de créer un impact réel et durable dans la communauté. 
                     Explorez notre histoire, nos objectifs et les nombreuses activités qui font 
                    de nous un acteur clé du développement culturel. Ensemble, écrivons l’avenir !
                    </p>
                    <button className='lg:w-[289px] w-[239px] lg:h-[46px] h-[42px] px-[12px] py-[10px] orangebackcolor rounded-full lg:text-[16px] text-[13px]'>
                    Contactez-nous dès maintenant
                    </button>
                </div>
                <div className='lg:w-1/2 h-full'>
                <img src={asso1} alt="" className='w-full h-full object-cover object-center' />
                </div>
            </div>
        </div>
    )
}

export default AssociaHeaderSection
