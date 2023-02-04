import React, { Component } from 'react';


import Navbarr from '../components/Navbarr.js';
import Footer from  '../components/Footer.js';
import Carouse from  '../components/Carouse';
import Main from  '../components/Main';
// import Accordian from  '../components/Accordian';
import "./Home.css";

class Home extends Component {
    render(){
        return(
            <div className='home'>
            <Navbarr />
        
            <Carouse/>
            <Main/>
           
          
           
            <Footer />
        </div>
        );
    }
}

export default Home;