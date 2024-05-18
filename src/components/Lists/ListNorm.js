import React from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../Context/DarkModeProvider';

function ListNorm({ str1, str2, sid, title, description, date }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'text-black'
    return (
        <Link to={`/${str1}/${str2}/${sid}`} className={`d-flex flex-column rounded m-1 text-decoration-none ${txtWhite} ${cover} ${border}`}>
            <div className='d-flex mx-3`'>
                <h5 className='m-3'>{title?.substring(0, 40)}</h5>
            </div>
            <div className='d-flex flex-column text-start mx-5'>
                <p>{description?.substring(0, 60)}</p>
                <p>Date: {date?.slice(0, 10)}</p>
            </div>
        </Link>
    )
}

export default ListNorm