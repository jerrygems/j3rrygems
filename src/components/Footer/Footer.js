import React from 'react'
import { ListGroup, NavLink } from 'react-bootstrap'


function Footer() {
    return (
        <div className='d-flex flex-column p-2'>
            <div className='d-flex flex-row mx-5 my-2'>
                <h4 className='text-dark'><b>J3rrygems</b></h4>
            </div>
            <div className='d-flex flex-wrap justify-content-around'>
                <div className='d-flex flex-column text-start'>
                    <small>Menu</small>
                    <ListGroup className=''>
                        <ListGroup.Item className='border-0 p-1'><NavLink href='#'>Blogs</NavLink></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><NavLink href='#'>Article</NavLink></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><NavLink href='#'>WriteUps</NavLink></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><NavLink href='#'>Android Security</NavLink></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><NavLink href='#'>Game Hacking</NavLink></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><NavLink href='#'>Kernel Hacking</NavLink></ListGroup.Item>
                    </ListGroup>
                </div>

                <div className='d-flex flex-column text-start'>
                    <small>Menu</small>
                    <ListGroup className=''>
                        <ListGroup.Item className='border-0 p-1'><i className='fa fa-reddit'  > <a className='text-decoration-none' href='#'>Reddit  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><i className='fa fa-github'  > <a className='text-decoration-none' href='#'>Github  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><i className='fa fa-linkedin'> <a className='text-decoration-none' href='#'>LinkedIn</a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><i className='fa fa-twitter' > <a className='text-decoration-none' href='#'>Twitter </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1'><i className='fa fa-youtube' > <a className='text-decoration-none' href='#'>YouTube </a></i></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <div className='d-flex flex-row text-center justify-content-center'>
                <small className=''>All rights are reserved</small>
            </div>
        </div>
    )
}

export default Footer