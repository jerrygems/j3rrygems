import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminSideNav() {
    return (
        <div className='flex-column w-25 txt-white justify-content-center color1'>
            <h5 className='mt-3'>DashBoard</h5>
            <hr></hr>
            <ListGroup className='bg-transparent'>

                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className='border-0'>Insights</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/blogs-panel"}><ListGroup.Item className='border-0'>Blogs</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/writeup-list"}><ListGroup.Item className='border-0'>WriteUps</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/khb-list"}><ListGroup.Item className='border-0'>Kernel Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/ghb-list"}><ListGroup.Item className='border-0'>Game Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/asb-list"}><ListGroup.Item className='border-0'>Android Security</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/announcements"}><ListGroup.Item className='border-0'>Announcements</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/events"}><ListGroup.Item className='border-0'>Events</ListGroup.Item></Link>
            </ListGroup>
            <hr></hr>
            <h5 className='mt-3'>Others</h5>
            <hr></hr>
            <ListGroup>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className='border-0'>Tutorials</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className='border-0'>Reports</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className='border-0'>Feedbacks</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className='border-0'>Bugs&Fixes</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className='border-0'>Tools</ListGroup.Item></Link>
            </ListGroup>
        </div>
    )
}

export default AdminSideNav