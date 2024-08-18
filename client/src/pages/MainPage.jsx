import React from 'react'
import '../css/MainPage.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <div className='main-page'>
        <div className='header'>
        <header>
            <Header/>
        </header>
        </div>
        <div className='main'>
        <main>
        <h1>Main Page</h1>
        
        <p>Welcome to Finance Tracker, your all-in-one solution for managing and tracking your financial life. Whether you're budgeting for a dream vacation, saving for a major purchase, or simply trying to understand your spending habits, our app makes it effortless to stay on top of your finances. With intuitive tools to monitor expenses, manage bills, and set savings goals, [App Name] provides real-time insights that empower you to make informed financial decisions. Start your journey towards financial freedom today and experience the peace of mind that comes with being in control of your money.</p>
        <div className=''>
            <Link to='/sign-up'>
            <button type='submit'>Sign Up</button></Link>
            <Link to='/login'>
            <button type='submit'>Login</button></Link>

        </div>
        </main>
        </div>
        
       
        <div className='footer'>
        <footer >
            <Footer/>
        </footer>
        </div>
        
    </div>
  )
}

export default MainPage