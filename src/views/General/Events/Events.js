import React, { useEffect, useState } from 'react'

function Events() {
    const [event, setEvent] = useState([])
    useEffect(() => {
        const showEvent = async () => {
            try {
                let request = await fetch(`http://localhost:5000/events/getevents`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setEvent(data.message)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showEvent()
    }, [])
    return (
        <div className='d-flex flex-column border rounded w-75 m-3'>
            {
                Array.isArray(event) && event.map((event, index) => (
                    <div className='d-flex flex-column text-center w-100 border rounded m-1'>
                        <h5 className='p-1'>{event.title}</h5>
                        <p className='m-1 ql-editor d-flex flex-wrap' dangerouslySetInnerHTML={{ __html: event.content }}></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Events