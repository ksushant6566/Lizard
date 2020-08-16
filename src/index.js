import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LizardProvider }from './context/context';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-9bic9dtt.us.auth0.com"
      clientId="sNiS4WbJKclRTsU7wUPU37SrkchmCBG8"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <LizardProvider>
        <App />
      </LizardProvider>
    </Auth0Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);

