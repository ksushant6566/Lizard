import React from 'react';
import './styles.css';

import Repos from '../Repos/index.js'

const GithubStats = () => {
    return (
        <div className="github-stats">
            <div className="stats-heading">
                Github Stats
            </div>
            <div>
                <Repos />
            </div>
        </div>
    )
}
export default GithubStats;