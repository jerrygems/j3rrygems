import React, { useEffect, useState } from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { useDarkMode } from '../Context/DarkModeProvider';
import Login from '../Forms/Login'
import SignUp from '../Forms/SignUp'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const bg = darkMode ? 'bg-dark' : 'bg-body-tertiary'
    const txtWhite = darkMode ? 'txt-white' : 'text-black'
    const dk = darkMode ? 'dark' : 'nondark'
    const [isLoggedIn, setIsLoggedIn] = useState(false);


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

    useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('jwt_token');
        setIsLoggedIn(false);
        setSignUpToggle(false);
        setLoginToggle(false);
        window.location.href = `${process.env.REACT_APP_WEB_URL}:${process.env.REACT_APP_FPORT}`
    };

    const navigator = useNavigate()
    const searchFun = () => {
        navigator("/search")
    }
    return (
        <Navbar expand="lg" className={`${bg} ${dk}`}>
            <Container fluid>
                <Navbar.Brand ><Link className={`${txtWhite} text-decoration-none`} to={'/'}>J3rrygems</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className={`${txtWhite} text-decoration-none`} as={Link} to={'/Blogs'}>Blogs</Nav.Link>
                        <Nav.Link className={`${txtWhite} text-decoration-none`} as={Link} to={'/Writeups'}>WriteUps</Nav.Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} className={`${txtWhite} text-decoration-none`} to={'/ASB'}>Android Security</NavDropdown.Item>
                            <NavDropdown.Item as={Link} className={`${txtWhite} text-decoration-none`} to={'/KHB'}>Kernel Hacking</NavDropdown.Item>
                            <NavDropdown.Item as={Link} className={`${txtWhite} text-decoration-none`} to={'/GHB'}>Game Hacking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} className={`${txtWhite} text-decoration-none`} to={'/about'}>About Me</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link className={`${txtWhite} text-decoration-none`} as={Link} to={'/IRC'}>IRC</Nav.Link> */}
                        {!isLoggedIn && (
                            <>
                                <button className='m-1 btn btn-dark' onClick={signuptoggler}>Sign Up</button>
                                <button className='m-1 btn btn-dark' onClick={logintoggler}>Login</button>
                            </>
                        )}
                        {isLoggedIn && (
                            <Button className='btn btn-dark' onClick={handleLogout}>Logout</Button>
                        )}
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success m-1" onClick={toggleDarkMode}><i className='fa fa-moon-o'></i></Button>
                        <Button variant="outline-primary m-1" onClick={searchFun}><i className='fa fa-search'></i></Button>
                    </Form>
                </Navbar.Collapse>
                {SignUpToggle && <SignUp />}
                {LoginToggle && <Login />}
            </Container>

        </Navbar>
    );
}

export default NavBar;