import React, { useState } from 'react';
import axios from 'axios'

const LizardContext = React.createContext();

const LizardProvider = ({ children }) => {

    const [lizardUser, setLizardUser] = useState({});
    const [noises, setNoises] = useState([]);
    const [loggedUser, setLoggedUser ] = useState({});




    // CHECK IF THE USER EXIST OR NOT (Home)
    const checkUser = async (CurrUser) => {
        console.log(CurrUser);
        
        const users = await axios.get('http://localhost:5000/users/').catch(err => console.log(err));
        const userIsLizard =  users.data.some( user =>  user.username === CurrUser );
        
        if(userIsLizard) {
            const user = users.data.find(user => user.username === CurrUser);
            setLoggedUser(user);
        } 
        else {
            window.location = '/createUser';
        }
    }

    // DELETE NOISE (Noise)
    const deleteNoise = async (noiseId, authorId) => {
        
        if(authorId === loggedUser._id){
            await axios.delete(`http://localhost:5000/noises/${noiseId}`)
                .then(() => console.log("noise deleted"))
                .catch(err => console.log(err));
            window.location.reload();
        }else {
            console.log("you do not have permission to delete this noise");
        }
        
    }
    // LIKE / DISLIKE NOISE (Noise) 
    const likeNoise = async (noiseId) => {
        
        const isliked = loggedUser.likedNoises.some(noise => noise === noiseId);
        
        if(isliked) {
            await axios.post(`http://localhost:5000/noises/dislike/${noiseId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else {
            await axios.post(`http://localhost:5000/noises/like/${noiseId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
        
        await axios.post(`http://localhost:5000/users/like/${loggedUser._id}`,{likedNoise : noiseId})
        .then(res => console.log(res))
        .catch(err => console.log(err));
        getNoises();
        refreshUser(loggedUser._id);
    }

    const refreshUser = (id) => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(res => setLoggedUser(res.data))
            .catch(err => console.log(err))
    }

    // GET NOISES (NoiseFeed)
    const getNoises = async () => {
        axios.get('http://localhost:5000/noises')
            .then(response => setNoises(response.data.reverse()))
            .catch(err => console.log(err))
    }

    // GET USER (User)
    const getUser = async (userId)=> {
        const userResponse = await axios.get(`http://localhost:5000/users/${userId}`).catch(err => console.log(err));
        console.log(userResponse.data);
        setLizardUser(userResponse.data);
    }

    return ( 
        <LizardContext.Provider value = {{
            lizardUser, getUser, noises, getNoises, deleteNoise, checkUser, loggedUser, setLoggedUser, likeNoise
        }}>{children}</LizardContext.Provider>
    )
}

export { LizardContext, LizardProvider };
