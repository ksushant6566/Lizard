import React, { useContext, useEffect } from 'react';
import { LizardContext } from '../../context/context';
import { useAuth0 } from '@auth0/auth0-react';

import NoiseFeed from '../../components/NoiseFeed';
import RightUtils from '../../components/RightUtils';

function Home() {
    
    const { checkUser } = useContext(LizardContext);
    const { user } = useAuth0();

    // useEffect(() => {
    //     checkUser(user.nickname);
    // }, [user])

    return <div className = 'home'>
        <NoiseFeed />
        <RightUtils />
    </div>
}

export default Home;