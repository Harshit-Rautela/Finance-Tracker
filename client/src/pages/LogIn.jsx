import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/LogIn.css'
import { LogInFunction } from '../services/LogInApi'
const LogIn = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const formData = {email,password};
    const data = await LogInFunction(formData);
      console.log("LogIn successful",data)
      localStorage.setItem('token',data.token);
      navigate('/home');     
    } catch (error) {
      console.log("The login was unsuccessful:",error);      
    }   
 } 
  return (
    <div className='login'>
      <div className='main-form'>
        <h1>Log In  form</h1>
     
          <form className='form' onSubmit={handleSubmit}>
            <p>Hey this is the Login form. Please fill out your details for logging in.</p>
            <br/>
            <br/>
            <label name = 'name' htmlFor='name' >Enter your Name</label>
            <input className='label' id = 'name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label name = 'email' htmlFor='email'>Enter your Email</label>
            <input className='label' id = 'email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label name = 'password' htmlFor='password'>Enter your Password</label>
            <input className='label' id = 'password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type='submit' className='button'>Log In</button>
          </form>
        
      </div>
    </div>
  )
}

export default LogIn