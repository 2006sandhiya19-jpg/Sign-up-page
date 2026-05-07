import React, { useState } from "react";
import './loginsign.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

        if(action === "Sign Up"){
            alert("Signed Up Successfully");

            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Password:", password);
        }
        else{
            alert("Logged In Successfully");

            console.log("Email:", email);
            console.log("Password:", password);
        }
    }

    return(
        <div className='container'>

            <div className="header">
                <div className="text">{action}</div>
                <div className="underLine"></div>
            </div>

            <div className="inputs">

                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="" />

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="" />

                    <input
                        type="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

            </div>

            {action === "Sign Up" ? null : (
                <div className="forgot-password">
                    Lost Password? <span>Click Here!</span>
                </div>
            )}

            <div className="submit-container">

                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction("Sign Up")}
                >
                    Sign Up
                </div>

                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>

            </div>

            <div className="submit-container">
                <button className="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </div>

        </div>
    );
}

export default LoginSignup;