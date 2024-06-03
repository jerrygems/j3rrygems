import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListTypeA from '../../comps/ListTypeA'
import { useDarkMode } from '../../../../components/Context/DarkModeProvider';
import Paginate from '../../../../components/Paginate/Paginate';

function WriteUpsList() {
    const [writeups, setWriteups] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    useEffect(() => {
        const showWriteup = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch(`${process.env.REACT_APP_WEB_URL}:${process.env.REACT_APP_BPORT}/writeups/getwriteups?page=${currentPage}`, {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setWriteups(data.message)
                    setMaxPage(data.maxPage)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showWriteup()
    }, [currentPage])

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <div className={`${window.innerWidth < 1000 ? 'w-100' : 'w-75'} d-flex flex-column`}>
            <div className='d-flex flex-row mx-3 align-items-center justify-content-between'>
                <h3 className={`mx-3 my-3 text-start ${txtWhite}`}>WriteUps</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/writeup-edit`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(writeups) && writeups.map((writeup, index) => (
                        <>
                            <ListTypeA key={index} sid={writeup._id} title={writeup.title} description={writeup.description} strn="writeup-edit" date={writeup.publicationDate} strn2="writeups" />
                        </>
                    ))
                }
            </div>
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />

        </div>
    )
}

export default WriteUpsList