import React from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../Context/DarkModeProvider';

function ListNorm({ str1, str2, sid, title, description, date }) {
    const { darkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'text-black'
    return (
        <Link to={`/${str1}/${str2}/${sid}`} className={`d-flex flex-column rounded text-decoration-none mb-3 ${txtWhite} ${cover} ${border}`}>
            <div className='d-flex'>
                <h5 className='mx-3 mt-3'>{title?.substring(0, 40)}</h5>
            </div>
            <div className='d-flex flex-column'>
                <hr></hr>
                <p className='text-start mx-4'>{description?.substring(0, 60)}...</p>
                <hr/>
                <p className='text-start mx-3 small'>Date: {date?.slice(0, 10)}</p>
            </div>
        </Link>
    )
}

export default ListNorm