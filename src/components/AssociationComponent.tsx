import React from 'react'


interface propsTitleAssociation {
   title: string,
   description:string
}


const AssociationComponent:React.FC <propsTitleAssociation>= ({title, description}) => {
    return (
        <div className=' w-full h-auto flex flex-col justify-center items-center' >
            <p className='text-[11px] font-bold orangecolor'>{title}</p>
            <h2 className="texth2 font-bold">{description}</h2>
        </div>
    )
}

export default AssociationComponent
