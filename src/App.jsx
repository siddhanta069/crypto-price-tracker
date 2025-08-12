import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Coin from './pages/coin.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className= "h-full bg-gradient-to-b from-[#4b7e85] via-[#4b8fb1] to-[#677da9] text-white font-outfit">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinid" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
