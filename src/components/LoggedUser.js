import React, {useContext } from 'react';
import { LizardContext } from '../context/context'

function LoggedUser() {
    
    const { loggedUser } = useContext(LizardContext);

    return <div className="user" >
        <h1>{loggedUser.username}</h1>
        <p>bio  {loggedUser.bio}</p>
        <p>location {loggedUser.location}</p>
        <p>contact {loggedUser.contact}</p>
    </div>
}

export default LoggedUser;