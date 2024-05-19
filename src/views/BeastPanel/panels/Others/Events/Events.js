import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListTypeC from '../../../comps/ListTypeC'

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const showEvent = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch("http://192.168.29.169:5000/events/getevents", {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setEvents(data.message)
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
        <div className='w-75 d-flex flex-column'>
            <div className='d-flex flex-row mx-3 align-items-center justify-content-between'>
                <h3 className='mx-3 my-3 text-start'>Events</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/event-create`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(events) && events.map((event, index) => (
                        <>
                            <ListTypeC key={index} title={event.title} description={event.description} date={event.publicationDate} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Events