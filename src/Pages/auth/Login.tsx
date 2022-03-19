import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loginaction } from '../../actions/Loginaction';
import { useSelector } from 'react-redux';

const Login = () => {
  let Navigate = useNavigate()
  let dispatch = useDispatch()
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")
  console.log(email) 
  console.log(password)
  const {login}:any  = useSelector((state)=>(state))
  //login user after get in to dashboard so we cant access the property before that loads
  if(login!==null){
    let data = login.state
    if(data){
      console.log(data)
if(data.token){
  console.log(data.token)
  Navigate("/dashboard")
}

    }

  }

  let submithandler = (e :any)=>{
    e.preventDefault()

    dispatch(loginaction(email,password))

    
   


 



  }
  return (
    <form style={{padding:"100px",width:"1000px"}} onSubmit={submithandler}>
    <h3>Login</h3>
    <ToastContainer position='top-center' />
 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input value={email} onChange={(e)=> setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={password} onChange={(e)=> setpassword(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div  style={{marginTop:"10px"}} className="form-group">     <button disabled={!email||!password} type="submit" className="btn btn-primary">Submit</button>
</div>

</form>
  )
}

export default Login