import React, { useState } from 'react';
import { useDarkMode } from '../Context/DarkModeProvider';
import { Form } from 'react-bootstrap';
import ListNorm from '../Lists/ListNorm';

function Search() {
    const { darkMode } = useDarkMode();
    const bg = darkMode ? 'bg-dark' : 'bg-body-tertiary';
    const txtWhite = darkMode ? 'txt-white' : 'text-black';
    const dk = darkMode ? 'dark' : 'nondark';

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = async (searchQuery) => {
        try {
            const response = await fetch(`http://localhost:5000/api/search?key=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResults(data.results);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        fetchResults(value);
    };

    return (
        <div className={`d-flex flex-column content-box m-2 text-start ${txtWhite} border rounded`}>
            <div className={`d-flex row text-start p-3`}>
                <h3 className={`m-3`}>Search Bar</h3>
                <hr></hr>
                <div className={`d-flex justify-content-center`}>
                    <Form.Control
                        className='justify-content-center d-flex w-25'
                        style={{ height: 40 }}
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={`mt-4`}>
                    {
                        Array.isArray(results) && results.map((result, index) => {
                            switch (result.source) {
                                case "khb":
                                    return (
                                        <ListNorm key={index} sid={result._id} title={result.title} description={result.description} date={result.publicationDate} str1="khb" str2="khbchap" />
                                    )
                                case "ghb":
                                    return (
                                        <ListNorm key={index} sid={result._id} title={result.title} description={result.description} date={result.publicationDate} str1="ghb" str2="ghbchap" />
                                    )
                                case "asb":
                                    return (
                                        <ListNorm key={index} sid={result._id} title={result.title} description={result.description} date={result.publicationDate} str1="asb" str2="asbchap" />
                                    )
                                case "blogs":
                                    return (
                                        <ListNorm key={index} sid={result._id} title={result.title} description={result.description} date={result.publicationDate} str1="blogs" str2="blog" />
                                    )
                                case "writeups":
                                    return (
                                        <ListNorm key={index} sid={result._id} title={result.title} description={result.description} date={result.publicationDate} str1="writeups" str2="writeup" />
                                    )
                            }
                        })
                    }
                </div>
            </div>
            <div className={`d-flex row text-start`}></div>
        </div>
    );
}

export default Search;
