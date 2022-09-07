import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';
export default function Registration() {
    const [val,Setvalue]=useState({ email:"",password:"" });
    const inputs=(e)=>{
        Setvalue({...val,[e.target.name]:e.target.value})
    }
    const register=async(e)=>{
        e.preventDefault();
        try{
            const user= await createUserWithEmailAndPassword(auth, val.email, val.password);console.log(user);
        }catch(err){
            console.log(err.message)
        }
    }
    console.log(val)
  return (
     <div className="login">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <form onSubmit={(e)=>{register(e)}}>
                    <div className="form-group">
                        <label forhtml="exampleInputEmail1">Email address</label>
                        <input type="email" 
                        name="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>inputs(e)} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label forhtml="exampleInputPassword1">Password</label>
                        <input type="password" onChange={(e)=>inputs(e)} name="password" className="form-control w-75" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    
                    <button type="submit" className="mt-3 btn btn-warning">Submit</button>
                </form>
                <hr />
                <Link className='text-center' to="/"> Login here 👋 </Link>
            </div>
        </div>
  )
}
