import React, { useState } from 'react'

function AddUser() {

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");

  const createUser= async ()=>{
    console.log(name,age,email);
    const url = "http://localhost:3000/user"
    let response = await fetch(url,{
      method:"POST",
      body:JSON.stringify({name,age,email})
    });
    
    response = await response.json();
    if(response){
      alert("response added");
    }
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Add new User</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder='Enter name' /><br/><br/>
        <input type="text" onChange={(e)=>setAge(e.target.value)}  placeholder='Enter age' /><br/><br/>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' /><br/><br/>
        <button onClick={createUser}>Add User</button>
    </div>
  )
}

export default AddUser