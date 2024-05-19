import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../Context/DarkModeProvider';

function WriteUpsList({ str1, str2, sid, title, description, date, author }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const bg = darkMode ? 'footer' : 'bg-body-tertiary'
    const clr = darkMode ? 'cover1' : 'dcover1 border'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    return (

        <Link to={`/${str1}/${str2}/${sid}`} className={`d-flex flex-row rounded ${txtWhite} wrtBox`} style={{ minHeight: 180 }}>
            <div className={`w-100 d-flex flex-column rounded m-3 ${clr}`}>
                <div className='d-flex text-start`'>
                    <h5 className='mx-3 my-2 text-start'>{title.substring(0, 40)}</h5>
                </div>
                <hr/>
                <div className='d-flex flex-column text-start'>
                    <small className='mx-4'>Date: {date.slice(0, 10)}</small>
                    <p className='mx-5'>{description.substring(0, 60)}...</p>
                    <hr/>
                    <small className='mx-3 mb-3 text-secondary'>Authors :{author?.name}</small>
                </div>
            </div>
        </Link>
    )
}

export default WriteUpsList