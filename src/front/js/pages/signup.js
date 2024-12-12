import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

const Signup = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await actions.signup(email, password);
            alert("Signup successful! You can now login.");
        } catch (error) {
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <div className="signup-container"> 
            <div className="signup-box"> 
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
