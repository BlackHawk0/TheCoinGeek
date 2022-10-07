import React from 'react'
import RenderCoin from './RenderCoin'

function Coins({coins}) {
    return (
        <div>
            <div>
                <div>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p>Volume</p>
                    <p>Market Cap</p>
                </div>

                {coins.map(coin => (
                    <RenderCoin 
                        key={coin.id}
                        coin={coin}
                    />
                ))}
            </div>
        </div>
    )
}

export default Coins
