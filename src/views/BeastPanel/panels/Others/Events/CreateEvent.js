import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDarkMode } from '../../../../../components/Context/DarkModeProvider';

function CreateEvent() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [publicationDate, setPublicationDate] = useState('')
    const [tags, setTags] = useState('')
    const token = localStorage.getItem("jwt_token")

    const handleContentChange = (value) => {
        setContent(value)
    }

    const submitevent = async (e) => {
        e.preventDefault();
        if (!token) {
            window.location.href = "http://localhost:3000"
        }
        const url = "http://localhost:5000/events/create"
        let request = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify({
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
                <h3 className='p-3'>Create Event</h3>
                <form className={`py-3 px-4 edform ${cover} ${border} rounded`} >
                    <div className="form-group">
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
                    <button type="submit" className="btn btn-primary" onClick={submitevent}><i className='fa fa-refresh p-1'></i>Create</button>
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

export default CreateEvent;