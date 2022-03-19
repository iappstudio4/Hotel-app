import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

export let Stripeaction =(token)=>  async dispatch=>{

    dispatch({type:"STRIPE_REQUEST"})


    try {
       let got  = await    axios.post("http://localhost:5000/stripe/create-connected-account" ,{},{
           headers:{
               Authorization : `Bearer ${token}`
           }
       })
       // find email and compare password after create json toke we got data
        dispatch({type:"STRIPE_SUCCESS",payload:got.data})
        localStorage.setItem("auth",JSON.stringify(got.data))
        toast.success(" stripe success")          
  
} catch (error) {
        dispatch({type:"STRIPE_FAILED",payload:null})
        toast.error("stripe failed")        


        
    }




} 