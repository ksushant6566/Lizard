import React from 'react';
import {Link} from 'react-router-dom';
function Noise(props) {


    return <div className="noise-container" > 
        <div className="noise">
            <h1>{props.noise.description}</h1>
            <br/>
            <h3>{props.noise.author}</h3>
            <p>{props.noise.likes}</p>
        </div>
        <div>
            <Link to="/user" className="user-link">User</Link>
        </div>
    </div>
}

export default Noise;