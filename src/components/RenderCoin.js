import React from 'react'
import '../index.css'

function RenderCoin({coin}) {
  return (
    <div className='coin-row'>
        <p>{coin.market_cap_rank}</p>
        <div className='flex items-center'>
            <img src={coin.image} alt={coin.name} className='h-10 mr-2 w-auto'/>
            <p>{coin.symbol}</p>
        </div>
        <p>{coin.current_price}</p>
        <p>{coin.price_change_percentage_24h}</p>
        <p>{coin.total_volume}</p>
        <p>{coin.market_cap}</p>
    </div>
  )
}

export default RenderCoin