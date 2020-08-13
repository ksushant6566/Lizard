import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Noise from './Noise';

function Feed() {
    
    const [noises, setNoises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/noises')
            .then(response => setNoises(response.data))
            .catch(err => console.log(err))
    },[])

    
    return <div className="feed-container">
        {
            noises.map(noise => {
                return (
                <Noise noise={noise} />
                )})
        }
    </div>
}

export default Feed;