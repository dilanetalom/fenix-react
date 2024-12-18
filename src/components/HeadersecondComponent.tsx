import React, { useEffect } from 'react'


interface headersecondProps {
    title: string;        
}

const HeadersecondComponent:React.FC <headersecondProps> = ({ title}) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Fait défiler vers le haut de la page
    }, []); 
  return (
    <div className='h-auto w-full bg-yellow-100 md:px-12 mt-20 lg:mt-0'>
                    <div className='container h-[228px] flex items-center  '>
                        <div className='w-[351px] '>

                            <h1 className='font-bold texth1 '  data-aos="fade-right">
                               {title}
                            </h1>
                        </div>
                    </div>
                </div>
  )
}

export default HeadersecondComponent