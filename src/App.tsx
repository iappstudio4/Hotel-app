import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Navbar from './components/Navbar';
//protected route
import Dashboard from './Pages/Authuser/Dashboard';
import Dashboardseller from './Pages/Authuser/Dashboardseller';
import Privateroute from './components/Privateroutes';
import Newhotel from './Pages/Authuser/Newhotel';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
   
     <Routes>
     <Route  path='/dashboard' element={<Privateroute/>}>
      <Route  path='/dashboard' element={<Dashboard/>}/>
</Route>
<Route  path='/dashboardseller' element={<Privateroute/>}>
      <Route  path='/dashboardseller' element={<Dashboardseller/>}/>
</Route>
<Route  path='/add/newhotel' element={<Privateroute/>}>
      <Route  path='/add/newhotel' element={<Newhotel/>}/>
</Route>

      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      < Route path='/register' element={<Register />}/>

    </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
