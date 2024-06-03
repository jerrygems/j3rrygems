import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import ListNorm from '../../components/Lists/ListNorm'
import { useDarkMode } from '../../components/Context/DarkModeProvider';

function Home() {
    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

    const [content, setContent] = useState([])

    useEffect(() => {
        const showContent = async () => {
            try {
                let request = await fetch(`${process.env.WEB_URL}:${process.env.BPORT}/api/latest`, {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setContent(data.message)
                    console.log(data.message)
                }
            } catch (err) {
                console.log(err)
            }
        }
        showContent()
    }, [])

    return (
        <div className={`d-flex flex-column content-box my-3`}>
            <h3 className={`text-start mx-2 ${txtWhite}`}>Home Page</h3>
            <hr></hr>
            <div className='d-flex flex-column justify-content-center rounded'>
                <h4 className={`text-start mx-3 ${txtWhite} text-secondary`}>Latest ;-)</h4>
                <ListGroup className='d-flex flex-column justify-content-center m-2 rounded'>
                    {
                        Array.isArray(content) && content.map((item, index) => {

                            if (item.source === "blogs") {
                                return (
                                    <ListGroup.Item key={index} className='d-flex flex-column bg-transparent border-0'>
                                        <ListNorm sid={item._id} str1='blogs' str2='blog' title={item.title} description={item.description} date={item.publicationDate} />
                                    </ListGroup.Item>
                                );
                            } else if (item.source === "ghb") {
                                return (
                                    <ListGroup.Item key={index} className='d-flex flex-column bg-transparent border-0'>
                                        <ListNorm sid={item._id} str1='ghb' str2='ghbchap' title={item.title} description={item.description} date={item.publicationDate} />
                                    </ListGroup.Item>
                                );
                            } else if (item.source === "khb") {
                                return (
                                    <ListGroup.Item key={index} className='d-flex flex-column bg-transparent border-0'>
                                        <ListNorm sid={item._id} str1='khb' str2='khbchap' title={item.title} description={item.description} date={item.publicationDate} />
                                    </ListGroup.Item>
                                );
                            } else if (item.source === "asb") {
                                return (
                                    <ListGroup.Item key={index} className='d-flex flex-column bg-transparent border-0'>
                                        <ListNorm sid={item._id} str1='asb' str2='asbchap' title={item.title} description={item.description} date={item.publicationDate} />
                                    </ListGroup.Item>
                                );
                            } else if (item.source === "writeups") {
                                return (
                                    <ListGroup.Item key={index} className='d-flex flex-column bg-transparent border-0'>
                                        <ListNorm sid={item._id} str1='writeups' str2='writeup' title={item.title} description={item.description} date={item.publicationDate} />
                                    </ListGroup.Item>
                                );
                            } else {
                                return null;
                            }
                        })
                    }

                </ListGroup>

                
            </div>
        </div>
    )
}

export default Home