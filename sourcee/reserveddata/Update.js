// import React, {Component} from 'react';
import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Navbarr from '../components/Navbarr.js';
import Footer from '../components/Footer.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import './Update.css';

function Update() {
    //For Insert
   
    //Getting data from the database code is here
    const [studentDetails,setStudentDetails]=useState([]);
    useEffect(()=>{
     Axios.get("http://localhost:8000/read").then((response)=>{
      setStudentDetails(response.data);
     })
    },[]);
    //Here i have written the update code for this project
    const [newName,setNewName]=useState("");
    const [newEmail,setNewEmail]=useState("");
    const[newMobile,setNewMobile]=useState('');
    const[newAddress,setNewAddress]=useState('');
    const[newGender,setNewGender]=useState('');
    const[newMessage,setNewMessage]=useState('');
    //
   const updatedStudent=(id)=>{
    Axios.put("http://localhost:8000/update",{
      id:id,
      newName:newName,
      newEmail:newEmail,
      newMobile:newMobile,
      newAddress:newAddress,
      newGender:newGender,
      newMessage: newMessage,
      
    });
   };
  //Delete  Code is given below
  const deleteStudent=(id)=>{
    Axios.delete(`http://localhost:8000/delete/${id}`,{
      id:id,
      newName:newName,
      newEmail:newEmail,
      newMobile:newMobile,
      newAddress:newAddress,
      newGender:newGender,
      newMessage: newMessage,
    });
  
   };
  

//
  return (
    <div className>
      <Navbarr/>
   
    <h1>Student Details</h1>
{studentDetails.map((val,key)=>{
  return(
    <div key={key} className="food">
      {/* <h5>{val.name}</h5>
      <h5>{val.email}</h5> */}
      <form className='update'>
  <input type="text" name="name" placeholder={val.name} onChange={(e)=>setNewName(e.target.value)}/>
  <input type="text" name="email" placeholder={val.email} onChange={(e)=>setNewEmail(e.target.value)}/>
  <input type="text" name="email" placeholder={val.mobile} onChange={(e)=>setNewMobile(e.target.value)}/>
  <input type="text" name="email" placeholder={val.address} onChange={(e)=>setNewAddress(e.target.value)}/>
  <input type="text" name="email" placeholder={val.gender} onChange={(e)=>setNewGender(e.target.value)}/>
  <input type="text" name="email" placeholder={val.message} onChange={(e)=>setNewMessage(e.target.value)}/>
  <Link to="/Register">
        <button id='button'>Create</button>
      </Link>
  <button id='button' onClick={()=>updatedStudent(val._id)}>Update</button>
  <button id='button' onClick={()=>deleteStudent(val._id)}>Delete</button>
 
  
       
</form>

    </div>
  )
})}
    <Footer/>
    </div>
  );
}

export default Update;