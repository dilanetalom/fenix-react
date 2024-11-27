import React from 'react'

const StoryAssoSection: React.FC = () => {
    return (
        <div className='w-full lg:h-[583px] bg-white '>
            <div className="w-full  h-full  container grid lg:grid-cols-2 grid-cols-1  py-20 lg:py-20 gap-8 mx-auto items-center">
                <div className='lg:h-[316px] flex items-center'>
                    <video className="w-full rounded-lg shadow-lg" controls>
                        
                           
                    </video>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className="texth2 font-bold">
                        <span>Notre </span>
                        <span className='graycolor'> Histoire</span>
                    </h2>
                    <p className='text-[13px]'>
                        Créée en [année] par des passionnés de littérature, notre association
                        a vu le jour avec la volonté de rendre la culture accessible à tous.
                        Depuis, elle a organisé plus de 50 événements littéraires, publié des ouvrages
                        engagés et collaboré avec des institutions locales et internationales.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StoryAssoSection
