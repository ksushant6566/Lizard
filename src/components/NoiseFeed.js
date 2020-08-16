import React, { useEffect, useContext } from 'react';
import { LizardContext } from '../context/context';
import Noise from './Noise';



function Feed() {
    
    const {noises, getNoises} = useContext(LizardContext);
    

    useEffect(() => {
        getNoises();
    },[])

    
    return <div className="feed-container">
        {
            noises.map(noise => {
                return (
                <Noise key={noise._id} noise={noise} />
                )})
        }
    </div>
}

export default Feed;