import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListTypeB from '../../comps/ListTypeB'
import { useDarkMode } from '../../../../components/Context/DarkModeProvider';

function KHBList() {
    const [khb, setKHB] = useState([])
    const { darkMode, toggleDarkMode } = useDarkMode();
    const cover = darkMode ? 'cover1' : 'dcover1'
    const border = darkMode ? '' : 'border'
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

    useEffect(() => {
        const showKHB = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch("http://192.168.29.169:5000/khb/getkhbchaps", {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setKHB(data.message)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showKHB()
    }, [])
    return (
        <div className={`${window.innerWidth < 1000 ? 'w-100' : 'w-75'} d-flex flex-column`}>
            <div className='d-flex flex-row mx-3 align-items-center justify-content-between'>
                <h3 className={`mx-3 my-3 text-start ${txtWhite}`}>Kernel Hacking Chapters</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/khb-edit`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(khb) && khb.map((khb, index) => (
                        <>
                            <ListTypeB key={index} sid={khb._id} title={khb.title} description={khb.description} strn="khb-edit" date={khb.publicationDate} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default KHBList