import React from 'react'
import Navbar from './Navbar'
import '../css/Header.css'
const Header = () => {
  return (
    <div className='header'> 
      <h4>Finance Tracker</h4>
      <Navbar/>
    </div>
  )
}

export default Header