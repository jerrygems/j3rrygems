import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const login = async () => {
        let request = await fetch("http://localhost:5000/auth/login", {
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
            window.location.reload()
        } else {
            console.log("login failed ;-(")
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            login();
        }
    };
    return (

        <div className='cented'>
            <Form className='w-100 d-flex justify-content-center my-4 mx-2 rounded border text-start bg-white shadow-lg' onKeyDown={handleKeyDown}>
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
    )
}

export default Login