import React from 'react'
import { ListGroup } from 'react-bootstrap'
import ListNorm from '../../components/Lists/ListNorm'

function Home() {
    return (
        <div className='d-flex flex-column w-75 mx-5 my-3'>
            <h3 className='text-start text-dark'>Home</h3>
            <div className='d-flex flex-column justify-content-center border rounded'>
                <h6 className='text-start m-3'>Heading</h6>
                <ListGroup className='d-flex flex-column justify-content-center m-2 border rounded'>
                    <ListGroup.Item className='d-flex flex-column'>
                        <ListNorm />
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex flex-column'>
                        <ListNorm />
                    </ListGroup.Item>
                </ListGroup>

                <h6 className='text-start m-3'>Heading</h6>
                <ListGroup className='d-flex flex-column justify-content-center m-2 border rounded'>
                    <ListGroup.Item className='d-flex flex-column'>
                        <ListNorm />
                    </ListGroup.Item>

                </ListGroup>
            </div>
        </div>
    )
}

export default Home