import React,{useState} from 'react'
import '../css/SignUp.css'
import {useNavigate} from 'react-router-dom'
import { SignUpFunction } from '../services/SignUpApi'

const SignUp = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit=async(e)=>{
     e.preventDefault();
     try {
      const formData = {email,password,name};
     const data = await SignUpFunction(formData);
     if(data) console.log("SignUp successful:",data)
      console.log(data.$id);
      localStorage.setItem('token',data.$id);
      navigate('/home')       
     } catch (error) {
       console.log('The signup was not successful:', error);    
     }
  }
  return (
    <div className='sign-up'>
      <div className='main-form'>
        <h1>Sign Up form</h1>
     
          <form className='form' onSubmit={handleSubmit}>
            <p>Hey this is the sign-up form. Please fill out your details for registering.</p>
            <br/>
            <br/>
            <label name = 'name' htmlFor='name' >Enter your Name</label>
            <input className='label' id = 'name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label name = 'email' htmlFor='email'>Enter your Email</label>
            <input className='label' id = 'email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label name = 'password' htmlFor='password'>Enter your Password</label>
            <input className='label' id = 'password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type='submit' className='button'>Sign Up</button>
          </form>
        
      </div>
    </div>
  )
}

export default SignUp