import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function AuthWrapper( { children } ) {
    
    const { isLoading, error } = useAuth0();

    if(isLoading) {
        return (
         <div className="container">
            Loading...
        </div>
    )}
    if(error) {
        return (
            <div className="container">
               <h2>{error.message}</h2>
           </div>
       )}
    return children;

}

export default AuthWrapper