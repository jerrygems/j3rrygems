import React from 'react'
import CardNorm from '../../components/Cards/CardNorm'


function BlogList() {
    return (
        <div className='d-flex flex-wrap w-75 justify-content-start m-5 border rounded'>
            <CardNorm />
            <CardNorm />
            <CardNorm />
            <CardNorm />
            <CardNorm />
            <CardNorm />
        </div>
    )
}

export default BlogList