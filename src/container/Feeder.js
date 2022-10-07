import React, {useEffect, useState} from 'react'
import Coins from '../components/Coins'

function Feeder() {
    const [coins, setCoins] = useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data => setCoins(data))
        .catch((error )=> console.log('Error:', error))
    },[])
    console.log(coins);

    return (
        <div>
            <Coins coins={coins}/>
        </div>
    )
}

export default Feeder