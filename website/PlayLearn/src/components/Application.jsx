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
      <button className='home'> <span>Home</span>
      </button>
      <div>
          <button class="button">
          <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
      Explore
      </button>
      </div>


<div className='que'>
  <button class="question">
  <svg className='svgIcon' fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon" stroke="#000000" stroke-width="47.104"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"></path> </g></svg>
  <div className='ques'>
  Questions
  </div>
  </button>
</div>

 

        
      </div>
        <div className="navbar-right">
          <img className="profile-pic" src={(Obj && Obj.coverImg) ? Obj.coverImg : defaultPFP} draggable="false"></img>
          <p>{ (Obj && Obj.username) ? Obj.username : 'username'}</p>
        </div>
      </div>
      <div className="app-body">
        <div>
        <h1>Hello, {Obj && Obj.username ? Obj.username : 'username'}!</h1>
        <h3>What are we going to learn today?</h3>
        </div>

        <div className='courselist'>
            
        </div>
      </div>
    </div>
  );
}

export default Application;