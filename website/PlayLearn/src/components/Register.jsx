import React, { useState } from "react";
import './CSS/RegisterPage.css';
import axios from 'axios';


function Register(){ 
    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : ''
    });

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/register',
                formData,
                {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                });

                console.log(response);


        } catch (error) {
            console.log("Axios error : ", error)
        }
    };

    const handleChange = async(event) => {
        const {id , value} = event.target;

        setFormData(
            {
                ...formData,
                [id] : value
            }
        )
        };
         
    return (
        <>
        

        <div className='form'>
        <form action = 'POST' onSubmit={handleSubmit}>
        <h1 style={{color : 'black', fontFamily : ' Verdana, Geneva, Tahoma, sans-serif'}}>Register Here</h1> 
            <div>
                <label>Username</label>
                <input id='username' type="text" placeholder="Enter your username" value={formData.username} onChange={handleChange}></input>
            </div>

            <div>
                <label>Email</label>
                <input id='email' type="text" placeholder="Enter your Email" value={formData.email} onChange={handleChange}></input>
            </div>
            <div>
                <label>Password</label>
                <input id='password' type="password" placeholder="Enter your Password" value={formData.password} onChange={handleChange}></input>
            </div>
            <br />
            <button type="submit">Register</button>
            <a href='/login'>already a user?</a>
            
        </form>
        </div>
        
        </>
    );
}

export default Register;