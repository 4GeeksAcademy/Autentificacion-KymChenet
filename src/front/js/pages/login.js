import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";

const Login = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await actions.login(email, password);
            alert("Login successful!");
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box"> 
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email</label>
                        <input
                            id="loginEmail"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input
                            id="loginPassword"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
