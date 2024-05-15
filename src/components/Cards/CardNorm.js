import React from 'react'
import { Card } from 'react-bootstrap'

function CardNorm({title,description}) {
    return (
        <Card className='boxA m-3 d-flex'>
            <Card.Img className='H1' variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
            <Card.Body >
                <Card.Title className='text-start'>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href="">Link Here</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardNorm