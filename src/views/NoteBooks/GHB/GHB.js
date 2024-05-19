import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';

function GHB() {
    const [ghb, setGHB] = useState([])
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'text-black'

    useEffect(() => {
        const showGHB = async () => {
            try {
                let request = await fetch("http://192.168.29.169:5000/ghb/ghbchaps", {
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
        <div className='content-box m-4'>
            <div className={`text-start mx-2 my-1 ${txtWhite}`}>
                <h3>Game Hacking Book</h3>
            </div>
            <hr></hr>
            <div className='d-flex flex-column'>
                {
                    Array.isArray(ghb) && ghb.map((ghb, index) => (
                        <ListNorm key={index} str1="ghb" str2="ghbchap" sid={ghb._id} title={ghb.title} description={ghb.description} date={ghb.publicationDate} />
                    ))
                }
            </div>

        </div>
    )
}

export default GHB