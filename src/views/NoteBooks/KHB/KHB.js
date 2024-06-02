import React, { useEffect, useState } from 'react'
import ListNorm from '../../../components/Lists/ListNorm'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';
import Paginate from '../../../components/Paginate/Paginate';

function KHB() {
    const [khb, setKHB] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)


    const { darkMode, toggleDarkMode } = useDarkMode();
    const bg = darkMode ? 'bg-dark' : 'bg-body-tertiary'
    const txtWhite = darkMode ? 'txt-white' : 'text-black'

    useEffect(() => {
        const showKHB = async () => {
            try {
                let request = await fetch(`http://localhost:5000/khb/khbchaps?page=${currentPage}`, {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setKHB(data.message)
                    setMaxPage(data.maxPage)
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
        <div className='content-box m-4'>
            <div className={`text-start mx-2 my-1 ${txtWhite}`}>
                <h3>Kernel Hacking Book</h3>
            </div>
            <hr></hr>
            <div className='d-flex flex-column'>
                {
                    Array.isArray(khb) && khb.map((khb, index) => (
                        <ListNorm key={index} str1="khb" str2="khbchap" sid={khb._id} title={khb.title} description={khb.description} date={khb.publicationDate} />
                    ))
                }
            </div>
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
        </div>
    )
}

export default KHB