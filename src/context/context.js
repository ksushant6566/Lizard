import React, { useState, useEffect } from 'react';
import axios from 'axios'

// mock data
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';

const LizardContext = React.createContext();

const LizardProvider = ({ children }) => {

    const [lizardUser, setLizardUser] = useState({});
    const [noises, setNoises] = useState([]);
    const [loggedUser, setLoggedUser ] = useState({});

    const baseUrl = 'http://localhost:5000';
    const githubRootUrl = 'https://api.github.com';


    // CHECK IF THE USER EXISTs OR NOT (Home)
    const checkUser = async (CurrUser) => {
        console.log(CurrUser);
        
        const users = await axios.get(`${baseUrl}/users/`).catch(err => console.log(err));
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
            await axios.delete(`${baseUrl}/noises/${noiseId}`)
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
            await axios.post(`${baseUrl}/noises/dislike/${noiseId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        } else {
            await axios.post(`${baseUrl}/noises/like/${noiseId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
        
        await axios.post(`${baseUrl}/users/like/${loggedUser._id}`,{likedNoise : noiseId})
        .then(res => console.log(res))
        .catch(err => console.log(err));
        getNoises();
        refreshUser(loggedUser._id);
    }

    const refreshUser = (id) => {
        axios.get(`${baseUrl}/users/${id}`)
            .then(res => setLoggedUser(res.data))
            .catch(err => console.log(err))
    }

    // GET NOISES (NoiseFeed)
    const getNoises = async () => {
        axios.get(`${baseUrl}/noises`)
            .then(response => setNoises(response.data.reverse()))
            .catch(err => console.log(err))
    }

    // GET USER (User)
    const getUser = async (userId)=> {
        const userResponse = await axios.get(`${baseUrl}/users/${userId}`).catch(err => console.log(err));
        console.log(userResponse.data);
        setLizardUser(userResponse.data);
    }

    //github charts

    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    const [requests, setRequests] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({show : false, msg : ""})

    const searchGithubUser = async (user) => {
        toggleError()
        setIsLoading(true)
        const userResponse = await axios(`${githubRootUrl}/users/${user}`).catch((err) => console.log(err))
        // console.log(reponse);
        
        if(userResponse) {
            const followerResponse = await axios(`${githubRootUrl}/users/${user}/followers`).catch((err) => console.log(err))
            const repoResponse = await axios(`${githubRootUrl}/users/${user}/repos?per_page=100`)
            setGithubUser(userResponse.data)
            setFollowers(followerResponse.data)
            setRepos(repoResponse.data)
        } else {
            toggleError(true, "there is no user with that username")
        }
        setIsLoading(false)
    }


    const checkRequest = () => {
        axios(`${githubRootUrl}/rate_limit`)
            .then(({data}) => {
                let { rate: {remaining}} = data;
                setRequests(remaining)
                if(remaining === 0) {
                    toggleError(true, "sorry you have exceeded your hourly rate limit")
                }
            } )
            .catch((err) => console.log(err) )
    }

    const toggleError = (show = false, msg = '') => {
        setError({show, msg})
    }

    useEffect(checkRequest, [githubUser])



    return ( 
        <LizardContext.Provider value = {{
            lizardUser, getUser, noises, getNoises, deleteNoise, checkUser, loggedUser, setLoggedUser, likeNoise,
            githubUser, repos, followers, requests, error, searchGithubUser, isLoading
        }}>{children}</LizardContext.Provider>
    )
}

export { LizardContext, LizardProvider };
