import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { LizardContext } from '../context/context';

function Noise(props) {

    const { deleteNoise } = useContext(LizardContext);

    useEffect(() =>console.log(props.noise),[]);

    return <div className="noise-container" > 
        <div className="noise">
            <h1>{props.noise.description}</h1>
            <br/>
            <h3>{props.noise.author}</h3>
            <p>{props.noise.likes}</p>
            <MdDelete size="30px" onClick={() => deleteNoise(props.noise._id, props.noise.authorId)} />
        </div>

            <Link to= {`/user/${props.noise.authorId}`} className="user-link">
                <button>user</button>
            </Link>
    </div>
}

export default Noise;