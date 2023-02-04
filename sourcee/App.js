import React from  'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Register from './pages/Register.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Admin from './components/Admin.js';

function App() {
  
  return (
    <Router>
   <div>
<Route exact path="/" component = {Home} />
<Route exact path="/About" component = {About} />
<Route exact path="/Register" component = {Register} />
<Route exact path="/Login" component = {Login} />
<Route exact path="/Logout" component = {Logout} />
<Route exact path="/Admin" component = {Admin} />


   </div>
   </Router>
  );
}

export default App;
