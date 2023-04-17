import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function Register() {
let navigate = useNavigate()
const [messageError, setMessageError] = useState("")
const [isLoading, setIsLoading] = useState(false)

async function handelRegister(values){
  setIsLoading(true)
let {data} = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",values).catch((error)=>{
  setIsLoading(false)
  setMessageError(error.response.data.message)
  toast.error("Registration was not completed successfully",{ duration: 2000, position: 'bottom-center'})
})
if (data.message === "success"){
  toast.success("successfully registered",{ duration: 2000, position: 'bottom-center'})
  navigate("/login")

}
}





let validation = Yup.object({
  name:Yup.string().required("Username is required").min(3,"Username minLength is 3").max(20,"userName maxLength is 20"),
  email:Yup.string().required("Email is required").email("this email is invalid"),
  password:Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{5,10}$/,"password start with a capital char and write between 5 to 10 numbers or char"),
  rePassword:Yup.string().required("RePassword is required").oneOf([Yup.ref("password")] , "rePassword and Password must be same"),
  phone:Yup.string().required("Phone is required").matches(/01[0125][0-9]{8}$/,"phone number must be egyptian number"),
})



  let formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
    },
    validationSchema:validation,
    onSubmit:handelRegister
  })







  return <>
  <section className='here' >
  <div className="container-fluid ">
      <div className="vh-100 d-flex justify-content-center align-items-center ">

        <div className="card w-75 mb-5 p-2">
          <div className="card-body">
            <h2 className='text-center'>Registration</h2>
            <p className='text-center h6 mt-3'> Sign Up and Start Applying For Jobs</p>
        <form className="p-3" onSubmit={formik.handleSubmit}>

          <label className='fw-bold ' htmlFor="name">Name :-</label>
          <input type="text" className='form-control mt-2 mb-3' placeholder='Name' name='name' id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.name && formik.touched.name ? <p className='text-center text-danger fw-bold'>{formik.errors.name}</p> : null}

          <label className='fw-bold' htmlFor="email">Email :-</label>
          <input type="email" className='form-control  mt-2 mb-3' placeholder='Email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? <p className='text-center text-danger fw-bold'>{formik.errors.email}</p> : null}
          {messageError?<div className='alert alert-danger'>{messageError}</div>:null}

          <label className='fw-bold' htmlFor="password">Password :-</label>
          <input type="password" className='form-control  mt-2 mb-3' placeholder='Password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password ? <p className='text-center text-danger fw-bold'>{formik.errors.password}</p> : null}

          <label className='fw-bold' htmlFor="rePassword">RePassword :-</label>
          <input type="password" className='form-control  mt-2 mb-3' placeholder='RePassword' name='rePassword' id='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.rePassword && formik.touched.rePassword ? <p className='text-center text-danger fw-bold'>{formik.errors.rePassword}</p> : null}

          <label className='fw-bold' htmlFor="phone">Phone :-</label>
          <input type="tel" className='form-control  mt-2 mb-3' placeholder='Phone' name='phone' id='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.phone && formik.touched.phone ? <p className='text-center text-danger fw-bold'>{formik.errors.phone  }</p> : null}

          {isLoading?<button type='button' className='btn btn-primary w-100 mt-4 fw-bold fs-5'><i className='fas fa-spinner fa-spin'></i></button>:<button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-primary w-100 mt-4 fw-bold fs-5'>Sign up</button>}
          
        <p className='text-center mt-3 fw-bold'>Already on KLASSY ? <Link to={"/login"}> Sign in</Link> </p>
        </form>

          </div>
        </div>
  </div>
</div>
  </section>

  
  
  
  
  </>
}
