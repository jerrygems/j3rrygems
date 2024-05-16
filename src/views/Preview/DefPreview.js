import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function DefPreview() {
    const { str1, str2, sid } = useParams()
    const [post, setPost] = useState({})
    console.log(sid, str1, str2)
    useEffect(() => {
        const showPost = async () => {
            try {
                let request = await fetch(`http://localhost:5000/${str1}/${str2}/${sid}`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setPost(data.message)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showPost()
    }, [sid, str1, str2])


    return (
        <div className='d-flex w-75 flex-column text-start rounded border m-3'>
            <div className='d-flex flex-column m-1'>
                <h4 className='m-2'>{post.title}</h4>
                <small className='m-2 text-muted'>Date : {post.publicationDate}</small>
            </div>
            <hr></hr>
            <div className='d-flex flex-column m-1'>
                <p className='m-2'><b>Description : </b>{post.description}</p>
                <p className='m-3 ql-editor' dangerouslySetInnerHTML={{ __html: post.content }}></p>
            </div>
            <hr></hr>
            <div className='d-flex flex-wrap m-1'>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
            </div>
            <hr></hr>
            <div className='d-flex flex-column m-1'>
                <small className='m-2 text-muted'>Authors : {post.author}</small>
                <small className='m-2 text-muted'>Modified By : </small>
            </div>
        </div>
    )
}

export default DefPreview