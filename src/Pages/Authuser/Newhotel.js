import React from 'react'
import { Link } from 'react-router-dom'
const Newhotel = () => {
  return (
    <div class="container" style={{marginTop:"50px"}}>
    <div class="row">
      <div class="col-lg-10">
         <h1>Post new hotel  </h1> 
       </div>
      <div class="col-lg-2">
          <Link to="/add/newhotel">      <button className='btn btn-primary'>+ Add new hotel</button>
   </Link>
      </div>
      <div class="col-sm">
      </div>
    </div>
  </div>
  )
}

export default Newhotel