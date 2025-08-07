import React from 'react'
import logo from '../assets/logo.png'
import arrow_icon from '../assets/arrow_icon.png'

const Navbar = () => {
  return (
    
    <div className = "px-60 py-2 flex justify-between items-center border-b border-[#3c3c3c]" >
      <img src = {logo} alt = "" className= "w-30"/>
      <div>
        <ul className='flex gap-10'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Features</li>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>Blog</li>
        </ul>
      </div>
      <div className='flex items-center gap-5'>
        <select className='p-1 rounded-2xl border-2 border-white bg-transparent text-white '>
            <option value= "usd" className='bg-[#09005c] text-white'>USD</option>
            <option value= "eur" className='bg-[#09005c] text-white'>EUR</option>
            <option value= "inr" className='bg-[#09005c] text-white'>INR</option>
        </select>
        <button className='flex items-center gap-2 px-4 py-1 rounded-2xl text-[#393939] bg-white border-none cursor-pointer'>Sign up
            <img src={arrow_icon} alt="" className = 'w-3' />
        </button>
      </div>
    </div>

  )
}

export default Navbar
