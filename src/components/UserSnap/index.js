import React from 'react';

import './styles.css';

// components
import userImg from '../../images/me.jpg';

const UserSnap = ({}) => {
    return (
        <div className="user-snap">
            <div className="user-img">
                <img src={userImg} alt="user" />
                <h3>
                    Sushant6566
                </h3>
            </div>
            <div className="user-stats">
                <div className="stats-group">
                    <h4>
                        80
                    </h4>
                    <p>
                        Noises
                    </p>
                </div>
                <div className="stats-group">
                    <h4>
                        46
                    </h4>
                    <p>
                        Followers
                    </p>
                </div>
                <div className="stats-group">
                    <h4>
                        800
                    </h4>
                    <p>
                        Following
                    </p>
                </div>
            </div>
        </div>
    )
}
export default UserSnap;