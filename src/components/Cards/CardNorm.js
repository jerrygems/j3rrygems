import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardNorm({ sid, title, description, str1, str2 }) {
    console.log(sid)
    return (
        <Link className='text-decoration-none text-dark' to={`/${str1}/${str2}/${sid}`}>
            <Card className='boxA m-3 d-flex'>
                <Card.Img className='H1' variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
                <Card.Body >
                    <Card.Title className='text-start'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Link >
    )
}

export default CardNorm