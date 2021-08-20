import React, { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab';
import { getAllGames } from '../../api/getGames'
import Items from './Item'

export default function List() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {

        const fetchAllGames = async () => {
            setLoading(true)
            const gameList = await getAllGames(currentPage);
            setData(gameList.results);
            setLoading(false)
        }
        fetchAllGames();
    }, [currentPage])

    return (
        <>
            <Items data={data} loading={loading} />
            {!loading &&
                <div className='pagination-wraper'>
                    <Pagination count={10} defaultPage={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                </div>
            }
        </>

    )
}
