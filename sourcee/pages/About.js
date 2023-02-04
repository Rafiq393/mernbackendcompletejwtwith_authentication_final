import React, {Component} from 'react';
import Navbarr from '../components/Navbarr.js';
import Footer from '../components/Footer.js';
import Kard from '../components/Kard.js';
//import './About.css';

class About  extends Component{
    render(){
        return(
            <div>
                <Navbarr />
           <Kard />
            <Footer />
            </div>
        );
    }
}

export default About;