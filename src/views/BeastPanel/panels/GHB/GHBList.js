import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../../../components/Context/DarkModeProvider'
import ListTypeB from '../../comps/ListTypeB'
import Paginate from '../../../../components/Paginate/Paginate'

function GHBList() {
    const [ghb, setGHB] = useState([])
    const { darkMode } = useDarkMode();
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    useEffect(() => {
        const showGHB = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch(`${process.env.WEB_URL}:${process.env.BPORT}/ghb/getghbchaps?page=${currentPage}`, {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setGHB(data.message)
                    setMaxPage(data.maxPage)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showGHB()
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
                <h3 className={`mx-3 my-3 text-start ${txtWhite}`}>Game Hacking Chapters</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/ghb-edit`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(ghb) && ghb.map((ghb, index) => (
                        <>
                            <ListTypeB key={index} sid={ghb._id} title={ghb.title} description={ghb.description} strn="ghb-edit" date={ghb.publicationDate} strn2="ghb" />
                        </>
                    ))
                }
            </div>
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
        </div>
    )
}

export default GHBList