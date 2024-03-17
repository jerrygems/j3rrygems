import React from 'react'
import { Image } from 'react-bootstrap'

function WriteUpsList() {
    return (
        <div className='d-flex flex-row border rounded w-50'>
            <div className='m-1 w-25'>
                <Image style={{ width: '100%', height: '100%' }} src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' rounded />
            </div>
            <div className='w-75 d-flex flex-column border rounded m-1'>
                <div className='d-flex mx-3 my-1`'>
                    <h5>Heading</h5>
                </div>
                <div className='d-flex flex-column text-start mx-5'>
                    <small className='text-muted m-0'>Date: 01/01/01</small>
                    <p className='m-0'>Deserunt deserunt. aute exercitation consequat exercitation aliqua consectetur.</p>
                    <small className='text-muted m-0'>Authors :</small>
                </div>
            </div>
        </div>
    )
}

export default WriteUpsList