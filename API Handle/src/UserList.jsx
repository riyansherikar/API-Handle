import { useEffect, useState } from 'react';
import './App.css'

function UserList() {
  
  const [Data,setData] = useState([]);

  useEffect(()=>{
    getUserData();
  },[]);


  const getUserData = async ()=>{
    const url = "http://localhost:3000/user"
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setData(response);
  }
  return (
   <>
   
   <ul className='user-head'>
        <li>Firstname</li>
        <li>Age</li>
        <li>Email</li>
      </ul>
   {
    Data.map((user)=>(
      <ul key={user.name} className='user-list'>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
      </ul>
    ))
   }
   </>
  )
}

export default UserList
