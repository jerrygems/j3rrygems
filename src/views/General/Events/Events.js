import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';

function Events() {
    const [event, setEvent] = useState([])
    const { darkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    useEffect(() => {
        const showEvent = async () => {
            try {
                let request = await fetch(`http://192.168.29.169:5000/events/events`, {
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
        <div className='d-flex flex-column rounded content-box m-3'>
            {
                Array.isArray(event) && event.map((event, index) => (
                    <div className={`d-flex flex-column text-center w-100 ${cover} ${border} rounded m-1`}>
                        <h5 className='mt-4'>{event.title}</h5>
                        <hr></hr>
                        <p className='m-1 ql-editor d-flex flex-wrap' dangerouslySetInnerHTML={{ __html: event.content }}></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Events