import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom' 
import { CoinContext } from '../context/CoinContext'
import LineChart from '../components/LineChart'

const coin = () => {


  const { coinId } = useParams()
  const [coinData, setCoinData] = useState()
  const [historicalData, setHistoricalData] = useState()

  const { currency } = useContext(CoinContext)

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
          'x-cg-demo-api-key': 'CG-NAMUMfQhMFXEHCm2VDek1hDJ	'
      }
    }
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
    
  }

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET', 
      headers: {
        accept: 'application/json',
          'x-cg-demo-api-key': 'CG-NAMUMfQhMFXEHCm2VDek1hDJ	'
      }
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));

  }

  useEffect(() => {
    fetchCoinData()
    fetchHistoricalData()
  }, [currency])

  if(coinData && historicalData) {
      return (
      <div className='px-96'>
        <div className='flex flex-col items-center my-16 gap-5 mx-auto mb-2'>
          <img src = {coinData.image.large} alt='' className='max-w-24 '/>
          <p className='font-mono text-3xl'><b className='text-2xlxl'>{coinData.name}({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="max-w-4xl m-auto h-96 py-5">
          <LineChart  historicalData = {historicalData}/>
        </div>

        <div className="flex flex-col max-w-2xl my-2 pl-20">
          <ul className='flex justify-between py-4 border-b border-[#5f5d5f]'>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul className='flex justify-between py-4 border-b border-[#5f5d5f]'>
            <li>Current Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between py-4 border-b border-[#5f5d5f]'>
            <li>Market cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between py-4 border-b border-[#5f5d5f]'>
            <li>24hr high</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between py-4 border-b border-[#5f5d5f]'>
            <li>24hr low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
        
      </div>
    )
  }else {
      return (
        <div className='grid place-items-center h-screen'>
          <div className='w-6 h-6 place-self-center border-2 border-[#bdbdbd] border-t-[#4500c6] rounded-full animate-spin'>
        
          </div> 
          
        </div>
    )
  }
  
}

export default coin
