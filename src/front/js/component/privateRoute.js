import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { store } = useContext(Context);

    useEffect(() => {
        if (!store.token) {
            <Navigate to="/login" />;
        }
    }, [store.token]);

    return store.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
