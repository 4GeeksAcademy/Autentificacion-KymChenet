import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav class="navbar navbar-light bg-light">
            <Link to="/">
                <span class="navbar-brand mb-0 h1">Home</span>
            </Link>
            <div class="ml-auto">
                {store.token ? (
                    <>
                        <Link to="/private">
                            <button class="btn btn-primary">Private</button>
                        </Link>
                        <button
                            class="btn btn-danger ml-2"
                            onClick={() => actions.logout()}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signup" class="ml-2 p-3">
                            <button class="btn btn-outline-success">Signup</button>
                        </Link>
                        <Link to="/login">
                            <button class="btn btn-outline-primary">Login</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};
