import React from 'react'
import {Button, Form} from 'react-bootstrap'

function SignUp() {
  return (
    <Form className='d-flex my-4 mx-2 rounded border text-start'>
        <Form.Group className='m-1 text-center p-5'>
            <h3 className='mt-3 mb-2'>Sign Up</h3>
            <small className='text-muted'>Enter you details here to sign up</small>
            <hr className='my-4 text-secondary'></hr>
            <Form.Control className='my-2' type='username' placeholder='your username'></Form.Control>
            <Form.Control className='my-2' type='Email' placeholder='your email'></Form.Control>
            <Form.Control className='my-2' type='Password' placeholder='your Password'></Form.Control>
            <Form.Control className='my-2' type='confPassword' placeholder='confirm Password'></Form.Control>
            <Button className='mt-3' variant='secondary'>Sign Up</Button>

        </Form.Group>
    </Form>
  )
}

export default SignUp