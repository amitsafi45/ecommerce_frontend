import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navs } from "./Nav";
import { Footer } from "./Footer";
import { SignUp } from "./SignUp";
const App = () => {
  return (
    <div>

      <Navs />

      <Routes>
        <Route path="/" element={<><h1>Product Listing</h1></>} />
        <Route path="/add" element={<><h1>Add Product Listing</h1></>} />
        <Route path="/update" element={<><h1>Update Product Listing</h1></>} />
        <Route path="/logout" element={<><h1>Logout</h1></>} />
        <Route path="/profile" element={<><h1>Profile</h1></>} />
        <Route path='/sign-up' element={<SignUp/>}/>

      </Routes>
      

    
   
    </div>
  )
}
export default App