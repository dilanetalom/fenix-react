import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutsProps {
    children: ReactNode; // Typage de children
}

const Layouts:React.FC <LayoutsProps>= ({children}) => {
  return (
    <div className='w-[100wh] h-[100vh]'>
      <Navbar/>
      <div className='w-full h-auto lg:mt-[161px]'>
         {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layouts
