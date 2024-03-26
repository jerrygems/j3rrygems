import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function SignUp() {

  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPass] = useState('')
  const [confPassword, setConfPass] = useState('')

  const signUp = (event) => {
    fetch('/api/auth/login')
  }


  return (
    <div style={{ zIndex: 1, width: '100%', height: '100%', backgroundColor: 'black' }}>

      <div className='cented w-25'>
        <Form className='w-100 d-flex justify-content-center my-4 mx-2 rounded border text-start bg-white shadow-lg'>
          <Form.Group className='w-100 m-1 text-center p-5'>
            <h3 className='mt-3 mb-2'>Sign Up</h3>
            <small className='text-muted'>Enter you details here to sign up</small>
            <hr className='my-4 text-secondary'></hr>
            <Form.Control className='my-2' type='username' placeholder='your username' onChange={(e) => setUname(e.target.value)} defaultValue={uname}></Form.Control>
            <Form.Control className='my-2 mx-1' type='email' placeholder='your email' onChange={(e) => setEmail(e.target.value)} defaultValue={email}></Form.Control>

            <div className='d-flex flex-row'>
              <Form.Control className='my-2 mx-1' type='number' placeholder='your phone no.' onChange={(e) => setNumber(e.target.value)} defaultValue={number}></Form.Control>
              <Form.Control className='my-2 mx-1' type='date' placeholder='your DOB' onChange={(e) => setDate(e.target.value)} defaultValue={date}></Form.Control>

            </div>

            <Form.Control className='my-2' type='Password' placeholder='your Password' onChange={(e) => setPass(e.target.value)} defaultValue={password}></Form.Control>
            <Form.Control className='my-2' type='confPassword' placeholder='confirm Password' onChange={(e) => setConfPass(e.target.value)} defaultValue={confPassword}></Form.Control>
            <Button className='mt-3' variant='secondary'>Sign Up</Button>
          </Form.Group>
        </Form>
      </div>
    </div>

  )
}

export default SignUp