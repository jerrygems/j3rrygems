import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListTypeA from '../../comps/ListTypeA'

function WriteUpsList() {
    const [writeups, setWriteups] = useState([])

    useEffect(() => {
        const showWriteup = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch("http://localhost:5000/writeups/getwriteups", {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setWriteups(data.message)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showWriteup()
    }, [])
    return (
        <div className='w-75 d-flex flex-column'>
            <div className='d-flex flex-row mx-3 align-items-center justify-content-between'>
                <h3 className='mx-3 my-3 text-start'>WriteUps</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/writeup-edit`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(writeups) && writeups.map((writeup, index) => (
                        <>
                            <ListTypeA key={index} sid={writeup._id} title={writeup.title} description={writeup.description} strn="writeup-edit" date={writeup.publicationDate} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default WriteUpsList