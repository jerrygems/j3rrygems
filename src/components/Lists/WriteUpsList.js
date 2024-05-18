import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../Context/DarkModeProvider';

function WriteUpsList({ str1, str2, sid, title, description, date, author }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const bg = darkMode ? 'footer' : 'bg-body-tertiary'
    const clr = darkMode ? 'cover1' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    return (

        <Link to={`/${str1}/${str2}/${sid}`} className={`d-flex flex-row rounded w-50 ${txtWhite}`} style={{ maxHeight: 180 }}>
            <div className={`w-100 d-flex flex-column rounded m-3 ${clr}`}>
                <div className='d-flex text-start mx-3 my-1`'>
                    <h5 className='m-3'>{title.substring(0, 40)}</h5>
                </div>
                <div className='d-flex flex-column text-start mx-5'>
                    <small className='m-0'>Date: {date.slice(0, 10)}</small>
                    <p className='m-0'>{description.substring(0, 60)}...</p>
                    <small className='m-0'>Authors :{author?.name}</small>
                </div>
            </div>
        </Link>
    )
}

export default WriteUpsList