import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todolist from './Pages/Todolist';
import Login from './Pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {onAuthStateChanged } from 'firebase/auth';
import Registration from './Pages/Registration';
import { auth } from './firebase';
import Profile from './Pages/Profile';

function App() {
  const [userp,setUserp]=useState({});  //saving user profile here
  onAuthStateChanged(auth,(user)=>{
    if(user){
      setUserp(user)
      console.log(user)
    }
    else{
      setUserp(null)
    }
  })
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={userp?<Todolist/>:<Login/>} />
      <Route path='/registration' element={userp?<Todolist/>:<Registration/>}/>
      <Route path='/profile' element={userp?<Profile/>:<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
