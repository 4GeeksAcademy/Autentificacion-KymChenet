// src/pages/private.js
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        // Si no hay token, redirigir al login
        if (!store.token) {
            navigate("/login");
        }
    }, [store.token, navigate]);

    return (
        <div className="container mt-5">
            <h1>Welcome to the Private Page</h1>
            <p>Only authenticated users can see this content.</p>
        </div>
    );
};
