import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../../components/Context/DarkModeProvider';

function ListTypeA({ sid, title, description, date, strn, strn2 }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const cover = darkMode ? 'cover1' : 'dcover1'
  const border = darkMode ? '' : 'border'
  const txtWhite = darkMode ? 'txt-white' : 'txt-black'

  const handleDelete = async (e, sid) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      console.error('No token found');
      return;
    }
    try {
      const response = await fetch(`${process.env.WEB_URL}:${process.env.BPORT}/${strn2}/delete?sid=${sid}`, {
        method: 'delete',
        headers: {
          "Authorization": `${token}`
        }
      });
      if (response.ok) {
        console.log("deleted")
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  return (
    <div className={`d-flex flex-row ${cover} ${border} rounded m-3`} style={{ width: '340px' }}>
      <div className='row mx-5 my-2'>
        <div className='d-flex flex-column text-start'>
          <h4 >{title?.substring(0, 40)}<hr></hr></h4>
          <h6 >{description?.substring(0, 80)}</h6>
          <h6>{date}</h6>
        </div>
        <hr />
        <div className='d-flex flex-row align-items-center justify-content-end'>
          <Button className='btn-sm btn-success m-2'><i className='fa fa-edit'></i> <Link className='text-decoration-none text-white' to={`/${strn}/${sid}`} >Edit</Link></Button>
          <Button className='btn-sm btn-danger m-2' onClick={(e) => handleDelete(e, sid)}><i className='fa fa-trash'></i> Trash</Button>
        </div>
      </div>
    </div>
  )
}

export default ListTypeA