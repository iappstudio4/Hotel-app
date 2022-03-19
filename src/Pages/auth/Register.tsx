import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  let navigate = useNavigate()
  let [name, setname] = useState("")
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")
  console.log(name)
  console.log(email)
  console.log(password)

  let submithandler = (e :any)=>{
    e.preventDefault()
    console.table({name,email,password})
    axios.post("http://localhost:5000/api/register" ,{name,email,password}).then((data)=>{
      toast.success("registraton success login")
            navigate("/login")

    console.log(data)
    }).catch(()=>{
      toast.error("Email already taken")


    })

  }
 
  return (
    <form style={{padding:"100px",width:"1000px"}} onSubmit={submithandler}>
      <h3>Register</h3>
      <ToastContainer position='top-center' />
      <div className="form-group">
      <label htmlFor="exampleInputEmail1">Enter name</label>
      <input onChange={(e)=>setname(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input onChange={(e)=> setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input onChange={(e)=> setpassword(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <div style={{marginTop:"10px"}} className="form-group">     <button type="submit" className="btn btn-primary">Submit</button>
</div>

  </form>
  )
}

export default Register