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
            lizardUser, getUser, noises, getNoises, deleteNoise, checkUser, loggedUser, setLoggedUser
        }}>{children}</LizardContext.Provider>
    )
}

export { LizardContext, LizardProvider };
