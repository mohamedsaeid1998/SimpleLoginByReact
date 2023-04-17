import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userData, logout}) {
  return <>
  <nav className="navbar navbar-expand-lg fixed-md-top  navbar-light bg-dark">
      <div className="container px-5">
      <Link className="navbar-brand text-primary fw-bold headLink" to={"./"}>KLASSY</Link>
      <button className="navbar-toggler text-white d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

          
          {userData ===null?<>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary m-2" to={"login"}>Login</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link btn btn-warning m-2" to="register">Register</Link>
            </li>

          </> :<> 
          
          
          <li className="nav-item">
            <Link className="nav-link text-white d-none mx-2 d-lg-block" to={"/"}><i className="fa-solid fa-user"></i></Link>
          </li>
          
          
          <li className="nav-item">
            <span onClick={()=>{logout()}} className="nav-link btn btn-danger mx-2">Logout</span>
          </li>


          
</>
          }
        </ul>

      </div>
    </div>
  </nav>
  
  
  </>
}
