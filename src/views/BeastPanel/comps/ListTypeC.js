import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ListTypeB({ title, description, date }) {
  return (
    <div className='d-flex flex-row cover1 rounded m-3'>

      <div className='d-flex flex-column mx-5 my-2'>
        <div className='d-flex flex-column text-start w-75'>
          <h4 >{title?.substring(0,40)}<hr></hr></h4>
          <h6 >{description?.substring(0,80)}</h6>
          <h6>{date}</h6>
        </div>
        <hr></hr>
        <div className='d-flex flex-row align-items-center justify-content-end '>
          <Button className='btn-sm btn-danger mx-1'><i className='fa fa-trash'></i> Trash</Button>
        </div>
      </div>
    </div>
  )
}

export default ListTypeB