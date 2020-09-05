import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

const { logout } = useAuth0();
    return (
        <nav>
            <h1>Lizard</h1>
            <ul className="nav-links">
                <Link to="/"><li>home</li> </Link>
                <Link to="/about"><li>about</li></Link>
                <Link to="/user"><li>profile</li></Link>
            </ul>
            <button onClick={() => logout({ redirectTo: window.location.origin })}> Logout </button>
        </nav>
    )
}

export default Navbar;