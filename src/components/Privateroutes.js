import {Routes,Route,Navigate, Outlet} from "react-router-dom"
import { useSelector } from "react-redux"

let Privateroute = ({...rest})=>{
const {login}  = useSelector((state)=>({...state}))
// let token = login.state.token
//  let data = JSON.parse(login)
return login ?    <Outlet/> 
:<Navigate to="/login" />
}

export default Privateroute