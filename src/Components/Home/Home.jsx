import React from 'react'
import { Link } from 'react-router-dom';
import image1 from "../../Assets/images/Alexandria-For-Programming-Egypt-6203-1595173849.png"
import image2 from "../../Assets/images/ATIS-Egypt-73448-1669195677.jpeg"
import image3 from "../../Assets/images/Dimofinf-Operations-Center-Egypt-56.png"
import image4 from "../../Assets/images/Houya-Arrow-Egypt-78625-1654733113.png"
export default function Home() {
return (
<div className='main d-flex justify-content-center align-items-center '>
  <div className="container mt-5 mt-lg-0">
    <div className="row g-2">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className='subMain d-flex justify-content-between align-items-center'>
              <div>
                <Link className='text-decoration-none fw-bold' to={"/"}>Tele Marketing Agent</Link> <p className='mb-1'>
                Amr Helmy Designs - <span className='text-muted'>Maadi , Cairo , Egypt</span></p>
                <span className='text-success  d-block'>2 hours ago</span>
                <span className='my-1 color  d-inline-block '>FullName</span>

              </div>
              <img src={image1} className='mb-5' height={20} alt="" />
            </div>
            <p className='text-muted'>Experienced.3 Yr of Exp
CSS
.
Design
.
front-end
.
HTML
.
Information Technology (IT)
.
JavaScript
.
Js
.
React
.
Software Development
.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className='subMain d-flex justify-content-between align-items-center'>
              <div>
                <Link className='text-decoration-none fw-bold' to={"/"}>React JS Developer - Internship
                  (Remotely)</Link> <p className='mb-1'>Alexandria For Programming<span className='text-muted'> -Bolkly, Alexandria</span></p> 
                <span className='text-success  d-block'>15 days ago</span>
                <span className='my-1 color  d-inline-block '>Internship</span>

              </div>
              <img src={image4} className='mb-5' height={25} alt="" />
            </div>
            <p className='text-muted'>Entry Level.-1 Yrs of Exp
Computer Science
.
Information Technology (IT)
.
CSS
.
JavaScript
.
React
.
Software Development
.
reactjs
.
React.js
.
HTML
.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className='subMain d-flex justify-content-between align-items-center'>
              <div>
                <Link className='text-decoration-none fw-bold' to={"/"}>React JS Developer  </Link> <p className='mb-1'>
                ATIS <span className='text-muted'>-Maadi, Cairo</span></p>
                <span className='text-success  d-block'>24 days ago</span>
                <span className='my-1 color  d-inline-block '>FullName</span>

              </div>
              <img src={image2} className='mb-5' height={50} alt="" />
            </div>
            <p className='text-muted'>Experienced.3-4 Yrs of Exp
CSS
.
HTML5
.
JavaScript
.
React.js
.
React Native
.
Software Development
.
jQuery
.
Bootstrap

.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className='subMain d-flex justify-content-between align-items-center'>
              <div>
                <Link className='text-decoration-none fw-bold' to={"/"}>Senior Front End Developer (React.js)</Link> 
                <p className='mb-1'>Dimofinf Operations Center <span className='text-muted'>-Nasr City, Cairo</span></p>
                <span className='text-success  d-block'>28 days ago</span>
                <span className='my-1 color  d-inline-block '>Full Time</span>

              </div>
              <img src={image3} className='mb-5' height={25} alt="" />
            </div>
            <p className='text-muted'>Experienced.4-6 Yrs of Exp
HTML
.
Git
.
Frameworks
.
JavaScript
.
Js
.
Sass
.
Software Development
.
Information Technology (IT)
.
Computer Science
.
CSS
.
React.js
.
</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</div>
)
}