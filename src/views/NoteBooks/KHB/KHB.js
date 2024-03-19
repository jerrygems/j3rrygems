import React from 'react'
import ListNorm from '../../../components/Lists/ListNorm'

function KHB() {
    return (
        <div className='w-75 m-4'>
            <div className='text-start mx-2 my-1'>
                <h3>Kernel Hacking Book</h3>
            </div>
            <hr></hr>
            <div className='d-flex flex-column'>
                <ListNorm />
                <ListNorm />
                <ListNorm />
                <ListNorm />
                <ListNorm />
                {/* <WriteUpsList />
                <WriteUpsList />
                <WriteUpsList />
                <WriteUpsList />
                <WriteUpsList />
                <WriteUpsList /> */}
            </div>

        </div>
    )
}

export default KHB