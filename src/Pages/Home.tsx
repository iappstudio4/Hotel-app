import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"

const Home = () => {
    let got  = useSelector((state)=> state)
    console.log(got)

    let discpatch = useDispatch()
    useEffect(()=>{
        discpatch({type:"LOGGED_IN_USER" ,payload :{name:"sethu",password:"123"}})

    },[])
  return (
    <div>Home</div>
  )
}

export default Home