import React from 'react'
import { ListGroup } from 'react-bootstrap'

function AdminSideNav() {
    return (
        <div className='flex-column w-25 text-dark justify-content-center m-2 '>
            <h5 className='mt-3'>DashBoard</h5>
            <hr></hr>
            <ListGroup>

                <ListGroup.Item className='border-0 ls-item'>Insights</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Blogs</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>WriteUps</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Kernel Hacking</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Game Hacking</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Android Security</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Announcements</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Events</ListGroup.Item>
            </ListGroup>
            <hr></hr>
            <h5 className='mt-3'>Others</h5>
            <hr></hr>
            <ListGroup>

                <ListGroup.Item className='border-0 ls-item'>Tutorials</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Reports</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Feedbacks</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Bugs&Fixes</ListGroup.Item>
                <ListGroup.Item className='border-0 ls-item'>Tools</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default AdminSideNav