import React, { useContext, useState } from 'react';
import { LizardContext } from '../context/context';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function CreateUser() {

    const { setLoggedUser, checkUser } = useContext(LizardContext);
    const { user } = useAuth0();

    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');

    const handleSUbmit = async (e)=>{
        e.preventDefault();

        const newUser = {
            username : user.nickname,
            bio,
            location,
            contact
        }

        axios.post('http://localhost:5000/users/add', newUser)
            .then(() => checkUser(newUser))
            .catch(err => console.log(err));

        window.location = '/';
        
    }

    return (
        <form onSubmit={handleSUbmit}>
            <div className="form-input-div">
                <label > Username </label>
                <input name="username" type="text" value={user.nickname} readOnly={true} ></input>
            </div>
            <div className="form-input-div">
                <label > Bio </label>
                <input name="bio" type="text" value={bio} onChange={(e) => setBio(e.target.value)} ></input>
            </div>
            <div className="form-input-div">
                <label > Location </label>
                <input name="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} ></input>
            </div>
            <div className="form-input-div">
                <label > Contact </label>
                <input name="contact" type="text" value={contact} onChange={(e) => setContact(e.target.value)} ></input>
            </div>

            <button > Join </button>
        </form>
    )
}

export default CreateUser;