import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from "axios"
import { Link , useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function Login({saveUserData}) {
  let navigate = useNavigate()
const [messageError, setMessageError] = useState("")
const [isLoading, setIsLoading] = useState(false)

async function handelLogin(values){
  setIsLoading(true)
let {data} = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",values).catch((error)=>{
  setIsLoading(false)
  setMessageError(error.response.data.message)
  toast.error(`${error.response.data.message}`,{ duration: 2000, position: 'bottom-center'})
})
if (data.message === "success"){
  localStorage.setItem("userToken",data.token)
  saveUserData()
  toast.success("successfully Login",{ duration: 2000, position: 'bottom-center'})
  navigate("/")
}
}

let validation = Yup.object({
  email:Yup.string().required("Email is required").email("this email is invalid"),
  password:Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{5,10}$/,"password start with a capital char and write between 5 to 10 numbers or char"),
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
    onSubmit:handelLogin
  })







  return <>
  <section >
  <div className="container-fluid ">
      <div className="vh-100 d-flex justify-content-center align-items-center ">

        <div className="card w-75  p-2">
          <div className="card-body">
            <h2 className='text-center'>Login</h2>
            <p className='text-center h6 mt-3'>Welcome Back</p>
        <form className="p-3" onSubmit={formik.handleSubmit}>

          <label className='fw-bold' htmlFor="email">Email :-</label>
          <input type="email" className='form-control  mt-2 mb-3' placeholder='Email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.email && formik.touched.email ? <p className='text-center text-danger fw-bold'>{formik.errors.email}</p> : null}
          {messageError?<div className='alert alert-danger'>{messageError}</div>:null}

          <label className='fw-bold' htmlFor="password">Password :-</label>
          <input type="password" className='form-control  mt-2 mb-3' placeholder='Password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.password && formik.touched.password ? <p className='text-center text-danger fw-bold'>{formik.errors.password}</p> : null}



          {isLoading?<button type='button' className='btn btn-primary w-100 mt-4 fw-bold fs-5'><i className='fas fa-spinner fa-spin'></i></button>:<button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-primary w-100 mt-4 fw-bold fs-5'>Sign in</button>}
          
        <p className='text-center mt-3 fw-bold'>New to KLASSY ? <Link to={"/register"}>Join now</Link> </p>
        </form>

          </div>
        </div>
  </div>
</div>
  </section>

  
  
  
  
  </>
}