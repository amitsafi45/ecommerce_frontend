import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SignUp=()=>{
  const navigate = useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const getData=async()=>{
     let result=await fetch('http://localhost:5000/api/sign-up',{
       method:'post',
       body:JSON.stringify({name,email,password}),
       headers:{
         'content-type':'application/json'
       }

     })
     result=await result.json()
     localStorage.setItem('user',JSON.stringify(result))
      //  if(result){
      //   navigate('/')
      //  }
    }

    return(
        <>
         <Form >
         <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
      
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={getData} >
        Submit
      </Button>
    </Form>
        </>
    )
}