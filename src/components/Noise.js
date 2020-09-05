import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { MdDelete , MdThumbUp, MdThumbDown} from 'react-icons/md';
import { LizardContext } from '../context/context';

function Noise(props) {

    const { deleteNoise, likeNoise, dislikeNoise } = useContext(LizardContext);

    useEffect(() =>console.log(props.noise),[]);

    return <div className="noise-container" > 
        <div className="noise">
            <h1>{props.noise.description}</h1>
            <br/>
            <h3>{props.noise.author}</h3>
            <p>{props.noise.likes}</p>
            
            <div onClick={ () => likeNoise(props.noise._id)}>
                <MdThumbUp size="25px" />
                {/* <MdThumbDown size="25px" /> */}
            </div>
            <MdDelete size="25px" onClick={() => deleteNoise(props.noise._id, props.noise.authorId)} />
        </div>

            <Link to= {`/user/${props.noise.authorId}`} className="user-link">
                <button>user</button>
            </Link>
    </div>
}

export default Noise;