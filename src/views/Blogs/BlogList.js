import React, { useEffect, useState } from 'react'
import CardNorm from '../../components/Cards/CardNorm'


function BlogList() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const showBlog = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch("http://192.168.29.169:5000/blogs/blogs", {
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
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showBlog()
    }, [])
    return (
        <div className='d-flex flex-column text-start content-box justify-content-start m-3 rounded '>
            <div className='d-flex flex-column'>
                <h2>Blogs</h2>
                <hr></hr>
            </div>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(blogs) && blogs.map((blog, index) => (
                        <CardNorm key={index} sid={blog._id} str1="blogs" str2="blog" title={blog.title} description={blog.description} author={blog.author?.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList