import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';
export default function Login() {
    const [val,Setvalue]=useState({ email:"",password:"" });
    const inputs=(e)=>{
        Setvalue({...val,[e.target.name]:e.target.value})
    }
    const submit=async(e)=>{
        e.preventDefault();
        try{ 
            const signin=await signInWithEmailAndPassword(auth,val.email, val.password);
        }
        catch(err){
            console.log(err.message);
        }
        console.log("submitted");
    }
    return (
        <div className="login">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <form onSubmit={(e)=>{submit(e)}}>
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
                <Link className='text-center' to="/registration"> SignUp here ⚡ </Link>
            </div>
        </div>
    )
}
