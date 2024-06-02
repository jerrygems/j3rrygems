import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDarkMode } from '../../components/Context/DarkModeProvider'

function DefPreview() {
    const { str1, str2, sid } = useParams()
    const [post, setPost] = useState({})
    const { darkMode, toggleDarkMode } = useDarkMode();
    const border = darkMode ? '' : 'border'
    const cover = darkMode ? 'cover1' : 'dcover1'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

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
        <>
            <div className={`d-flex content-box flex-column text-start rounded ${cover} ${border} mx-3 mb-3 mt-5`}>
                <div className='d-flex flex-column m-1'>
                    <h4 className='m-2'>{post.title}</h4>
                    <small className='m-2'>Date : {post.publicationDate?.slice(0, 10)}</small>
                </div>
                <hr></hr>
                <div className='d-flex flex-column m-1'>
                    <p className='m-2'><b>Description : </b>{post.description}</p>
                    <p className='m-3 ql-editor' dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
                <hr></hr>
                <div className='d-flex flex-wrap m-1'>
                    {
                        Array.isArray(post.keywords) && post.keywords.map(keyword => (
                            <Button className='m-2' variant='dark'>{keyword}</Button>
                        ))
                    }
                </div>
                <hr></hr>
                <div className='d-flex flex-column m-1'>
                    <small className='m-2'>Authors : {post.author?.name}</small>
                </div>
            </div>
        </>
    )
}

export default DefPreview