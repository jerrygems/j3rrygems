import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListTypeB from '../../comps/ListTypeB'

function GHBList() {
    const [ghb, setGHB] = useState([])

    useEffect(() => {
        const showGHB = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch("http://localhost:5000/ghb/getghbchaps", {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setGHB(data.message)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showGHB()
    }, [])
    return (
        <div className='w-75 d-flex flex-column'>
            <div className='d-flex flex-row mx-3 align-items-center justify-content-between'>
                <h3 className='mx-3 my-3 text-start'>Game Hacking Chapters</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/ghb-edit`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(ghb) && ghb.map((ghb, index) => (
                        <>
                            <ListTypeB key={index} sid={ghb._id} title={ghb.title} description={ghb.description} strn="ghb-edit" date={ghb.publicationDate} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default GHBList