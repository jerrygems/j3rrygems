import React, { useEffect, useState } from 'react'
import WriteUpList from '../../components/Lists/WriteUpsList'


function WriteUpListPage() {
    const [writeups, setWriteups] = useState([])

    useEffect(() => {
        const showWriteups = async () => {
            try {
                let request = await fetch("http://localhost:5000/writeups/getwriteups", {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setWriteups(data.message)
                }
            } catch (err) {
                console.log(err)
            }
        }
        showWriteups()
    }, [])

    return (
        <div className='d-flex flex-wrap w-75 justify-content-start m-5 border rounded'>
            {
                Array.isArray(writeups) && writeups.map((writeup, index) => (
                    <WriteUpList key={index} str1="writeups" str2="getwriteup" sid={writeup._id} title={writeup.title} description={writeup.description} date={writeup.publicationDate} author={writeup.author} />
                ))
            }
        </div>
    )
}

export default WriteUpListPage