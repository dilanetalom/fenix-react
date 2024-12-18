import React, { useEffect } from 'react'
import Layouts from '../partials/Layouts'
import Newsletter from '../section/NewsletterSection'
import SocialNetwork from '../section/SocialNetworkSection'
import Newcostumer from '../section/NewcostumerSection'
import Question from '../section/QuestionSection'
import Header from '../section/HeaderSection'
import Filter from '../section/FilterSection'
import Whychoice from '../section/WhychoiceSection'
import Typebook from '../section/TypebookSection'
// import Agendasection from '../section/Agendasection'
import News from '../section/NewsSection'
import CustomSlider from '../section/BestbookSection'
import young from "../images/young.png"
import { useNavigate } from 'react-router-dom'


const Accueil: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0); // Fait défiler vers le haut de la page
    }, []); //
    return (
        <div className='relative'>
            <Layouts>
                <div className='w-full h-auto'>
                    <Header />
                    <Filter />
                    <Whychoice />
                    <Typebook />
                    {/* <Agendasection/> */}
                    <div className='w-full h-[576px] relative'>
                        <img src={young} alt="" className='w-full h-full object-cover object-center' />
                        <div className='w-full h-full container absolute flex items-center '>
                            <div className='lg:w-[467px] w-[374px] lg:h-[363px] h-[225px] bg-white lg:p-10 p-6 rounded-[5px] flex flex-col justify-around items-center md:items-start'
                                data-aos="zoom-in"
                            >
                                <p className='lg:text-[33px] text-[16px] font-bold'>Une question ou un projet en tête ?</p>
                                <p className='text-[13px] text-center text-start'>Contactez-nous dès maintenant pour en savoir plus
                                    ou collaborer avec nous !</p>
                                <button onClick={() => navigate('/contact')} className='lg:w-[181px] w-[157px] h-[46px] px-[25px] py-[12px] orangebackcolor lg:text-[16px] text-[13px] rounded-[5px] text-white font-bold'>Nous Contacter</button>
                            </div>
                        </div>
                    </div>
                    <CustomSlider />
                    <News />
                    <Newcostumer />
                    <Question />
                    <SocialNetwork />
                    <Newsletter />
                </div>
            </Layouts>
        </div>
    )
}

export default Accueil
