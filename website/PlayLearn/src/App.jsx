import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={'/about'} />} />
          <Route path='/about' element={<About />} />
        </Routes> 
      </Router>
    </>
  )
}

export default App
