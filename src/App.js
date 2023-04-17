import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import ProtectedRouter from './Components/ProtectedRouter/ProtectedRouter';
import { useEffect, useState } from 'react';
import  jwtDecode  from 'jwt-decode';
import toast, { Toaster } from 'react-hot-toast';

function App() {


  useEffect(()=>{
    if(localStorage.getItem("userToken")!==null){
      saveUserData()
    }
  })


  const [userData, setUserData] = useState(null)
function saveUserData(){
  let encodedToken = localStorage.getItem("userToken")
  let decodedToken = jwtDecode(encodedToken)
  setUserData(decodedToken)
}


let routers =createHashRouter([{
path:"" ,element:<Layout setUserData={setUserData} userData={userData}/>, children:[
  {index:true , element:<ProtectedRouter><Home/></ProtectedRouter>},
  {path:"register" , element:<Register/>},
  {path:"login" , element:<Login saveUserData={saveUserData}/>},
  
]
}])



  return <>
  <Toaster/>
<RouterProvider router={routers}/>
  </>
}

export default App;
