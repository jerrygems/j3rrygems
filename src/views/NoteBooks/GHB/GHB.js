import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';
import Paginate from '../../../components/Paginate/Paginate';

function GHB() {
    const [ghb, setGHB] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'text-black'

    useEffect(() => {
        const showGHB = async () => {
            try {
                let request = await fetch(`http://localhost:5000/ghb/ghbchaps?page=${currentPage}`, {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setGHB(data.message)
                    setMaxPage(data.maxPage)
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
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />

        </div>
    )
}

export default GHB