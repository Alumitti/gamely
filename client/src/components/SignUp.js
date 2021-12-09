import React, { useState } from 'react'
import { NavLink } from "react-router-dom"


function SignUp() {
   
    const [newUsername, setNewUsername] = useState("")
    const [newUserPw, setNewUserPw] = useState("")
    const [newUserPwConf, setNewUserPwConf] = useState("")

    const updateUser = (evt) => {
        setNewUsername( evt.target.value);
    }
    const updatePw = (evt) => {
        setNewUserPw( evt.target.value);
    }

    const updatePwConf = (e) => {
        setNewUserPwConf(e.target.value);
    }
   
    const handleSignUp = (event) => {
    
        event.preventDefault();
        console.log(event)
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username: newUsername,
              password: newUserPw,
              password_confirmation: newUserPwConf
                  })  
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
   
   
   
    return(
    <div>

        <NavLink to="/">
            <button>Home</button>
        </NavLink>
        
        
        <div>
            <form id="signupform" onSubmit={handleSignUp}><br></br>
                <label >Username:</label>
                <input type="text" id="username" name="username" onChange={updateUser}></input><br></br>
                <label >Password:</label>
                <input type="password" id="password"name="password" onChange={updatePw}></input><br></br><br></br>
                <label >Password Confirmation:</label>
                <input type="password" id="password_confirmation"name="password_confirmation" onChange={updatePwConf}></input><br></br><br></br>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>


    </div>




    )
}

export default SignUp