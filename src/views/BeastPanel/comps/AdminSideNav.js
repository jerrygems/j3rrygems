import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminSideNav() {
    return (
        <div className='flex-column w-25 text-dark justify-content-center m-2 '>
            <h5 className='mt-3'>DashBoard</h5>
            <hr></hr>
            <ListGroup>

                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/"}>Insights</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/blogs-panel"}>Blogs</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/writeup-list"}>WriteUps</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/khb-list"}>Kernel Hacking</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/ghb-list"}>Game Hacking</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/asb-list"}>Android Security</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/announcements"}>Announcements</Link></ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={"/events"}>Events</Link></ListGroup.Item>
            </ListGroup>
            <hr></hr>
            <h5 className='mt-3'>Others</h5>
            <hr></hr>
            <ListGroup>

                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={""}></Link>Tutorials</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={""}></Link>Reports</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={""}></Link>Feedbacks</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={""}></Link>Bugs&Fixes</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'><Link className='text-decoration-none text-dark' to={""}></Link>Tools</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default AdminSideNav