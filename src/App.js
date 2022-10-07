import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Coins from './components/Coins'

function App() {
    const [coins, setCoins] = useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data => setCoins(data))
        .catch((error )=> console.log('Error:', error))
    },[])
    console.log(coins);

    return (
        <>
        <NavBar />
        <Routes>
            <Route path='' element={<Coins coins={coins}/>}/>
        </Routes>
            
        </>
    );
}

export default App;
