import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

    const { logout } = useAuth0();
    return (
        <nav>
            <div className="wrap" >
                <h1>Lizard</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
                <button onClick={() => logout({ redirectTo: window.location.origin })}> Logout </button>
            </div>
        </nav>
    )
}

export default Navbar;