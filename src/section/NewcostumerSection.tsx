import React from 'react'
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import person3 from '../images/person3.png'

const Newcostumer:React.FC = () => {
    const data =[
        {
          id:1,
          img:person1,
          description:"Travailler avec Finix a été un véritable atout pour notre entreprise. Leur expertise en étanchéité nous a permis de résoudre des problèmes que nous trainions depuis des années. Je recommande vivement leurs services.",
          name:"Jean Dupont",
          title:"Directeur Technique, ConstructPro"
        },
        {
          id:2,
          img:person2,
          description:"La sécurité incendie de nos bâtiments est une priorité et Finix a su nous proposer des solutions à la hauteur de nos attentes. Leur professionnalisme est indéniable et les résultats parlent d'eux-mêmes.",
          name:"Marie Leclerc",
          title:"Responsable de Maintenance, Bâtiments Durables"
        },
        {
          id:3,
          img:person3,
          description:"Travailler avec Finix a été un véritable atout pour notre entreprise. Leur expertise en étanchéité nous a permis de résoudre des problèmes que nous trainions depuis des années. Je recommande vivement leurs services.",
          name:"Paul Kouam",
          title:"Chef de Projet, Urban Build"
        },
      ]
  return (
    <div className='w-full container  py-16 h-auto flex flex-col mx-auto space-y-10'>
    <div className='lg:w-[522px]'>
      <h2 className='lg:text-[40px] text-[19px] font-bold'>Nos clients nous adorent
        </h2>
      <div className='w-[116px] h-1 orangebackcolor rounded-md'></div>
    </div>

    <div className='grid lg:grid-cols-3 lg:gap-20 gap-6'>

     {
      data.map((item)=>{
        return(
          <div className='flex flex-col space-y-8'key={item.id}>
          <div className='text-justify'>
      {item.description}
          </div>
          <div>
           <div className='h-10 w-10 rounded-full '>
            <img src={item.img} alt="" />
           </div>
           <div>
             <span className='font-bold italic'>{item.name}</span><br />
             <span className='italic text-[13px]'>{item.title}</span>
           </div>
          </div>
       </div>
        )
      })
     }
    </div>
  </div>
  )
}

export default Newcostumer;
