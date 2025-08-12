import { useEffect, useState } from 'react';
import './App.css'
import UserList from './UserList';
import AddUser from './AddUser';
import { Routes, Route, NavLink } from 'react-router';
function App() {

  return (
    <>
      <ul className='nav-list'>
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </>
  )
}


export default App
