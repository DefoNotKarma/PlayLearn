import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CSS/application.css';
import defaultPFP from './images/defaultPFP.jpg';

function Application() {

  const [Obj, setObj] = useState();

  useEffect(() => {

    axios.post('/api/application')
    .then((response) => {
      setObj(response.data)
    })
    .catch((err) => {
      console.log("error: " ,err);
    })

  }, [])

  return (

    <div className='app'>
      <div className='navbar'>
      <div className="navbar-left">
        <p>Home</p>
        <p>Explore</p>
        <p>Questions</p>  
      </div>
        <div className="navbar-right">
          <img className="profile-pic" src={(Obj && Obj.coverImg) ? Obj.coverImg : defaultPFP} draggable="false"></img>
          <p>{ (Obj && Obj.username) ? Obj.username : 'username'}</p>
        </div>
      </div>
      <div className="app-body">
        <h1>Hello, {Obj && Obj.username ? Obj.username : 'username'}</h1>
       
      </div>
    </div>
  );
}

export default Application;