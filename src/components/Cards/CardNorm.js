import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../Context/DarkModeProvider';

function CardNorm({ sid, title, description, str1, str2, author }) {
    const { darkMode } = useDarkMode();
    const bg = darkMode ? 'color1' : ''
    const cover = darkMode ? 'cover1' : 'dcover1'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    return (
        <Link className={`${txtWhite}`} to={`/${str1}/${str2}/${sid}`}>
            <Card className={`boxA m-1 d-flex  ${txtWhite} ${cover} `} style={{ minHeight: '230px' }}>
                <Card.Body className='position-relative' >
                    <Card.Title className='text-start position-relative top-0'>{title?.substring(0, 40)}</Card.Title>
                    <hr></hr>
                    <Card.Text className='text-start'>
                        {description?.substring(0, 80)}
                        <hr/>
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