import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';

function AdminSideNavLite() {
    const wind = window.innerWidth < 1000 ? 'my-5' : ''
    const { darkMode, toggleDarkMode } = useDarkMode();
    const clr = darkMode ? 'color1' : ''
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    return (
        <div className={`flex-row ${window.innerWidth<1000 ? 'w-100':'w-25'} ${txtWhite} justify-content-center ${clr} `}>
            <ListGroup className='bg-transparent d-flex flex-row'>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-bar-chart'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/blogs-panel"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-book'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/writeup-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i class="fa fa-edit"></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/khb-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-gears'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/ghb-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-gamepad'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/asb-list"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-mobile'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/announcements"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-bullhorn'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/events"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-calendar'></i></ListGroup.Item></Link>
            </ListGroup>
            <ListGroup className='bg-transparent d-flex flex-row'>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-play'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-bug'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-comments'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-wrench'></i></ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/"}><ListGroup.Item className={`border-0 ${txtWhite}`}><i className='fa fa-hammer'></i></ListGroup.Item></Link>
            </ListGroup>
        </div>
    )
}

export default AdminSideNavLite