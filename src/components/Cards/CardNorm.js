import React from 'react'
import { Card } from 'react-bootstrap'


function CardNorm() {
    return (
            <Card className='boxA m-3 d-flex'>
                <Card.Img className='H1' variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                <Card.Body >
                    <Card.Title className='text-start'>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="">Link Here</Card.Link>
                </Card.Body>
            </Card>
    )
}

export default CardNorm