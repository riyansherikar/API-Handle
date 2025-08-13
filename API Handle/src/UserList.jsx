import { useEffect, useState } from 'react';
import './App.css'

function UserList() {
  
  const [Data,setData] = useState([]);

  useEffect(()=>{
    getUserData();
  },[]);

  const url = "http://localhost:3000/user"

  const getUserData = async ()=>{
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setData(response);
  }

  const deleteUser = async (id)=>{
    let response = await fetch(url+"/"+id,{
      method:"delete",
    });
    response = await response.json();
    console.log(response);

    if(response){
      alert("record deleted");
      getUserData();
    }
  }
  return (
   <>
   
   <ul className='user-head'>
        <li>Firstname</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
   {
    Data.map((user)=>(
      <ul key={user.name} className='user-list'>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
        <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
      </ul>
    ))
   }
   </>
  )
}

export default UserList
