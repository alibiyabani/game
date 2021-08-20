import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CircularProgress from '@material-ui/core/CircularProgress';



export default function Item({ data, loading }) {

    if (loading) {

        return (

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 50 }}>
                <CircularProgress color="secondary" />
                <span style={{ marginTop: 20 }}>Loading...</span>
            </div>
        )
    }

    return (
        <div className='list-wraper'>
            {data.map((item, index) => (
                <div className='item' key={index}>
                    <Link href={`game/${item.id}`}>
                        <div>
                            <Image
                                src={`${item.background_image}`}
                                alt={`${item.name}`}
                                width={400}
                                height={200}
                                layout='intrinsic'
                            />
                        </div>
                    </Link>
                    <div className='title'>{item?.name}</div>
                </div>
            ))}
        </div>
    )
}
