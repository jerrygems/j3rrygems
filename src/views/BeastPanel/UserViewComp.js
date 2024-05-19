import React from 'react'
import BlogList from '../Blogs/BlogList'
import ASB from '../NoteBooks/ASB/ASB'
import GHB from '../NoteBooks/GHB/GHB'
import KHB from '../NoteBooks/KHB/KHB'
import WriteUpsList from '../WriteUps/WriteUpListPage';
import SideNav from '../Bars/SideNavBar/SideNav'
import Home from '../Home/Home'

import { Route, Routes } from 'react-router-dom'
import DefPreview from '../Preview/DefPreview'
import Announcements from '../General/Announcements/Announcements'
import Events from '../General/Events/Events'
import About from '../About/About'

function UserViewComp() {
    return (
        <>
            <SideNav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Blogs' element={<BlogList />} />
                <Route path='/WriteUps' element={<WriteUpsList />} />
                <Route path='/ASB' element={<ASB />} />
                <Route path='/GHB' element={<GHB />} />
                <Route path='/KHB' element={<KHB />} />
                <Route path='/Announcements' element={<Announcements />} />
                <Route path='/Events' element={<Events />} />
                <Route path='/About' element={<About />} />
                <Route path='/:str1/:str2/:sid' element={<DefPreview />} />
            </Routes>
        </>
    )
}

export default UserViewComp