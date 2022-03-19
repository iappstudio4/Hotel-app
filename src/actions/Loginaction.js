import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route,Navigate, Outlet ,BrowserRouter} from "react-router-dom"


 export let loginaction =(email,password)=>  async dispatch=>{

    dispatch({type:"LOGIN_REQUEST"})


    try {
       let got  = await    axios.post("http://localhost:5000/api/login" ,{email,password})
       // find email and compare password after create json toke we got data
        dispatch({type:"LOGIN_SUCCESS",payload:got.data})
        localStorage.setItem("auth",JSON.stringify(got.data))
        toast.success(" login success")          
  
} catch (error) {
        dispatch({type:"LOGIN_FAILED",payload:null})
        toast.error("Invalid credentials")        


        
    }




} 

export let logout =()=>  async dispatch=>{

    dispatch({type:"LOGOUT"})
    localStorage.removeItem("auth")




} 


