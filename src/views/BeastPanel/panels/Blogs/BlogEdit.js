import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { jwtDecode } from 'jwt-decode';
import { useDarkMode } from '../../../../components/Context/DarkModeProvider';

function BlogEdit() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

    const { blogid } = useParams()
    const mode = blogid ? "Update" : "Create"
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [publicationDate, setPublicationDate] = useState('')
    const [tags, setTags] = useState('')
    const [fetched, setFetched] = useState(false)
    const token = localStorage.getItem("jwt_token")

    const handleContentChange = (value) => {
        setContent(value)
    }

    const submitBlog = async (e) => {
        e.preventDefault();
        if (!token) {
            window.location.href = "http://192.168.29.169:3000"
        }
        const url = blogid ? "http://192.168.29.169:5000/blogs/update" : "http://192.168.29.169:5000/blogs/create"
        let request = await fetch(url, {
            method: blogid ? "put" : "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify({
                blogid: blogid,
                title: title,
                description: description,
                content: content,
                publicationDate: publicationDate,
                tags: tags,
            })
        })
        if (request.ok) {
            console.log(await request.json())
        }
    }

    useEffect(() => {
        const fetchblog = async () => {
            try {
                if (blogid && !fetched) {
                    let request = await fetch(`http://192.168.29.169:5000/blogs/getblog/${blogid}`, {
                        method: "get",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `${token}`,
                            'Cache-Control': 'no-cache'
                        },
                    })
                    if (request.ok) {
                        const blog = await request.json()
                        setTitle(blog.message.title)
                        setDescription(blog.message.description)
                        setContent(blog.message.content)
                        setPublicationDate(blog.message.publicationDate)
                        setTags(blog.message.tags)
                        setFetched(true)
                    }
                }
            } catch (err) {
                console.log("error :-( ", err)
            }
        }
        fetchblog()
    }, [blogid, token, fetched])

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['image', 'link', 'video', 'code'],
            [{ 'table': 'true' }],
            [{ 'syntax': 'true' }],
            ['clipboard']
        ]
    };
    return (
        <>
            <div className={`d-flex flex-column text-start ${txtWhite} m-3`}>
                <h3 className='p-3'>{mode} Blog</h3>
                <form className={`py-3 px-4 edform ${cover} ${border} rounded`} >
                    <div className="form-group">
                        <label htmlFor="content"><h4>Blog Content:</h4></label>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="content">Content:</label>
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={handleContentChange}
                                className={`Text-Editor ${darkMode?'dark-mode':''}`}
                                modules={modules}
                            />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="description">Description:</label>
                            <input type="text" className="form-control" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="date">Date:</label>
                            <input className="form-control" id="title" type='date' onChange={(e) => setPublicationDate(e.target.value)} value={publicationDate} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="keywords">Keywords:</label>
                            <input type="text" className="form-control" id="keywords" onChange={(e) => setTags(e.target.value)} value={tags} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submitBlog}/*onClick={mode === 'Create' ? createBlog : updateBlog}*/><i className='fa fa-refresh p-1'></i>{mode}</button>
                </form>
                <br></br>
                <div className='col'>
                    <h3 className='p-3'>Preview</h3>
                    <hr style={{ background: "black" }} />
                    <div className='ql-editor' dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </>
    );
}

export default BlogEdit;