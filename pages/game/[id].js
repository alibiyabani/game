import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import GameDetail from '../../components/gameDetails/Details'

import {getGameDetail} from '../../api/getDetails'
import Header from '../../components/header/header'


function Game() {
    const router = useRouter();
    const [data,setData] = useState([])
    const [des,setDes] = useState('')
    const [loading,setLoading] = useState(false)

    useEffect(()=> {
        const fetchGameDetail = async () => {
            setLoading(true)
            const response = await getGameDetail(router.query.id)
            setData(response)
            setDes(response.description.replace(/[<p></p><br/>]/g, ''))
            setLoading(false)
        }
        fetchGameDetail();
    },[])

    return (
        <>
            <div>
                <Header title={data.name}/>
            </div>
                <GameDetail data={data} loading={loading} des={des}/>
        </>
    )
}

export default Game
