import React, { useEffect, useState } from 'react'
import CardNormAdmin from '../../comps/CardNormAdmin'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../../../components/Context/DarkModeProvider';
import Paginate from '../../../../components/Paginate/Paginate';

function BlogsList() {

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

    useEffect(() => {
        const showBlog = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch(`${process.env.REACT_APP_WEB_URL}:${process.env.REACT_APP_BPORT}/blogs/getblogs?page=${currentPage}`, {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setBlogs(data.message)
                    setMaxPage(data.maxPage)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showBlog()
    }, [currentPage])

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <div className={`${window.innerWidth < 1000 ? 'w-100' : 'w-75'} d-flex flex-column`}>
            <div className='d-flex flex-row mx-3 align-items-center justify-content-between'>
                <h3 className={`mx-3 my-3 text-start ${txtWhite}`}>Blogs</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/blog-edit`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(blogs) && blogs.map((blog, index) => (
                        <>
                            <CardNormAdmin key={index} sid={blog._id} title={blog.title} description={blog.description} strn="blog-edit" strn2="blogs" />
                        </>
                    ))
                }
            </div>
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />

        </div>
    )
}

export default BlogsList