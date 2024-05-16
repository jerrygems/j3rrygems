import React, { useEffect, useState } from 'react'
import CardNorm from '../../components/Cards/CardNorm'


function BlogList() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const showBlog = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch("http://localhost:5000/blogs/getblogs", {
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
        <div className='d-flex flex-wrap w-75 justify-content-start m-5 border rounded'>
            {
                Array.isArray(blogs) && blogs.map((blog, index) => (
                    <CardNorm key={index} sid={blog._id} str1="blogs" str2="getblog" title={blog.title} description={blog.description} />
                ))
            }
        </div>
    )
}

export default BlogList