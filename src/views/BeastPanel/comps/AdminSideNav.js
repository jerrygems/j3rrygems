import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';

function AdminSideNav() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const clr = darkMode ? 'color1' : ''
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    return (
        <div className={`flex-column w-25 ${txtWhite} justify-content-center ${clr}`}>
            <h5 className='mt-3'>DashBoard</h5>
            <hr></hr>
            <ListGroup className='bg-transparent'>

                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Insights</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/blogs-panel"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Blogs</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/writeup-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}>WriteUps</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/khb-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Kernel Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/ghb-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Game Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/asb-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Android Security</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/announcements"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Announcements</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/events"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Events</ListGroup.Item></Link>
            </ListGroup>
            <hr></hr>
            <h5 className='mt-3'>Others</h5>
            <hr></hr>
            <ListGroup>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Tutorials</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Reports</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Feedbacks</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Bugs&Fixes</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}>Tools</ListGroup.Item></Link>
            </ListGroup>
        </div>
    )
}

export default AdminSideNav