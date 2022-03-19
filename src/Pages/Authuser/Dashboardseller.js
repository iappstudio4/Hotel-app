import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Dashboardnav from './Dashboardnav'
import { useSelector } from 'react-redux';
import {Stripeaction} from "../../actions/Stripeaction"
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const Dashboardseller = () => {
    let dispatch = useDispatch()

 
    let [data,setdata] = useState()
console.log(data)
    const {login}  = useSelector((state)=>(state))
useEffect(()=>{
    if(login){
        let data = JSON.parse(login) 
        setdata(data)
        
    } 
},[login])
console.log(data)
  
    let active = window.location.pathname
    console.log(active)
    let connected = ()=>(
        <div class="container" style={{marginTop:"50px"}}>
        <div class="row">
          <div class="col-lg-10">
             <h1>Your Hotels  </h1> 
           </div>
          <div class="col-lg-2">
              <Link to="/add/newhotel">      <button className='btn btn-primary'>+ Add new hotel</button>
       </Link>
          </div>
          <div class="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    )
    let notconnected = ()=>(
        <section className="vh-100" style={{}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card mb-5" style={{borderRadius: '15px'}}>
                <div className="card-body p-4">
                  <h3 className="mb-3">Setup payouts to post hotel rooms</h3>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-start align-items-center">
                   
                    <a href="#!">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" className="img-fluid rounded-circle me-3" width={35} />
                    </a>
                    <button onClick={handlestripe} type="button" className="btn btn-outline-dark btn-sm btn-floating">
                        Set payout
                     </button>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    )
    let handlestripe = ()=>{
        dispatch(Stripeaction(data.token))

    }
  return (
      <div>
      <Dashboardnav/>
      <ToastContainer position='top-center' />

  { data && data.stripe_seller && data.stripe_seller_charger_enabled ? connected() : notconnected()}
      </div>
      
  
   
  )
}

export default Dashboardseller