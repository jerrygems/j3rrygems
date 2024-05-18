import React from 'react'
import { ListGroup, NavLink } from 'react-bootstrap'
import { useDarkMode } from '../Context/DarkModeProvider';


function Footer() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const bg = darkMode ? 'footer' : 'bg-body-tertiary'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    return (
        <div className={`d-flex flex-column p-2 ${txtWhite} ${bg}`}>
            <div className='d-flex flex-row mx-5 my-2'>
                <h4><b>J3rrygems</b></h4>
            </div>
            <div className='d-flex flex-wrap justify-content-around'>
                <div className='d-flex flex-column text-start'>
                    <h3 className={`${txtWhite}`}>Menu</h3>
                    <ListGroup className=''>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className={`${txtWhite}`}>Blogs</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className={`${txtWhite}`}>Articles</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className={`${txtWhite}`}>WriteUps</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className={`${txtWhite}`}>Android Security</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className={`${txtWhite}`}>Game Hacking</a></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><a className={`${txtWhite}`}>Kernel Hacking</a></ListGroup.Item>
                    </ListGroup>
                </div>

                <div className='d-flex flex-column text-start'>
                    {/* <small>Menu</small> */}
                    <ListGroup >
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-reddit' style={{ color: '#FF8b60' }}  > <a className={`${txtWhite}`} href='#'>Reddit  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-github' style={{ color: '#000000' }}   > <a className={`${txtWhite}`} href='#'>Github  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-linkedin' style={{ color: '#0077b5' }} > <a className={`${txtWhite}`} href='#'>LinkedIn</a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-twitter' style={{ color: '#1DA1F2' }} > <a className={`${txtWhite}`} href='#'>Twitter </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-youtube' style={{ color: 'red' }} > <a className={`${txtWhite}`} href='#'>YouTube </a></i></ListGroup.Item>
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