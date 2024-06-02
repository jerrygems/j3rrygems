import React, { useEffect, useState } from 'react'
import CardNorm from '../../components/Cards/CardNorm'
import { useDarkMode } from '../../components/Context/DarkModeProvider';
import Paginate from '../../components/Paginate/Paginate';


function BlogList() {
    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    useEffect(() => {
        const showBlog = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch(`http://localhost:5000/blogs/blogs?page=${currentPage}`, {
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
        <div className='d-flex flex-column text-start content-box justify-content-start m-3 rounded '>
            <div className='d-flex flex-column'>
                <h2 className={`${txtWhite}`}>Blogs</h2>
                <hr></hr>
            </div>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(blogs) && blogs.map((blog, index) => (
                        <CardNorm key={index} sid={blog._id} str1="blogs" str2="blog" title={blog.title} description={blog.description} author={blog.author?.name} />
                    ))
                }
            </div>
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
        </div>
    )
}

export default BlogList