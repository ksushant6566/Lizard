import React from 'react';

import './styles.css';
// components
import UserSnap from '../UserSnap';
import CreateNoise from '../CreateNoise';


const RigthUtils = ({}) => {
    return (
        <div className="right-utils">
            <UserSnap />
            <CreateNoise />
        </div>
    )
}
export default RigthUtils
