import React from 'react'


interface wishesProps {
    title: string;     
    textbuton: string;     
    handleFunction: () => void;
}

const WishesComponent: React.FC <wishesProps> = ({ title, textbuton, handleFunction}) => {
    return (
        <div className='bg-white'>
            <div className='container py-20 flex flex-col items-center justify-center mx-auto gap-10'>
                <h2 className='texth2 font-bold text-center'>{title}</h2>
                <button onClick={handleFunction} className='p-[15px] rounded-[5px] md:w-[347px] text-white font-bold graybackcolor'>{textbuton}</button>
            </div>
        </div>
    )
}

export default WishesComponent