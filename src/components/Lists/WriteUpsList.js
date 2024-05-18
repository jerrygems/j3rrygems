import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WriteUpsList({ str1, str2, sid, title, description, date, author }) {
    return (

        <Link to={`/${str1}/${str2}/${sid}`} className='d-flex flex-row rounded w-50 txt-white' style={{ maxHeight: 160 }}>
            <div className='w-100 d-flex flex-column rounded m-1 cover1'>
                <div className='d-flex text-start mx-3 my-1`'>
                    <h5 className='m-3'>{title.substring(0,40)}</h5>
                </div>
                <div className='d-flex flex-column text-start mx-5'>
                    <small className='m-0'>Date: {date.slice(0,10)}</small>
                    <p className='m-0'>{description.substring(0,60)}...</p>
                    <small className='m-0'>Authors :{author?.name}</small>
                </div>
            </div>
        </Link>
    )
}

export default WriteUpsList