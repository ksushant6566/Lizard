import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LizardContext } from '../context/context';

function CreateNoise() {

    const { loggedUser } = useContext(LizardContext);

    const [description , setDescription] = useState('');
    
    const handleChange = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("creating noise");
        const Noise = {
            username : loggedUser.username,
            userId : loggedUser._id,
            description
        } 

        await axios.post('http://localhost:5000/noises/add', Noise).then(res => console.log(res)).catch(err => console.log(err));
        console.log("noise created");

        window.location = '/';
    }

    return (
        <form  onSubmit={handleSubmit} className= "form-container">
            <input
             type="text" 
             placeholder=" make some noise " 
             value={description} 
             onChange={handleChange} 
            ></input>
            <button >Post</button>
        </form>
    )
}

export default CreateNoise;