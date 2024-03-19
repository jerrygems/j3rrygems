import React from 'react'
import '../../styles/style.css'
import NavBar from '../../components/Navbar/NavBar'
import AdminSideNav from './comps/AdminSideNav'

function AdminView() {
    return (
        <div className='d-flex flex-column'>
            <NavBar />
            <div className='d-flex flex-row'>
                <AdminSideNav />


            </div>

        </div>
    )
}

export default AdminView