import React from 'react'
import CardNormAdmin from '../../comps/CardNormAdmin'

function BlogsList() {
    return (
        <div className='w-75 d-flex flex-column'>
            <h3 className='mx-3 my-3 text-start'>Blogs</h3>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                <CardNormAdmin />
                <CardNormAdmin />
                <CardNormAdmin />
                <CardNormAdmin />
                <CardNormAdmin />
                <CardNormAdmin />
                <CardNormAdmin />
            </div>
        </div>
    )
}

export default BlogsList