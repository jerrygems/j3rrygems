import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CardNormAdmin({ sid, title, description,strn }) {
    return (
        <Card className='boxA m-3 d-flex'>
            <Card.Img className='H1' variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
            <Card.Body >
                <Card.Title className='text-start'>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <div className='d-flex flex-row'>
                    <Button className='btn btn-success m-2'><i className='fa fa-edit'></i> <Link className='text-decoration-none text-white' to={`/${strn}/${sid}`} >Edit</Link></Button>
                    <Button className='btn btn-danger m-2'><i className='fa fa-edit'></i> Trash</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardNormAdmin