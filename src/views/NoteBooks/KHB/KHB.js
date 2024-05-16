import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'

function KHB() {
    const [khb, setKHB] = useState([])

    useEffect(() => {
        const showKHB = async () => {
            try {
                let request = await fetch("http://localhost:5000/khb/getkhbchaps", {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setKHB(data.message)
                }
            } catch (err) {
                console.log(err)
            }
        }
        showKHB()
    }, [])
    return (
        <div className='w-75 m-4'>
            <div className='text-start mx-2 my-1'>
                <h3>Kernel Hacking Book</h3>
            </div>
            <hr></hr>
            <div className='d-flex flex-column'>
                {
                    Array.isArray(khb) && khb.map((khb, index) => (
                        <ListNorm key={index} str1="khb" str2="getkhbchap" sid={khb._id} title={khb.title} description={khb.description} date={khb.publicationDate} />
                    ))
                }
            </div>

        </div>
    )
}

export default KHB