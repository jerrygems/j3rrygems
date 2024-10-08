import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListTypeB from '../../comps/ListTypeB'
import { useDarkMode } from '../../../../components/Context/DarkModeProvider';
import Paginate from '../../../../components/Paginate/Paginate';

function KHBList() {
    const [khb, setKHB] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'

    useEffect(() => {
        const showKHB = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch(`${process.env.REACT_APP_WEB_URL}:${process.env.REACT_APP_BPORT}/khb/getkhbchaps?page=${currentPage}`, {
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
                    setMaxPage(data.maxPage)
                } else {
                    console.log("error occured while fetching")
                }
            } catch (err) {
                console.log(err)
            }
        }
        showKHB()
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
                <h3 className={`mx-3 my-3 text-start ${txtWhite}`}>Kernel Hacking Chapters</h3>
                <Link className="d-flex p-2 btn btn-dark ml-5 align-items-center" to={`/khb-edit`}><i className='fa fa-plus mx-2'></i>Create</Link>
            </div>
            <hr></hr>
            <div className='w-100 d-flex flex-wrap'>
                {
                    Array.isArray(khb) && khb.map((khb, index) => (
                        <>
                            <ListTypeB key={index} sid={khb._id} title={khb.title} description={khb.description} strn="khb-edit" date={khb.publicationDate} strn2="khb" />
                        </>
                    ))
                }
            </div>
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />

        </div>
    )
}

export default KHBList