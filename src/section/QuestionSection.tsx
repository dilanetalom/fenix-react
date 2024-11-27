import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../App.css';
import 'primeicons/primeicons.css'; 



const Question:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIcon = (index: number | null) => {
        return activeIndex === index ? 'pi pi-minus' : 'pi pi-plus';
    };

    
  const handleTabChange = (newIndex: number | null) => {
    const index = newIndex === activeIndex ? null : newIndex;
    setActiveIndex(index);
  };


  return (
    <div className='w-full opacitybackcolor h-auto container pb-16 pt-10 flex flex-col justify-center mx-auto items-center space-y-10'>

    <div className='w-full flex flex-col justify-center items-center'>
        <div className='text-center lg:w-1/2'>
            <p className='lg:text-[40px] text-[19px] font-bold'>Questions</p>
            <p className='text-[13px] font-[400]'>Nous avons pris le soin de répondre à vos intérrogations. Si vous avez d'autres
                préoccupations,
                <a href="/contact" className=' font-[700] underline'>contactez-nous</a>
            </p>
        </div>
    </div>

    <div className='w-full flex justify-center '>
        <Accordion activeIndex={activeIndex} 
          onClick={() => handleTabChange(0)}
         className='lg:w-[90%] w-full opacitybackcolor'>
            <AccordionTab 
            
            header={
                <div className=" border-b-2 py-8 border-black border-opacity-50 flex justify-between">
                    <span className="header-text lg:text-[16px] text-[13px] font-bold">Qui êtes-vous ?</span>
                    <span className={`header-icon ${toggleIcon(0)}`}></span>
                </div>
            } className='w-full'>
                <p className="ml-2 text-justify py-3 lg:text-[16px] text-[13px]">
                Nous sommes une entreprise spécialisée dans la gestion technique 
                globale des bâtiments. Notre mission est d'assurer le bien-être et 
                la sécurité des occupants en gérant tous les aspects techniques, 
                que ce soit la plomberie, l'électricité, la climatisation ou la 
                sécurité incendie. On travaille avec une équipe d'experts pour 
                garantir que chaque bâtiment reste fonctionnel et confortable.
                </p>
            </AccordionTab>
            {/* Vous pouvez ajouter d'autres tabs ici avec des indices différents */}

            <AccordionTab
                header={
                    <div className="header-container border-b-2 py-8 border-black border-opacity-50 flex justify-between">
                        <span className="header-text lg:text-[16px] text-[13px] font-bold">Que proposez-vous comme services ?</span>
                        <span className={`header-icon ${toggleIcon(1)}`}></span>
                        
                    </div>
                } className=''>
                <p className="ml-2 text-justify py-3 lg:text-[16px] text-[13px] ">
                On propose une gamme complète de services techniques pour 
                les bâtiments. Ça inclut l'entretien et la gestion de systèmes 
                essentiels comme l'électricité, la ventilation, la plomberie, 
                mais aussi des services plus spécifiques comme la sécurité incendie, 
                la vidéosurveillance et la gestion des accès. L'idée, c'est que 
                vous n'ayez plus à vous 
                soucier des détails techniques, on s'en occupe pour vous.
                </p>
            </AccordionTab>
            <AccordionTab header={
                <div className="header-container border-b-2 py-8 border-black border-opacity-50 flex justify-between">
                    <span className="header-text lg:text-[16px] text-[13px] font-bold">Quels sont vos tarifs ?</span>
                    <span className={`header-icon ${toggleIcon(2)}`}></span>
                </div>
            } className=''>
                <p className="ml-2 text-justify py-3 lg:text-[16px] text-[13px] ">
                Nos tarifs dépendent de la taille et des besoins spécifiques 
                de chaque bâtiment. On s’adapte à chaque projet, que ce soit 
                un petit immeuble ou une grande résidence. Pour avoir une idée 
                plus précise, on propose souvent un devis gratuit 
                après une première analyse de vos installations et besoins.
                </p>
            </AccordionTab>
            <AccordionTab header={
                <div className="header-container border-b-2 py-8 border-black border-opacity-50 flex justify-between">
                    <span className="header-text lg:text-[16px] text-[13px] font-bold">Proposez-vous des offres ?</span>
                    <span className={`header-icon ${toggleIcon(3)}`}></span>
                </div>
            } className=''>
                <p className="ml-2 text-justify py-3 lg:text-[16px] text-[13px]">
                Oui, bien sûr ! On a souvent des offres pour les nouveaux
                 clients ou des réductions pour ceux qui optent pour des 
                 contrats d'entretien à long terme. Il y a aussi des packs
                  pour la gestion technique globale, qui couvrent plusieurs
                   services à un prix avantageux. 
                N'hésitez pas à nous contacter pour découvrir les offres du moment !
                </p>
            </AccordionTab>
            <AccordionTab header={
                <div className="header-container border-b-2 py-8 border-black border-opacity-50 flex justify-between">
                    <span className="header-text lg:text-[16px] text-[13px] font-bold">Pour qui travaillez-vous ?</span>
                    <span className={`header-icon ${toggleIcon(4)}`}></span>
                </div>
            } className=''>
                <p className="ml-2 text-justify py-3 lg:text-[16px] text-[13px] ">
                On travaille avec différents types de clients. 
                Cela va des propriétaires de PME comme des grandes entreprises, 
                en passant par les gestionnaires d'immeubles, les promoteurs immobiliers,
                 les investisseurs et même des particuliers pour des résidences. 
                 Chaque client a des besoins spécifiques et notre objectif est 
                 d'apporter une solution sur mesure.
                </p>
            </AccordionTab>
        </Accordion>
    </div>

</div>
  )
}

export default Question;
