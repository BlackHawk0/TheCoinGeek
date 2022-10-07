import React from 'react'
import Coins from './Coins'

function RenderCoin({coin}) {
  return (
    <div>
        <p>{coin.market_cap_rank}</p>
        <div>
            <img src={coin.image} alt={coin.name} />
        </div>
        <p>{coin.current_price}</p>
        <p>{coin.price_change_percentage_24h}</p>
        <p>{coin.total_volume}</p>
        <p>{coin.market_cap}</p>
    </div>
  )
}

export default RenderCoin