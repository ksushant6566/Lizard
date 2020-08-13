import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User(props) {
    
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/users/`)
            .then(user => console.log(user.data))
            .catch(err => console.log(err))
    },[]);

    return <div className="user" >
        <h1>{user.username}</h1>
        <p>bio  {user.bio}</p>
        <p>location {user.location}</p>
        <p>contact {user.contact}</p>
    </div>
}

export default User;