import React, {useContext, useState } from 'react';
import { LizardContext } from '../context/context'
import axios from 'axios';

function LoggedUser() {
    
    const { loggedUser } = useContext(LizardContext);

    const [username, setUsername] = useState(loggedUser.username)
    const [bio, setBio] = useState(loggedUser.bio)
    const [location, setLocation] = useState(loggedUser.location)
    const [contact, setContact] = useState(loggedUser.contact)
    
    const handleSubmit = () => {
        const user = {
            bio,
            location,
            contact
        }
        axios.post(`http://localhost:5000/users/update/${loggedUser._id}`, user)
            .then((res) => console.log(res))
            .catch(err => console.log(err));
    }

    return <div className="user" >

        <form>

            <div>
                <h1>{loggedUser.username}</h1>
            </div>
            <div>
                <label>BIO: </label>
                <input value={bio} onChange={(e) => setBio(e.target.value)}></input>
            </div>
            <div>
                <label>Location: </label>
                <input value={location} onChange={(e) => setLocation(e.target.value)}></input>
            </div>
            <div>
                <label>Contact: </label>
                <input value={contact} onChange={(e) => setContact(e.target.value)}></input>
            </div>
            
        </form>
        <button onClick={handleSubmit} >Save Changes</button>

    </div>
}

export default LoggedUser;