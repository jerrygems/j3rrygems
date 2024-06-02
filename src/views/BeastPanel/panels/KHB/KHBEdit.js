import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDarkMode } from '../../../../components/Context/DarkModeProvider';

function KHBEdit() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'


    const { khbid } = useParams()
    const mode = khbid ? "Update" : "Create"
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

    const submitkhbchap = async (e) => {
        e.preventDefault();
        if (!token) {
            window.location.href = "http://localhost:3000"
        }
        const url = khbid ? "http://localhost:5000/khb/update" : "http://localhost:5000/khb/create"
        let request = await fetch(url, {
            method: khbid ? "put" : "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify({
                khbid: khbid,
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
        const fetchkhbchap = async () => {
            try {
                if (khbid && !fetched) {
                    let request = await fetch(`http://localhost:5000/khb/getkhbchap/${khbid}`, {
                        method: "get",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `${token}`,
                            'Cache-Control': 'no-cache'
                        },
                    })
                    if (request.ok) {
                        const khbchap = await request.json()
                        setTitle(khbchap.message.title)
                        setChapNo(khbchap.message.chap_no)
                        setDescription(khbchap.message.description)
                        setContent(khbchap.message.content)
                        setPublicationDate(khbchap.message.publicationDate)
                        setTags(khbchap.message.keywords)
                        setFetched(true)
                    }
                }
            } catch (err) {
                console.log("error :-( ", err)
            }
        }
        fetchkhbchap()
    }, [khbid, token, fetched])

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
            <div className={`m-3 ${txtWhite} d-flex flex-column text-start`}>
                <h3 className='p-3'>{mode} KHB Chapter</h3>
                <form className={`py-3 px-4 edform ${cover} ${border} rounded`} >
                    <div className="form-group">
                        <label htmlFor="content"><h4>Chapter Content:</h4></label>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="title">Chapter No:</label>
                            <input type="text" className="form-control" id="chapter" onChange={(e) => setChapNo(e.target.value)} value={chapNo} />
                        </div>
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
                                className='Text-Editor'
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
                    <button type="submit" className="btn btn-primary" onClick={submitkhbchap}><i className='fa fa-refresh p-1'></i>{mode}</button>
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

export default KHBEdit;