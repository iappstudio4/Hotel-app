import React from 'react'
import { Link } from 'react-router-dom'
import Dashboardnav from './Dashboardnav'
import Myaccount from './Myaccount'
const Dashboard = () => {
    let active = window.location.pathname
    console.log(active)
  return (
      
    <div>
   <Dashboardnav />
<div className='container'>
 </div>
 <Myaccount />

    </div>
   
  )
}

export default Dashboard