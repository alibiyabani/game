import React from 'react'
import Image from 'next/image'
import CircularProgress from '@material-ui/core/CircularProgress';
import RatingsGame from './Ratings'
import PlatformGame from './Platform'
import DevelopersGame from './Developers'


export default function Details({data,loading,des}) {

    if(loading){
        return (

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 50 }}>
                <CircularProgress color="secondary" />
                <span style={{ marginTop: 20 }}>Loading...</span>
            </div>
        )
    }

    return (
        <div className='details-wraper'>
            <h1>{data.name}</h1>
            <div className='detail'>
                <div className='image'>
                    {data.background_image &&
                        <img src={`${data.background_image}`}   alt={`${data.name}`} />
                    }                 
                </div>
                <div className='content'>
                    <div style={{textAlign:'left'}}>
                        <h3 style={{margin:0}}>Description</h3>
                        <p style={{marginTop:4}}>{des}</p>
                    </div>
                    {data.genres &&
                        <>
                            <h3>Genres</h3>
                            <div className='genres-wraper'>
                                {data.genres.map((item, index) => (
                                    <div key={index} >
                                        <div className='item'>{item.name}</div>
                                    </div>
                                ))} 
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className='more-details'>
                <div>
                    {data.ratings &&
                        <>
                            <h3>Rating</h3>
                            <RatingsGame data={data}/>
                        </>
                    }
                </div>
                <div>
                    {data.platforms &&
                        <>
                            <h3>Platforms</h3>
                            <PlatformGame data={data}/>
                        </>
                    }
                </div>
                <div>
                    {data.developers &&
                        <>
                            <h3>Developers</h3>
                            <DevelopersGame data={data}/>
                    </>            
                    }
                </div>
                <div>
                    <h3>Website</h3>
                    <span className='website' onClick={()=>{window.open(`${data.website}`)}}>{data.website}</span>
                </div>       
            </div>
        </div>

    )
}
