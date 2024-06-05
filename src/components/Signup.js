// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// function Signup() {
//   const[name,setName]=useState("")
//   const[email,setEmail]=useState("")
//   const[phone,setPhone]=useState("")
//   const[city,setCity]=useState("")
//   const[password,setPassword]=useState("")
//   function adduser(e)
//   {
//     e.preventDefault()
//     let user={name,email,phone,city,password}
//     fetch("http://localhost:3000/users",{
//      method:"post",
//      headers:{
//       "content-type":"application/json"
//      },
//      body:JSON.stringify(user)
//     })
//   }
//   return (
//     <div className='container mt-5 text-start'>
//       <h1 className='text-center mb-4'style={{fontFamily:"brush script mt"}}>New User Form</h1>
//        <Form onSubmit={adduser}>
//        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupName">
//         <Form.Label>Username:</Form.Label>
//         <Form.Control type="text" placeholder="Enter username" className='w-50' value={name} onChange={(e)=>setName(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupEmail">
//         <Form.Label>Email address:</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" className='w-50' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPhone">
//         <Form.Label> Phone Number:</Form.Label>
//         <Form.Control type="text" placeholder="Enter phone number" className='w-50' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
//       </Form.Group>
      
//       <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupCity">
//         <Form.Label>Address:</Form.Label>
//         <Form.Control type="text" placeholder="Enter City" className='w-50' value={city} onChange={(e)=>setCity(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPassword">
//         <Form.Label>Password:</Form.Label>
//         <Form.Control type="password" placeholder="Enter Password" className='w-50' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//       </Form.Group>

//       <Button variant="primary" type="submit" className='mx-auto d-block mt-5'>
//         Sign Up
//       </Button>
//     </Form>
//     </div>
//   )
// }

// export default Signup

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Signup() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [city,setCity]=useState("")
  const [password,setPassword]=useState("")
  function adduser(e)
  {
    e.preventDefault()
    let user={name,email,phone,city,password}
    fetch("http://localhost:3000/users",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
  }
  return (
    <div className='container text-start mt-5'>
      <h3 className='text-center mb-4'>New User Form</h3>
      <Form onSubmit={adduser}>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" className='w-50' value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='w-50' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" className='w-50' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupCity">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter city" className='w-50' value={city} onChange={(e)=>setCity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='w-50' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='mx-auto d-block'>
        Sign Up
      </Button>
    </Form>
    </div>
  )
}

export default Signup