// import React, {Component} from 'react';
import React,{useState} from 'react';

import Axios from 'axios';
import Navbarr from '../components/Navbarr.js';
import Footer from '../components/Footer.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Forms.css';


function Register() {
    //For Insert
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[mobile,setMobile]=useState('');
    const[address,setAddress]=useState('');
    const[gender,setGender]=useState('');
    const[message,setMessage]=useState('');
    
    const insert=()=>{
      //console.log(foodName + days);
      Axios.post("http://localhost:8000/insert",{
        name:name,
        email:email,
        mobile:mobile,
        address:address,
        gender:gender,
        message:message       
      
      });
    };
   

//
  return (
    <div className='forms'>
      <Navbarr/>
    <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setName(e.target.value)} required/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"   onChange={(e)=>setEmail(e.target.value)} required valid/>
        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number"   onChange={(e)=>setMobile(e.target.value)} required/>
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text"   onChange={(e)=>setAddress(e.target.value)} required />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setGender(e.target.value)} required/>
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea"   onChange={(e)=>setMessage(e.target.value)}rows={5} />
      </Form.Group>
      <br/><br/><br/>

    
      <Button variant="primary" className="mb-5" type="submit" onClick={insert}>
        Submit
      </Button>
     
    </Form>
  
    <Footer/>
    </div>
  )
}
    
    
  
export default Register;