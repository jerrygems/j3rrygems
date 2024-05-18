import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardNorm({ sid, title, description, str1, str2, author}) {
    return (
        <Link className='txt-white' to={`/${str1}/${str2}/${sid}`}>
            <Card className='boxA m-3 d-flex cover1 bg-transparent txt-white' style={{minHeight:'230px',maxHeight:'300px'}}>
                <Card.Body className='position-relative' >
                    <Card.Title className='text-start position-relative top-0'>{title?.substring(0,40)}</Card.Title>
                    <hr></hr>
                    <Card.Text className='text-start'>
                        {description?.substring(0,80)}
                    </Card.Text>
                    <Card.Text className='text-start mb-3 position-absolute bottom-0'>
                        ;-) {author}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Link >
    )
}

export default CardNorm