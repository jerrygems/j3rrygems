import React, { useEffect, useState } from 'react'
import WriteUpList from '../../components/Lists/WriteUpsList'
import { useDarkMode } from '../../components/Context/DarkModeProvider';


function WriteUpListPage() {
    const [writeups, setWriteups] = useState([])
    const { darkMode, toggleDarkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    useEffect(() => {
        const showWriteups = async () => {
            try {
                let request = await fetch("http://192.168.29.169:5000/writeups/writeups", {
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
        <div className='d-flex flex-wrap content-box justify-content-start m-1 rounded'>
            <div className='d-flex w-100 text-start flex-column'>
                <h2 className={`mt-3 mx-2 ${txtWhite}`}>WriteUps</h2>
                <hr></hr>
            </div>
            <div className='d-flex flex-wrap'>
                {
                    Array.isArray(writeups) && writeups.map((writeup, index) => (
                        <WriteUpList key={index} str1="writeups" str2="writeup" sid={writeup._id} title={writeup.title} description={writeup.description} date={writeup.publicationDate} author={writeup.author} />
                    ))
                }
            </div>
        </div>
    )
}

export default WriteUpListPage