import React from 'react'
import Head from 'next/head'


function header({title}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content="Game Hub" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.png" />
            </Head>          
        </>
    )
}

export default header
