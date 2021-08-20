import React from 'react'

function Platform({data}) {

    let platformList = data.platforms.map((item, index) => {
        return (
                <span key={index} className='platform'>
                    {item.platform.name},
                </span>
        );
      });

    return (
        <>
            {platformList}
        </>
    )
}

export default Platform
