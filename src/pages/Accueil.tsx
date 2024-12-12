import React from 'react'
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

const Accueil: React.FC = () => {
    return (
        <div className='relative'>
            <Layouts>
                <div className='w-full h-auto'>
                    <Header/>
                    <Filter/>
                    <Whychoice/>
                    <Typebook/>
                    {/* <Agendasection/> */}
                    <CustomSlider/>
                    <News/>
                    <Newcostumer/>
                    <Question/>
                    <SocialNetwork/>
                    <Newsletter/>
                </div>
            </Layouts>
        </div>
    )
}

export default Accueil
