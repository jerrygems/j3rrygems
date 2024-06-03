import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';
import Paginate from '../../../components/Paginate/Paginate';

function ASB() {
    const [asb, setASB] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'text-black'

    useEffect(() => {
        const showASB = async () => {
            try {
                let request = await fetch(`${process.env.WEB_URL}:${process.env.BPORT}/asb/asbchaps?page=${currentPage}`, {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setASB(data.message)
                    setMaxPage(data.maxPage)
                }
            } catch (err) {
                console.log(err)
            }
        }
        showASB()
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
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />

        </div>
    )
}

export default ASB