import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const login = async () => {
        let request = await fetch("http://192.168.29.169:5000/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: pass,
            })

        })
        console.log(request)
        if (request.ok) {
            const data = await request.json()
            const token = data.token
            localStorage.setItem("jwt_token", token)
            console.log("login succeded ;-)")
            navigate('/')
        } else {
            console.log("login failed ;-(")
        }
    }
    return (
        <div style={{ position: 'absolute', zIndex: 1, marginTop: 700, width: '100%', height: '100%' }}>

            <div className='cented w-25'>
                <Form className='w-100 d-flex justify-content-center my-4 mx-2 rounded border text-start bg-white shadow-lg'>
                    <Form.Group className='m-1 text-center p-5'>
                        <h3 className='mt-3 mb-2'>Login</h3>
                        <small className='text-muted'>Enter you details here to Login</small>
                        <hr className='my-4 text-secondary'></hr>
                        <Form.Control className='my-2' type='email' placeholder='your email' onChange={(e) => setEmail(e.target.value)} defaultValue={email}></Form.Control>
                        <Form.Control className='my-2' type='Password' placeholder='your Password' onChange={(e) => setPass(e.target.value)} defaultValue={pass}></Form.Control>
                        <Button className='mt-3' variant='secondary' onClick={login}>Login</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Login