import React from 'react'
import { ListGroup, NavLink } from 'react-bootstrap'


function Footer() {
    return (
        <div className='d-flex flex-column p-2 txt-white footer'>
            <div className='d-flex flex-row mx-5 my-2'>
                <h4 ><b>J3rrygems</b></h4>
            </div>
            <div className='d-flex flex-wrap justify-content-around'>
                <div className='d-flex flex-column text-start'>
                    <h3 className='txt-white'>Menu</h3>
                    <ListGroup className=''>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className='txt-white'>Blogs</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className='txt-white'>Articles</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className='txt-white'>WriteUps</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className='txt-white'>Android Security</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className='txt-white'>Game Hacking</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className='txt-white'>Kernel Hacking</a></ListGroup.Item>
                    </ListGroup>
                </div>

                <div className='d-flex flex-column text-start'>
                    {/* <small>Menu</small> */}
                    <ListGroup className=''>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-reddit' style={{color:'#FF8b60'}}  > <a className='txt-white' href='#'>Reddit  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-github' style={{color:'#000000'}}   > <a className='txt-white' href='#'>Github  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-linkedin'style={{color:'#0077b5'}} > <a className='txt-white' href='#'>LinkedIn</a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-twitter' style={{color:'#1DA1F2'}} > <a className='txt-white' href='#'>Twitter </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-youtube' style={{color:'red'}} > <a className='txt-white' href='#'>YouTube </a></i></ListGroup.Item>
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