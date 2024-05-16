import React from 'react'
import { Link } from 'react-router-dom'

function ListNorm({str1,str2,sid,title,description,date}) {
    return (
        <Link to={`/${str1}/${str2}/${sid}`} className='d-flex flex-column border rounded m-1 text-decoration-none text-dark'>
            <div className='d-flex mx-3 my-1`'>
                <h5>{title}</h5>
            </div>
            <div className='d-flex flex-column text-start mx-5'>
                <p>{description}</p>
                <p>Date: {date}</p>
            </div>
        </Link>
    )
}

export default ListNorm