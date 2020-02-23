import React, { useState } from 'react';
import { axiosWithAuth } from "../utils.js/axiosWithAuth";

function Login ( props ) {
    
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });


    const handleInputChange = event => {
         setCredentials({
            ...credentials,
            [event.target.name]: event.target.value 
          });
      };
  
    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/login", credentials)
            .then(res => {
                console.log("Login.js: axiosWithAuth: res ", res);
                localStorage.setItem("token", res.data.payload);
                setCredentials(credentials)
                props.history.push("/friendslist");

            })
            .catch(err => console.log(err));
    };
  
   
      return (
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            value={ credentials.username }
            name="username"
            type="username"
            placeholder="username"
            onChange={ handleInputChange  }
          />
          <input
            className="input"
            value={ credentials.password }
            name="password"
            type="password"
            placeholder="Password"
            onChange={ handleInputChange }
          />
          <button > Login </button>
        </form>
      )
  }

  export default Login
  