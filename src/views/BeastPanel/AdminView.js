import React from 'react'
import '../../styles/style.css'
import NavBar from '../../components/Navbar/NavBar'
import AdminSideNav from './comps/AdminSideNav'
import InsightsPanel from './panels/InsightsPanel'
// import ASBList from './panels/ASB/ASBList'
// import BlogsList from './panels/Blogs/BlogsList'
// import WriteUpsList from './panels/WriteUps/WriteUpsList'
// import GHBList from './panels/GHB/GHBList'
import KHBList from './panels/KHB/KHBList'
import Announcements from './panels/Others/Anon/Announcements'
import Events from './panels/Others/Events/Events'

function AdminView() {
    return (
        <div className='d-flex flex-column'>
            <NavBar />
            <div className='d-flex flex-row'>
                <AdminSideNav />
                <InsightsPanel />
            </div>

        </div>
    )
}

export default AdminView