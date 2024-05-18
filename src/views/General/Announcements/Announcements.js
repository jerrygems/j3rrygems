import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';

function Announcements() {
    const [anon, setAnon] = useState([])
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'text-black'
    useEffect(() => {
        const showAnon = async () => {
            try {
                let request = await fetch(`http://localhost:5000/announcements/getannouncements`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setAnon(data.message)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showAnon()
    }, [])
    return (
        <div className='d-flex flex-column rounded w-75 m-3'>
            {
                Array.isArray(anon) && anon.map((anon, index) => (
                    <div className={`d-flex flex-column text-center w-100 rounded m-1 ${cover} ${border}`}>
                        <h5 className='mt-4'>{anon.title}</h5>
                        <hr></hr>
                        <p className='m-1 ql-editor d-flex flex-wrap' dangerouslySetInnerHTML={{ __html: anon.content }}></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Announcements