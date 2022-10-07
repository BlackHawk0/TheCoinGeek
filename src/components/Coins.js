import React from 'react'
import CoinItem from './RenderCoin'
import Coin from '../routing/Coin'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import '../index.css'

//map over the coins
function  Coins ({coins}){
    return (
        <div className='max-w-screen-lg m-auto'>
            <div>
                <div className='flex flex-row justify-between items-center bg-gray-900 rounded-lg font-bold mx-4 my-8 py-3 px-4 shadow-sm'>
                    <p>#</p>
                    <p className='-ml-16'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {coins === undefined || coins.length === 0 ? <Spinner /> : coins.map(coin => {
                    return (
                        <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                            <CoinItem coin={coin} />
                        </Link>

                    )
                })}

            </div>
        </div>
    )
}

export default Coins
