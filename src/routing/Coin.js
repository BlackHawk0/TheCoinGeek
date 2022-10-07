import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

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
        <div>{coin.id}</div>
    )
}

export default Coin