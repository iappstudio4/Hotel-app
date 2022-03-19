import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {logout} from "../actions/Loginaction"


let Navbar = ()=>{

  let Navigate = useNavigate()
  let {login} :any = useSelector((state)=>({...state}))
  console.log(login)

  let dispacth = useDispatch()

  let logouthandler = ()=>{
    dispacth(logout())
    if(login!==null){
     return Navigate("/login")
    }

  }

  //selecting destructuring state important
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <a className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </a>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
       
     {login == null && (
       <>
           <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
          </li>
       
       </>
         
     )}
     {login !==null && (
       <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <a onClick={logouthandler} className="nav-link active" aria-current="page">Logout</a>
          </li> 
       </>
     )}
  

      </ul>
    </div>
  </div>
</nav>)
}


export default Navbar