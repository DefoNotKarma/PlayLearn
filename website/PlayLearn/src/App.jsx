import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  return (
    <>

  <img src=".\src\images\logo.png" className='logo'/>

    <div className='wrapper'>
        <h2>Login To Your Learning</h2>
        <form action = './api/v1/PlayLearn' method='POST'>
          <div className='login-username'>
            <label>Username </label>
            <input type='text' name='Username'placeholder='Your Username' required/>
          </div>
          <div className='login-password'>
            <label>Password </label>
            <input type='password' name='Password' placeholder='Your Password' required/>
          </div>
          <button type='submit'>Submit</button>
        </form>

    </div>
    </>
  )
}

export default App
