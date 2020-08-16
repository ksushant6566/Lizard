import React, { useContext, useEffect } from 'react';
import NoiseFeed from './NoiseFeed';
import CreateNoise from './CreateNoise';
import { LizardContext } from '../context/context';
import { useAuth0 } from '@auth0/auth0-react';


function Home() {
    
    const { checkUser } = useContext(LizardContext);
    const { user } = useAuth0();

    useEffect(() => {
        console.log(user);
        checkUser(user.nickname);
    }, [user])

    return <div className = 'home'>
        <NoiseFeed />
        <CreateNoise />
    </div>
}

export default Home;