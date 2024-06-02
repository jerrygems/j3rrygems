import React from "react";

function Paginate({ currentPage, maxPage, prevPage, nextPage }) {

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`btn btn-dark pointit mx-1 my-5 ${currentPage === 1 ? "disabled" : ""}`} onClick={prevPage}>Prev</li>
                <li className={`btn btn-dark pointit mx-1 my-5 ${currentPage === maxPage ? "disabled" : ""}`} onClick={nextPage}>Next</li>
            </ul>
        </nav>
    );
}

export default Paginate;