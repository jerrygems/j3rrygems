import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ListNormAdmin({ sid, title, description, date, strn }) {
    return (
        <div className='d-flex flex-column border rounded m-1'>
            <div className='d-flex mx-4 mt-3 mb-1`'>
                <h5>{title}</h5>
            </div>
            <div className='d-flex flex-row mx-5'>
                <div className='w-75 d-flex flex-column text-start'>
                    <p>{description}</p>
                    <p>{date}</p>
                </div>
                <div className='w-25 justify-content-between'>
                    <Button className='btn btn-success m-2'><i className='fa fa-edit'></i> <Link className='text-decoration-none text-white' to={`/${strn}/${sid}`} >Edit</Link></Button>
                    <Button className='btn btn-danger' m-2><i className='fa fa-trash'></i> Trash</Button>
                </div>
            </div>
        </div>
    )
}

export default ListNormAdmin