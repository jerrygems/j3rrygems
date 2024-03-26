import React from 'react'
import { Form, Button } from 'react-bootstrap'

function Login() {
    return (
        <div style={{ zIndex: 1, width: '100%', height: '100%', backgroundColor: 'black' }}>

            <div className='cented w-25'>
                <Form className='w-100 d-flex justify-content-center my-4 mx-2 rounded border text-start bg-white shadow-lg'>
                    <Form.Group className='m-1 text-center p-5'>
                        <h3 className='mt-3 mb-2'>Login</h3>
                        <small className='text-muted'>Enter you details here to Login</small>
                        <hr className='my-4 text-secondary'></hr>
                        <Form.Control className='my-2' type='email' placeholder='your email'></Form.Control>
                        <Form.Control className='my-2' type='Password' placeholder='your Password'></Form.Control>
                        <Button className='mt-3' variant='secondary'>Login</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Login