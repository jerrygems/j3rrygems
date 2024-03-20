import React from 'react'
import { Button, Form } from 'react-bootstrap'

function SignUp() {
  return (
    <div className='cented w-25'>
      <Form className='w-100 d-flex justify-content-center my-4 mx-2 rounded border text-start bg-white shadow-lg'>
        <Form.Group className='w-100 m-1 text-center p-5'>
          <h3 className='mt-3 mb-2'>Sign Up</h3>
          <small className='text-muted'>Enter you details here to sign up</small>
          <hr className='my-4 text-secondary'></hr>
          <Form.Control className='my-2' type='username' placeholder='your username'></Form.Control>
          <Form.Control className='my-2 mx-1' type='email' placeholder='your email'></Form.Control>

          <div className='d-flex flex-row'>
            <Form.Control className='my-2 mx-1' type='number' placeholder='your phone no.'></Form.Control>
            <Form.Control className='my-2 mx-1' type='date' placeholder='your DOB'></Form.Control>

          </div>

          <Form.Control className='my-2' type='Password' placeholder='your Password'></Form.Control>
          <Form.Control className='my-2' type='confPassword' placeholder='confirm Password'></Form.Control>
          <Button className='mt-3' variant='secondary'>Sign Up</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp