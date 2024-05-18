import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../../styles/style.css"


function SideNav() {
    return (
        <div className='flex-column w-25 justify-content-center color1'>
            <h5 className='mt-3 txt-white'>HOME</h5>
            <ListGroup>

                <Link className='text-decoration-none' to={"/Blogs"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>Blogs</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/WriteUps"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>WriteUps</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/KHB"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>Kernel Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/GHB"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>Game Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/ASB"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>Android Security</ListGroup.Item></Link>
            </ListGroup>
            <h5 className='mt-3 txt-white'>Reports & FAQs</h5>
            <ListGroup>
                <Link className='text-decoration-none' to={"/Announcements"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>Announcements</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/Events"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>Events</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/About"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>About</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"https://www.youtube.com/@Cyb3r.Society"}><ListGroup.Item className='ls-item bg-transparent border-0 txt-hover'>Tutorial</ListGroup.Item></Link>
            </ListGroup>
        </div>
    )
}

export default SideNav