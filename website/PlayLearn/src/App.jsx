import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Application from './components/Application.jsx';
import Login from './components/LoginPage.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import Pref from './components/App-routes/preferences.user.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/application' element={<Application />} />
          <Route path='/register' element={<Register />} />
        


          <Route path='/u/pref' element = {<Pref/>} />
        </Routes> 
      </Router>
    </>
  )
}

export default App
