import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CardNormAdmin({ sid, title, description, strn }) {
    return (
        <Card className='d-flex m-3 cover1' style={{ minHeight: '230px', maxHeight: '300px', width: '350px' }} >
            <Card.Body>
                <Card.Title className='text-start txt-white'>{title?.substring(0, 40)}</Card.Title><hr />
                <Card.Text className='text-start txt-white'>
                    {description?.substring(0, 80)}
                </Card.Text>
                <div className='position-relative bottom-0 m-auto'>
                    <Button className='btn btn-success m-2'><i className='fa fa-edit'></i> <Link className='text-decoration-none text-white' to={`/${strn}/${sid}`} >Edit</Link></Button>
                    <Button className='btn btn-danger m-2'><i className='fa fa-edit'></i> Trash</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardNormAdmin