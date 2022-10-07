import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import '../index.css'

const Coin = ()=> {

    const params = useParams()
    const [coin, setCoin] = useState({})

    
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setCoin(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <div className='flex flex-col bg-gray-900 rounded-lg shadow pt-2.5 px-2.5 max-w-3xl'>
                <div className='flex flex-col bg-gray-900 rounded-lg shadow pt-2.5 px-2.5 max-w-3xl'>
                    <h1>{coin.name}</h1>
                </div>
                <div>
                    <div>
                        <span className='rank'>Rank #</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coin