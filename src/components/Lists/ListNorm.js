import React from 'react'
import { Link } from 'react-router-dom'

function ListNorm({str1,str2,sid,title,description,date}) {
    return (
        <Link to={`/${str1}/${str2}/${sid}`} className='d-flex flex-column rounded m-1 text-decoration-none txt-white cover1'>
            <div className='d-flex mx-3`'>
                <h5 className='m-3'>{title?.substring(0,40)}</h5>
            </div>
            <div className='d-flex flex-column text-start mx-5'>
                <p>{description?.substring(0,60)}</p>
                <p>Date: {date?.slice(0,10)}</p>
            </div>
        </Link>
    )
}

export default ListNorm