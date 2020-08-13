import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from './components/NoiseFeed';
import User from './components/User';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Feed} />
      <Route path="/user" component={User} />
    </Router>
  );
}

export default App;
