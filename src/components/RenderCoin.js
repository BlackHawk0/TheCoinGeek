import React from 'react'

function RenderCoin({coin}) {
  return (
    <div>
        <p className='flex justify-between items-center bg-gray-900 shadow-sm rounded-lg mt-6 mr-4 ml-4 pt-2.5 pl-2.5 pr-2.5'>{coin.market_cap_rank}</p>
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