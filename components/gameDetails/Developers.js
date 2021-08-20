import React from 'react'

function Developers({data}) {


    let developersList = data.developers.map((item,index)=>{

        return <span key={index} className='developers' >{item.name},</span>
    });

    return (
        <>
            {developersList}
        </>
    )
}

export default Developers
