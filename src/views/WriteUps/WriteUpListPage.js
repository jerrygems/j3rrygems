import React, { useEffect, useState } from 'react'
import WriteUpList from '../../components/Lists/WriteUpsList'
import { useDarkMode } from '../../components/Context/DarkModeProvider';
import Paginate from '../../components/Paginate/Paginate';


function WriteUpListPage() {
    const [writeups, setWriteups] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    const { darkMode } = useDarkMode();
    const txtWhite = darkMode ? 'txt-white' : 'txt-black'
    useEffect(() => {
        const showWriteups = async () => {
            try {
                let request = await fetch(`http://localhost:5000/writeups/writeups?page=${currentPage}`, {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setWriteups(data.message)
                    setMaxPage(data.maxPage)
                }
            } catch (err) {
                console.log(err)
            }
        }
        showWriteups()
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
        <div className='d-flex flex-column content-box justify-content-start m-3 rounded'>
            <div className='d-flex flex-column'>
                <h2 className={`text-start mt-3 mx-2 ${txtWhite}`}>WriteUps</h2>
                <hr></hr>
            </div>
            <div className='d-flex flex-wrap w-100'>
                {
                    Array.isArray(writeups) && writeups.map((writeup, index) => (
                        <WriteUpList key={index} str1="writeups" str2="writeup" sid={writeup._id} title={writeup.title} description={writeup.description} date={writeup.publicationDate} author={writeup.author} />
                    ))
                }
            </div>
            <hr></hr>
            <Paginate currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
        </div>
    )
}

export default WriteUpListPage