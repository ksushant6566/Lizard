import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdThumbUp, MdThumbDown } from 'react-icons/md';
import { LizardContext } from '../context/context';

import Img from '../images/me.jpg';

function Noise({ noise }) {

    const { deleteNoise, likeNoise, dislikeNoise } = useContext(LizardContext);

    const [showUtils, setShowUtils] = useState(false);

    useEffect(() => console.log(noise), []);

    return <div className="noise-container" >
        <div className="noise">
            <div className="noise-head">
                <Link to={`/user/${noise.authorId}`} className="user-link">
                    <div className="noise-author-img">
                        <img src={noise.authorImg || Img} alt="userImg" />
                    </div>
                </Link>
                <h6>{noise.author}</h6>
            </div>

            <div className="noise-body">
                <img src={noise.img || Img} alt="noiseImg" />
                <p className="noise-description">
                    <span className="noise-author">
                        {noise.author}
                    </span>
                    {noise.description}</p>
            </div>

            <div className="noise-tail">
                <div className="wrap">
                    <div onClick={() => likeNoise(noise._id)}>
                        <MdThumbUp size="20px" />
                        {/* <MdThumbDown size="25px" /> */}
                    </div>
                    <span className="likes">{noise.likes}</span>
                </div>
                <div >
                    {showUtils ? (
                        <div className="utils">
                            <ul>
                                <li onClick={() => deleteNoise(noise._id, noise.authorId)}>
                                    Delete
                            </li>
                                <li onClick={() => deleteNoise(noise._id, noise.authorId)}>
                                    Edit
                            </li>
                                <li onClick={() => setShowUtils(false)}>
                                    exit
                            </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="utils-toggle" onClick={() => setShowUtils(true)} >
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    )}
                </div>
            </div>


        </div>
    </div>
}

export default Noise;