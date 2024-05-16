import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'

function GHB() {
    const [ghb, setGHB] = useState([])

    useEffect(() => {
        const showGHB = async () => {
            try {
                let request = await fetch("http://localhost:5000/ghb/getghbchaps", {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setGHB(data.message)
                }
            } catch (err) {
                console.log(err)
            }
        }
        showGHB()
    }, [])
    return (
        <div className='w-75 m-4'>
            <div className='text-start mx-2 my-1'>
                <h3>Game Hacking Book</h3>
            </div>
            <hr></hr>
            <div className='d-flex flex-column'>
                {
                    Array.isArray(ghb) && ghb.map((ghb, index) => (
                        <ListNorm key={index} str1="ghb" str2="getghbchap" sid={ghb._id} title={ghb.title} description={ghb.description} date={ghb.publicationDate} />
                    ))
                }
            </div>

        </div>
    )
}

export default GHB