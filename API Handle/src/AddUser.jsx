import React, { useState } from 'react'

function AddUser() {

  const [Name,setName] = useState("");
  const [Age,setAge] = useState("");
  const [Email,setEmail] = useState("");

  const createUser=()=>{
    console.log(Name,Age,Email);
    
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Add new User</h1>
        <input type="text" onChange={(e)=>{(setName(e.target.value))}} name="text" placeholder='Enter name' /><br/><br/>
        <input type="text" onChange={(e)=>{(setAge(e.target.value))}} name="text" placeholder='Enter age' /><br/><br/>
        <input type="text" onChange={(e)=>{(setAge(e.target.value))}} name="text" placeholder='Enter email' /><br/><br/>
        <button onClick={createUser}>Add User</button>
    </div>
  )
}

export default AddUser