import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loginImg from '../images/lizardLogo.jpg'

const Login = () => {
  
  const { loginWithRedirect } = useAuth0();
  
  return (
      <div className="container">
        <img src={loginImg} alt="Lizard"/>
        <h1>Lizard</h1>
        <button className='btn' onClick={loginWithRedirect}>LOGIN / Sign Up</button>
      </div>
  )
};


export default Login;