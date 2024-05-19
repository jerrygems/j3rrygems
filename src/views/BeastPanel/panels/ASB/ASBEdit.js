import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDarkMode } from '../../../../components/Context/DarkModeProvider';

function ASBEdit() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

    const { asbid } = useParams()
    const mode = asbid ? "Update" : "Create"
    const [chapNo, setChapNo] = useState('')
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

    const submitasbchap = async (e) => {
        e.preventDefault();
        if (!token) {
            window.location.href = "http://192.168.29.169:3000"
        }
        console.log(token)
        console.log(asbid)
        const url = asbid ? "http://192.168.29.169:5000/asb/update" : "http://192.168.29.169:5000/asb/create"
        let request = await fetch(url, {
            method: asbid ? "put" : "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify({
                asbid: asbid,
                chap_no: chapNo,
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
        const fetchasbchap = async () => {
            try {
                if (asbid && !fetched) {
                    let request = await fetch(`http://192.168.29.169:5000/asb/getasbchap/${asbid}`, {
                        method: "get",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `${token}`,
                            'Cache-Control': 'no-cache'
                        },
                    })
                    if (request.ok) {
                        const asbchap = await request.json()
                        setTitle(asbchap.message.title)
                        setChapNo(asbchap.message.chap_no)
                        setDescription(asbchap.message.description)
                        setContent(asbchap.message.content)
                        setPublicationDate(asbchap.message.publicationDate)
                        setTags(asbchap.message.keywords)
                        setFetched(true)
                    }
                }
            } catch (err) {
                console.log("error :-( ", err)
            }
        }
        fetchasbchap()
    }, [asbid, token, fetched])

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
            <div className={`d-flex flex-column text-start ${txtWhite}`}>
                <h3 className='p-3'>{mode} Android Security Chapter</h3>
                <form className={`py-3 px-4 m-3 ${cover} ${border} rounded`} >
                    <div className="form-group">
                        <label htmlFor="content"><h4>Chapter Content:</h4></label>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="title">Chapter No:</label>
                            <input type="text" className="form-control" id="chapter" placeholder='chapter' onChange={(e) => setChapNo(e.target.value)} value={chapNo} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="form-control" id="title" placeholder='title' onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="content">Content:</label>
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={handleContentChange}
                                className='Text-Editor'
                                modules={modules}
                            />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="description">Description:</label>
                            <input type="text" className="form-control" placeholder='description' id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="date">Date:</label>
                            <input className="form-control" id="title" type='date' onChange={(e) => setPublicationDate(e.target.value)} value={publicationDate} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="keywords">Keywords:</label>
                            <input type="text" className="form-control" id="keywords" placeholder='keywords' onChange={(e) => setTags(e.target.value)} value={tags} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submitasbchap}><i className='fa fa-refresh p-1'></i>{mode}</button>
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

export default ASBEdit;