import React from 'react'
import { Link } from 'react-router-dom'

const dashboardnav = () => {
    let active = window.location.pathname
    console.log(active)
  return (
      
    
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav m-auto">
      
        <li class="nav-item">
        <Link className={`nav-link`} style={{ color: active==="/dashboard" ? 'black' : 'rgba(0, 0, 0, 0.616)' }} to="/dashboard">Your bookings</Link>
        </li>
        <li class="nav-item">
          <Link className={`nav-link `}  style={{ color: active==="/dashboardseller" ? 'black' : 'rgba(0, 0, 0, 0.616)' }} to="/dashboardseller">Your hotels</Link>
        </li>
      </ul>
     
    </div>
  </nav>
   
  )
}

export default dashboardnav