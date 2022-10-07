import React from 'react'
import '../index.css'

//render coin information (Home)
function RenderCoin({coin}) {
  
  return (
    <div className='coin-row'>
      <p>{coin.market_cap_rank}</p>
      <div className='flex items-center'>
        <img src={coin.image} alt={coin.name} className='h-10 mr-2 w-auto' />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>${coin.current_price.toLocaleString()}</p>
      <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default RenderCoin