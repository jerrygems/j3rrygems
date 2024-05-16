import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WriteUpsList({ str1, str2, sid, title, description, date, author }) {
    return (

        <Link to={`/${str1}/${str2}/${sid}`} className='d-flex flex-row border rounded w-50 text-decoration-none text-dark' style={{ maxHeight: 160 }}>
            <div className='m-1 w-25'>
                <Image style={{ width: '100%', height: '100%' }} src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' rounded />
            </div>
            <div className='w-75 d-flex flex-column border rounded m-1'>
                <div className='d-flex text-start mx-3 my-1`'>
                    <h5>{title}</h5>
                </div>
                <div className='d-flex flex-column text-start mx-5'>
                    <small className='text-muted m-0'>Date: {date}</small>
                    <p className='m-0'>{description}</p>
                    <small className='text-muted m-0'>Authors :{author}</small>
                </div>
            </div>
        </Link>
    )
}

export default WriteUpsList