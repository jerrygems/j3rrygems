import React, { useState } from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Login from '../Forms/Login'
import SignUp from '../Forms/SignUp'

function NavBar() {
    const [SignUpToggle, setSignUpToggle] = useState(false)
    const [LoginToggle, setLoginToggle] = useState(false)
    const signuptoggler = () => {
        setSignUpToggle(prevstate => !prevstate)
        setLoginToggle(false)

    }
    const logintoggler = () => {
        setLoginToggle(prevstate => !prevstate)
        setSignUpToggle(false)
    }
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">J3rrygems</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/Blogs">Blogs</Nav.Link>
                        <Nav.Link href="/Articles">Articles</Nav.Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/ASB">Android Security</NavDropdown.Item>
                            <NavDropdown.Item href="/KHB">Kernel Hacking</NavDropdown.Item>
                            <NavDropdown.Item href="/GHB">Game Hacking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">About Me</NavDropdown.Item>
                            <NavDropdown.Item href="#action7">Contacts</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Social Links</Nav.Link>
                        <Nav.Link href="#" disabled>
                            IRC
                        </Nav.Link>
                        <button className='mx-3 btn btn-dark' onClick={signuptoggler}>Sign Up</button>
                        <button className='mx-1 btn btn-dark' onClick={logintoggler}>Login</button>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Here"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success"><i className='fa fa-search'></i></Button>
                    </Form>
                </Navbar.Collapse>
                {SignUpToggle && <SignUp />}
                {LoginToggle && <Login />}
            </Container>

        </Navbar>
    );
}

export default NavBar;