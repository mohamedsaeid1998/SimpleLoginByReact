import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout({userData,setUserData}) {
  let navigate = useNavigate()
function logout(){
  localStorage.removeItem("userToken")
  setUserData(null)
  navigate("./login")
}

  return <>
  <Navbar userData={userData} logout={logout}/>
  <Outlet/>
  </>
}
