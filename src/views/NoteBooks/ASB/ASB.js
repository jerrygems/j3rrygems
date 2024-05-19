import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';

function ASB() {
    const [asb, setASB] = useState([])
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'text-black'

    useEffect(() => {
        const showASB = async () => {
            try {
                let request = await fetch("http://192.168.29.169:5000/asb/asbchaps", {
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
        <div className='content-box m-4'>
            <div className={`text-start mx-2 my-1 ${txtWhite}`}>
                <h3>Android Security Book</h3>
            </div>
            <hr></hr>
            <div className='d-flex flex-column'>
                {
                    Array.isArray(asb) && asb.map((asb, index) => (
                        <ListNorm key={index} sid={asb._id} str1="asb" str2="asbchap" title={asb.title} description={asb.description} date={asb.publicationDate} />
                    ))
                }
            </div>

        </div>
    )
}

export default ASB