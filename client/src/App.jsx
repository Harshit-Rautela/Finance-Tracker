import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import PaymentDetails from './pages/PaymentDetails'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>       
        <Route path='/home' element={<Home/>}/>
        <Route path='/payment-details' element={<PaymentDetails/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
