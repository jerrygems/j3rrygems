import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'

function ASB() {
    const [asb, setASB] = useState([])

    useEffect(() => {
        const showASB = async () => {
            try {
                let request = await fetch("http://localhost:5000/asb/getasbchaps", {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setASB(data.message)
                }
            } catch (err) {
                console.log(err)
            }
        }
        showASB()
    }, [])
    return (
        <div className='w-75 m-4'>
            <div className='text-start mx-2 my-1 txt-white'>
                <h3>Android Security Book</h3>
            </div>
            <hr></hr>
            <div className='d-flex flex-column'>
                {
                    Array.isArray(asb) && asb.map((asb, index) => (
                        <ListNorm key={index} sid={asb._id} str1="asb" str2="getasbchap" title={asb.title} description={asb.description} date={asb.publicationDate}  />
                    ))
                }
            </div>

        </div>
    )
}

export default ASB