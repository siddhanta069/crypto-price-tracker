import React, { useState, useContext, useEffect } from 'react'
import { CoinContext } from '../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])
  const [input, setInput] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value)
    if (event.target.value === '') {
      setDisplayCoin(allCoin)
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault()
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }

  useEffect(() => {
    setDisplayCoin(allCoin)
  },[allCoin])

  return (
    <div className='px-75 pb-24'>
      <div className="max-w-4xl my-20 flex flex-col items-center text-center gap-5">
        <h1 className='text-4xl font-bold'>Largest <br/> Crypto Marketplace</h1>
        <p className='w-[75%] text-[#e3e3e3] h-[1.5]'>Welcome to the world's largest cryptocurrency
          marketplace.Sign up to explore more about your favorite cryptocurrencies.
        </p>
        <form onSubmit = {searchHandler} className='flex justify-between items-center max-w-md p-2 gap-4 font-semibold bg-white rounded-sm'>

          <input onChange = {inputHandler} value = {input} list = 'coinlist' type = "text" placeholder='Search crypto..' className='flex font-sans border-none outline-none pl-1.5 text-black' required></input>
          <datalist id='coinlist'>
            {
              allCoin.map((item, index) => (<option key = {index} value = {item.name} />))
            }
          </datalist>


          <button type='submit' className='border-none bg-[#7927ff] font-sans px-4 py-0.5 text-white rounded-sm cursor-pointer '>Search</button>
        </form>
      </div>
      <div className="max-w-3xl m-auto bg-gradient-to-r from-fuchsia-900 to-blue-700 rounded-2xl">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-[10px] items-center border-b border-[#3c3c3c]">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className='text-center'>24h Change</p>
          <p className='text-right '>Market Cap</p>
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to = {`/coin/${item.id }`} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-[10px] items-center border-b border-[#3c3c3c] last:border-none' key = {index}>
              <p>{item.market_cap_rank}</p>
              <div className='flex items-center gap-2  '>
                <img className = "w-5 " src = {item.image} alt = "" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className = {item.price_change_percentage_24h > 0? "text-green-500 text-center" : "text-red-500 text-center"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
              <p className='text-right'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
