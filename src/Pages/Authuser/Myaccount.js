import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import moment from "moment"
import { Link } from 'react-router-dom';

const Myaccount = () => {

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
  
  return (
    <div><section className="vh-80" style={{backgroundColor: '#9de2ff'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-md-9 col-lg-7 col-xl-5">
          <div className="card" style={{borderRadius: '15px'}}>
            <div className="card-body p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">{data && data.name }</h5>
                  <p className="mb-2 pb-1" style={{color: '#2b2a2a'}}>{data &&  `joined ${moment(data.createddate).fromNow()}`}</p>
                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{backgroundColor: '#efefef'}}>
                    <div>
                      <p className="small text-muted mb-1">Pending balance</p>
                      <p className="mb-0">41</p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">Followers</p>
                      <p className="mb-0">976</p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Rating</p>
                      <p className="mb-0">8.5</p>
                    </div>
                  </div>
                  <div className="d-flex pt-1">
                    <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                    <button type="button" className="btn btn-primary flex-grow-1">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  <div class="container" style={{marginTop:"50px"}}>
  <div class="row">
    <div class="col-lg-10">
       <h1>Your bookings  </h1> 
     </div>
    <div class="col-lg-2">
        <Link to="/">      <button className='btn btn-primary'>Browse hotels</button>
 </Link>
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
  </div>  )
}

export default Myaccount