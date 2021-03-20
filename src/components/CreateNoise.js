import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LizardContext } from '../context/context';

function CreateNoise() {

    const { loggedUser, getNoises } = useContext(LizardContext);

    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const Noise = {
            username: loggedUser.username,
            userId: loggedUser._id,
            description
        }

        await axios.post('http://localhost:5000/noises/add', Noise)
            .then(res => console.log(res))
            .catch(err => console.log(err));

        getNoises();
    }

    return (
        <div className="create-noise">
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    placeholder=" make some noise "
                    value={description}
                    onChange={handleChange}
                ></input>
                <button type="submit" >Post</button>
            </form>
        </div>
    )
}

export default CreateNoise;