import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"


function LogIn({ setCurrentUser, currentUser }) {
    const [username, setUsername] = useState("")
    const [password, setUserPw] = useState("")
    const navigate = useNavigate();


    const updateUser = (evt) => {
        setUsername( evt.target.value);
    }
    const updatePw = (evt) => {
        setUserPw( evt.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
               "content-Type": "application/json" 
            },
            body: JSON.stringify({ username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setCurrentUser(user));
            }
        });
        navigate('/')
    }

    useEffect(() => {}, [currentUser])

    return(
    <div>

        <NavLink to="/">
            <button className="button">Home</button>
        </NavLink>



        <form id="LogInform" onSubmit={handleSubmit}><br></br>
                <input type="text" id="username" className="username input-box" placeholder="Username" onChange={updateUser}></input><br></br>
                <input type="password" id="password" className="password input-box" placeholder="Password" onChange={updatePw}></input><br></br><br></br>
                <input className="button" type="submit" value="Login" ></input>
            </form>
    </div>
    )
}

export default LogIn