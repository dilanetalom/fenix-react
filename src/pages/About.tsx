import React from 'react'
import Layouts from '../partials/Layouts'
import about from "../images/about.png"
import about1 from "../images/about1.png"
import team1 from "../images/Ellipse 25.png"
import team2 from "../images/Ellipse 26.png"
import team3 from "../images/Ellipse 27.png"
import team4 from "../images/Ellipse 28.png"
import Newsletter from '../section/NewsletterSection'

const About: React.FC = () => {
    const team = [
        {
            id: 1,
            image: team1,
            title: "Émilie Koffi",
            description: "Directrice éditoriale"
        },
        {
            id: 2,
            image: team2,
            title: "Thomas Ngandu",
            description: "Responsable des relations auteurs"
        },
        {
            id: 3,
            image: team3,
            title: "Sophie Ndonga",
            description: "Graphiste et Maquettiste"
        },
        {
            id: 4,
            image: team4,
            title: "Jean-Pierre Kouassi",
            description: "Chargé de communication"
        },
    ]
    return (
        <>
            <Layouts>
                <div>
                    <div className='w-full h-[313px] graybackcolor mt-20 lg:mt-0'>
                        <div className='container h-full w-full flex flex-row items-center px-20 lg:px-0'>

                            <div className='w-[680px] flex flex-col justify-center'>
                                <h1 className='texth1 text-white font-bold'>À Propos de Nous</h1>
                                <p className='text-[13px] text-white'>Découvrez l’histoire de notre maison d’édition,
                                    dédiée à la promotion des talents littéraires. Nous allions tradition et innovation
                                    pour offrir une plateforme aux auteurs et faire découvrir leurs œuvres au monde entier.
                                    Notre mission : publier des livres qui inspirent, éduquent, et divertissent.</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[510px] '>
                        <img src={about} alt="" className='w-full h-full object-cover object-center' />
                    </div>

                    <div className='w-full h-auto py-20 opacitybackcolor'>
                        <div className='container flex mx-auto'>
                            <div className='w-full h-auto flex lg:flex-row flex-col  gap-10'>
                                <div className='lg:w-[40%] flex flex-col justify-center items-center'>
                                    <img src={about1} alt="" className='w-full h-[438px] object-cover object-center rounded-[10px]' />
                                    <p className='text-center w-[135px] text-center text-[11px]'>Founder & CEO de Finex
                                        Rosine Tchofo</p>
                                </div>
                                <div className='lg:w-[60%]'>
                                    <p className='text-justify'>Mme Rosine Tchofo a toujours été fascinée par les mots et les histoires,
                                        même bien avant de savoir qu’elle en ferait sa vie. C’est cette passion pour
                                        la littérature qui l’a guidée tout au long de son parcours, des bancs de l’université en
                                        lettres modernes jusqu’aux bureaux de maisons d’édition renommées. Pendant plusieurs années,
                                        elle a travaillé dans l’ombre,
                                        apprenant, observant, mais toujours avec ce rêve en tête : créer sa propre maison d’édition.

                                        En 2017, ce rêve est devenu réalité avec la naissance de Finex. Son ambition n’a
                                        jamais été de faire de gros chiffres,
                                        mais de donner une chance aux auteurs d’exprimer leurs voix, parfois trop souvent
                                        oubliées dans un marché saturé. Rosine Tchofo a toujours cru en la diversité des
                                        talents, qu’il s’agisse d’auteurs confirmés ou de jeunes plumes qui n’attendent qu’une opportunité.
                                        Elle est convaincue qu’une belle histoire mérite d’être lue, peu importe d’où elle vient.</p>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='w-full h-auto pb-20 opacitybackcolor'>
                        <div className='container flex mx-auto'>
                            <div className='w-full h-auto flex lg:flex-row flex-col gap-10'>

                                <div className='lg:w-[55%] flex flex-col gap-5'>
                                    <h2 className='texth2 font-bold'>
                                        Histoire de la Création de la <span className='graycolor'>Maison d’Édition Finex</span>
                                    </h2>
                                    <p className='text-[13px]'>Finex a vu le jour en 2017, après des mois de réflexions,
                                        d’hésitations, et beaucoup de café. L’idée n’était pas simplement
                                        de créer une autre maison d’édition parmi tant d’autres, mais un lieu où
                                        la créativité et l’authenticité primeraient. Pour Mme Rosine Tchofo,
                                        chaque auteur est unique, et chaque livre a son propre chemin à suivre.
                                    </p>
                                    <p className='text-[13px]'>Depuis sa création, la maison s’est donnée pour mission de proposer
                                        aux lecteurs des œuvres qui ne laissent pas indifférent. Elle s’adresse
                                        à tous ceux qui aiment se plonger dans des récits qui font réfléchir, qui
                                        émeuvent ou qui divertissent. Avec le temps, la maison a su se faire une
                                        place, petite mais solide, dans le monde littéraire,
                                        en publiant des livres qui, selon elle, méritent d’être lus et partagés.
                                    </p>
                                    <p className='text-[13px]'>
                                        Chaque ouvrage publié est le fruit d’une collaboration étroite avec
                                        les auteurs. La maison d'édition prend le temps de travailler main
                                        dans la main avec eux pour que chaque livre reflète au mieux l’âme de
                                        son auteur tout en s’assurant d’une qualité éditoriale irréprochable.
                                        Aujourd’hui, Finex continue de grandir avec,
                                        à sa tête, une passionnée qui, chaque jour, met tout son cœur dans ce projet.
                                    </p>
                                </div>
                                <div className='lg:w-[45%] flex flex-col justify-center items-center'>
                                    <img src={about1} alt="" className='w-[446px] h-[446px] object-cover object-center rounded-[10px]' />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-auto py-24 flex flex-col gap-20'>
                        <div className='w-full flex flex-col justify-center container items-center'>
                            <h3 className='text-[33px] font-bold'>Notre Équipe Passionnée</h3>
                            <p>Découvrez les visages qui, au quotidien, travaillent avec passion pour faire rayonner la littérature.</p>
                        </div>
                        <div className='w-full h-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-5 pb-10 container mx-auto'>
                            {
                                team.map((item) => {
                                    return (
                                        <div className='h-[255px] flex flex-col justify-center items-center' key={item.id}>
                                            <div className=' md:h-[230px]  rounded-full '>
                                                <img src={item.image} className='w-[230px] h-full object-cover object-center rounded-full' alt="" />
                                            </div>
                                            <div className='flex flex-col items-center justify-center'>
                                                <p className='font-bold text-center'>{item.title}</p>
                                                <p className='text-center text-[11px]'>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>
                <Newsletter />
            </Layouts>
        </>
    )
}

export default About