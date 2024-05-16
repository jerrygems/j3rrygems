import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../../styles/style.css"


function SideNav() {
    return (
        <div className='flex-column w-25 text-primary justify-content-center m-2'>
            <h5 className='mt-3'>HOME</h5>
            <ListGroup>

                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/Blogs"}>Blogs</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/WriteUps"}>CTF Writeups</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/KHB"}>Kernel Hacking</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/GHB"}>Game Hacking</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/ASB"}>Android Security</Link></ListGroup.Item>
            </ListGroup>
            <h5 className='mt-3'>Reports & FAQs</h5>
            <ListGroup>

                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/Announcements"}>Announcements</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/Events"}>Events</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/About"}>About</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"/Projects"}>Projects</Link></ListGroup.Item>
                <ListGroup.Item className='ls-item'><Link className='text-decoration-none text-dark' to={"https://www.youtube.com/@Cyb3r.Society"}>Tutorials</Link></ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SideNav