import React from "react";
import './CSS/Home.css';

function Home(){
    return (
        <>
        
        <div className="container">
                <img src='../src/components/images/logo.png' className="logo" />
                <h1>PlayLearn</h1>
                <p className="para">Where learning meets fun</p>
                <a href= "/login" className="linkcss"><button className="btn">Unleash yourself</button></a>
            </div>
            
        
        </>
    )
}

export default Home;