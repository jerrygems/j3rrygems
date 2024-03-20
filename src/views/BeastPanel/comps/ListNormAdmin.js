import React from 'react'
import { Button } from 'react-bootstrap'

function ListNormAdmin() {
    return (
        <div className='d-flex flex-column border rounded m-1'>
            <div className='d-flex mx-4 mt-3 mb-1`'>
                <h5>Heading</h5>
            </div>
            <div className='d-flex flex-row mx-5'>
                <div className='w-75 d-flex flex-column text-start'>
                    <p>Deserunt deserunt. aute exercitation consequat exercitation aliqua consectetur.</p>
                    <p>Date: 01/01/01</p>
                </div>
                <div className='w-25 justify-content-between'>
                    <Button className='btn btn-success m-2'><i className='fa fa-edit'></i> Edit</Button>
                    <Button className='btn btn-danger' m-2><i className='fa fa-trash'></i> Trash</Button>
                </div>
            </div>
        </div>
    )
}

export default ListNormAdmin