import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';


function CardNormAdmin({ sid, title, description, strn, strn2 }) {
    const { darkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'


    const handleDelete = async (e, sid) => {
        console.log(strn2)
        console.log("clicked")
        e.preventDefault();
        const token = localStorage.getItem('jwt_token');
        if (!token) {
            console.error('No token found');
            return;
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_WEB_URL}:${process.env.REACT_APP_BPORT}/${strn2}/delete?sid=${sid}`, {
                method: 'delete',
                headers: {
                    "Authorization": `${token}`
                }
            });
            if (response.ok) {
                console.log("deleted")
            }
        } catch (error) {
            console.error('Error deleting post:', error)
        }
    }
    return (
        <Card className={`d-flex m-3 ${cover}`} style={{ minHeight: '230px', maxHeight: '300px', width: '350px' }} >
            <Card.Body>
                <Card.Title className={`text-start ${txtWhite}`}>{title?.substring(0, 40)}</Card.Title><hr />
                <Card.Text className={`text-start ${txtWhite}`}>
                    {description?.substring(0, 80)}
                </Card.Text>
                <div className='position-relative bottom-0 m-auto'>
                    <Button className='btn btn-success m-2'><i className='fa fa-edit'></i> <Link className='text-decoration-none text-white' to={`/${strn}/${sid}`} >Edit</Link></Button>
                    <Button className='btn btn-danger m-2' onClick={(e) => handleDelete(e, sid)}><i className='fa fa-edit'></i> Trash</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardNormAdmin