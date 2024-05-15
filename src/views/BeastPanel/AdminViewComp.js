import React from 'react'
import { Route, Routes } from 'react-router-dom'
//

import BlogsPanel from './panels/BlogsPanel'
import BugsAndFixes from './panels/BugsAndFixes'
import Feedbacks from './panels/Feedbacks'
import Reports from './panels/Reports'
import Tools from './panels/Tools'
import Tutorials from './panels/Tutorials'
import WriteUpEdit from './panels/WriteUps/WriteUpEdit'
import AdminWriteUpList from './panels/WriteUps/WriteUpsList'
import BlogEdit from './panels/Blogs/BlogEdit'
import AdminBlogList from '../Blogs/BlogList';
import ASBEdit from './panels/ASB/ASBEdit'
import AdminASBList from './panels/ASB/ASBList'
import KHBEdit from './panels/KHB/KHBEdit';
import AdminKHBList from './panels/KHB/KHBList'
import AdminGHBList from './panels/GHB/GHBList'
// import EventEdit from './panels/Events/EventEdit'
import InsightsPanel from './panels/InsightsPanel';
import AdminSideNav from './comps/AdminSideNav';
import GHBEdit from './panels/GHB/GHBEdit';
import Announcements from './panels/Others/Anon/Announcements'
import CreateAnon from './panels/Others/Anon/CreateAnon'
import AdminEventList from './panels/Others/Events/Events'
import CreateEvent from './panels/Others/Events/CreateEvent'

const AdminViewComp = () => {
    return (
        <>
            <AdminSideNav/>
            <Routes>
                <Route path='/' element={<InsightsPanel />} />
                
                <Route path='/blogs-panel' element={<BlogsPanel />} />
                <Route path='/blog-edit' element={<BlogEdit />} />
                <Route path='/blog-edit/:blogid' element={<BlogEdit />} />
                <Route path='/bugsandfixes' element={<BugsAndFixes />} />
                <Route path='/feedbacks' element={<Feedbacks />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/tools' element={<Tools />} />
                <Route path='/tutorials' element={<Tutorials />} />
                <Route path='/asb-edit' element={<ASBEdit />} />
                <Route path='/asb-edit/:asbid' element={<ASBEdit />} />
                <Route path='/asb-list' element={<AdminASBList />} />
                <Route path='/writeup-list' element={<AdminWriteUpList />} />
                <Route path='/writeup-edit' element={<WriteUpEdit />} />
                <Route path='/writeup-edit/:writeupid' element={<WriteUpEdit />} />
                <Route path='/khb-edit' element={<KHBEdit />} />
                <Route path='/khb-edit/:khbid' element={<KHBEdit />} />
                <Route path='/khb-list' element={<AdminKHBList />} />
                <Route path='/ghb-list' element={<AdminGHBList />} />
                <Route path='/ghb-edit' element={<GHBEdit />} />
                <Route path='/ghb-edit/:ghbid' element={<GHBEdit />} />
                <Route path='/announcements' element={<Announcements />} />
                <Route path='/anon-create' element={<CreateAnon />} />
                <Route path='/events' element={<AdminEventList />} />
                <Route path='/event-create' element={<CreateEvent />} />
                
            </Routes>
        </>
    )
}

export default AdminViewComp