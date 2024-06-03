import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDarkMode } from '../Context/DarkModeProvider';
import { Link } from 'react-router-dom';


function Footer() {
    const { darkMode } = useDarkMode();
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
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><Link className={`${txtWhite} text-decoration-none`} to={'/Blogs'}>Blogs</Link></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><Link className={`${txtWhite} text-decoration-none`} to={'/Writeups'}>WriteUps</Link></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><Link className={`${txtWhite} text-decoration-none`} to={'/ASB'}>Android Security</Link></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><Link className={`${txtWhite} text-decoration-none`} to={'/GHB'}>Game Hacking</Link></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><Link className={`${txtWhite} text-decoration-none`} to={'/KHB'}>Kernel Hacking</Link></ListGroup.Item>
                    </ListGroup>
                </div>

                <div className='d-flex flex-column text-start'>
                    {/* <small>Menu</small> */}
                    <ListGroup >
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-reddit' style={{ color: '#FF8b60' }}  > <a className={`${txtWhite}`} href='https://www.reddit.com/user/Sp1d3y001/'>Reddit  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-github' style={{ color: '#000000' }}   > <a className={`${txtWhite}`} href='https://github.com/jerrygems'>Github  </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-linkedin' style={{ color: '#0077b5' }} > <a className={`${txtWhite}`} href='https://linkedin.com/in/jerrygems'>LinkedIn</a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-twitter' style={{ color: '#1DA1F2' }} > <a className={`${txtWhite}`} href='https://x.com/Shubham_lnx'>Twitter </a></i></ListGroup.Item>
                        <ListGroup.Item className='border-0 p-1 bg-transparent'><i className='fa fa-youtube' style={{ color: 'red' }} > <a className={`${txtWhite}`} href='https://www.youtube.com/@Cyb3r.Society'>YouTube </a></i></ListGroup.Item>
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