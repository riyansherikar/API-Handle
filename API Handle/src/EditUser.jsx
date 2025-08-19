import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {

    const {id} = useParams();

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        getUserData();
    },[])

    const url = "http://localhost:3000/user/"+id;
    
    const getUserData = async ()=>{
        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        setName(response.name);
        setAge(response.age);
        setEmail(response.email);
        
    }

    const updateUser = async ()=>{
      console.log(name,age,email);
      let response = await fetch(url,{
        method:'Put',
        body:JSON.stringify({name,age,email})
      });
      response = await response.json();
      if(response){
        alert("User data updated");
        navigate('/');
      }
      
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Edit User Detail</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='User Name' /><br/><br/>
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}placeholder='User Age' /><br/><br/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='User Email' /><br/><br/>
        <button onClick={updateUser}>Update</button>
    </div>
  )
}

export default EditUser