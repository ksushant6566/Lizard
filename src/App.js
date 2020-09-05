import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Home from './components/Home';
import User from './components/User';
import LoggedUser from './components/LoggedUser';
import Navbar from './components/Navbar';
import AuthWrapper from './components/AuthWrapper';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <AuthWrapper className="container">
      <div className="container">
        <Router>

          <PrivateRoute path="/">
            
              <Navbar />
              <Route path="/" exact component={Home} />
              <Route path="/user" exact component={LoggedUser} />
              <Route path="/user/:id" component={User} />
              <Route path="/createUser" component={CreateUser} />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

        </Router>
      </div>
    </AuthWrapper>
  );
}

export default App;
