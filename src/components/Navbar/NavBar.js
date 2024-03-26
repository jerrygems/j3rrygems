import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';


function NavBar() {
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
                        <Nav.Link href="#action1">Blogs</Nav.Link>
                        <Nav.Link href="#action2">Articles</Nav.Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Android Security</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Kernel Hacking</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Game Hacking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">About Me</NavDropdown.Item>
                            <NavDropdown.Item href="#action7">Contacts</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Social Links</Nav.Link>
                        <Nav.Link href="#" disabled>
                            IRC
                        </Nav.Link>
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
            </Container>
        </Navbar>
    );
}

export default NavBar;