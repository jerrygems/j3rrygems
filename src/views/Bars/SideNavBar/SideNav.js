import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../../styles/style.css"
import { useDarkMode } from '../../../components/Context/DarkModeProvider';


function SideNav() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const clr = darkMode ? 'color1' : ''
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    return (
        <div className={`flex-column justify-content-center ${clr} envy`}>
            <h5 className={`mt-3 ${txtWhite}`}>HOME</h5>
            <ListGroup>

                <Link className='text-decoration-none' to={"/Blogs"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>Blogs</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/WriteUps"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>WriteUps</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/KHB"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>Kernel Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/GHB"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>Game Hacking</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/ASB"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>Android Security</ListGroup.Item></Link>
            </ListGroup>
            <h5 className={`mt-3 ${txtWhite}`} >Reports & FAQs</h5>
            <ListGroup>
                <Link className='text-decoration-none' to={"/Announcements"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>Announcements</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/Events"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>Events</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"/About"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>About</ListGroup.Item></Link>
                <Link className='text-decoration-none' to={"https://www.youtube.com/@Cyb3r.Society"}><ListGroup.Item className={`ls-item bg-transparent border-0 ${txtWhite}`}>Tutorial</ListGroup.Item></Link>
            </ListGroup>
        </div>
    )
}

export default SideNav