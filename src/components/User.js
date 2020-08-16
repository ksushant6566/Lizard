import React, {useContext, useEffect } from 'react';
// import axios from 'axios';
import { LizardContext } from '../context/context'

function User({ match }) {
    const { lizardUser } = useContext(LizardContext);
    const { getUser } = useContext(LizardContext);

    useEffect(() => { 
        getUser(match.params.id);
        console.log(match.params.id);
     },[]);

    

    return (
         <div className="user-card" >
            <h1>{lizardUser.username}</h1>
            <p>bio  {lizardUser.bio}</p>
            <p>location {lizardUser.location}</p>
            <p>contact {lizardUser.contact}</p>
        </div>
        )}

export default User;