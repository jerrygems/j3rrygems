import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function GHBEdit({mode = 'create'}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content,setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [publicationDate, setPublicationDate] = useState('')
    const [tags, setTags] = useState('')

    const handleContentChange = (value)=>{
        setContent(value)
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
            <div className='d-flex flex-column text-start'>
                <h3 className='p-3'>{mode==='create' ? 'Create' : 'Update'} Blog</h3>
                <form className='py-3 px-4 border rounded' >
                    <div className="form-group">
                        <label htmlFor="content"><h4>GHB Content:</h4></label>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} defaultValue={title} />
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
                            <input type="text" className="form-control" id="description" onChange={(e) => setDescription(e.target.value)} defaultValue={description} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="date">Date:</label>
                            <input className="form-control" id="title" type='date' onChange={(e) => setPublicationDate(e.target.value)} defaultValue={publicationDate} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="author">Author:</label>
                            <input type="text" className="form-control" id="author" onChange={(e) => setAuthor(e.target.value)} defaultValue={author} />
                        </div>
                        <div className="form-group px-1 py-3">
                            <label htmlFor="keywords">Keywords:</label>
                            <input type="text" className="form-control" id="keywords" onChange={(e) => setTags(e.target.value)} defaultValue={tags} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" /*onClick={updateBlogs} */><i className='fa fa-refresh p-1'></i>Update</button>
                </form>
                <br></br>
                <div className='col'>
                    <h3 className='p-3'>Preview</h3>
                    <hr style={{ background: "black" }} />
                    <div /*dangerouslySetInnerHTML={{ __html: content }}*/ />
                </div>
            </div>
        </>
    );
}

export default GHBEdit;