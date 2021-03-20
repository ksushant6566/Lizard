import React from 'react';
import './styles.css';

// components
import UserSnap from '../../components/UserSnap';
import GithubStats from '../../components/GithubStats';

const Profile = () => {
    return (
        <div className="profile">
            <div className="userSnap-wrap">
                <UserSnap />
            </div>
            <GithubStats />
        </div>
    )
}
export default Profile;