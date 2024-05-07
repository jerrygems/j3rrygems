import React from 'react'
import { Route, Routes } from 'react-router-dom'
//

import ASBPanel from './panels/ASBPanel';
import GHBPanel from './panels/GHBPanel'
import KHBPanel from './panels/KHBPanel'
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
import AdminEventList from './panels/Events/EventList'
// import EventEdit from './panels/Events/EventEdit'
import InsightsPanel from './panels/InsightsPanel';
import AdminSideNav from './comps/AdminSideNav';

const AdminViewComp = () => {
    return (
        <>
            <AdminSideNav/>
            <Routes>
                <Route path='/' element={<InsightsPanel />} />
                
                <Route path='/asb-panel' element={<ASBPanel />} />
                <Route path='/ghb-panel' element={<GHBPanel />} />
                <Route path='/khb-panel' element={<KHBPanel />} />
                <Route path='/blogs-panel' element={<BlogsPanel />} />
                <Route path='/blog-edit' element={<BlogEdit />} />
                <Route path='/blog-edit/:blogid' element={<BlogEdit />} />
                <Route path='/bugsandfixes' element={<BugsAndFixes />} />
                <Route path='/events' element={<AdminEventList />} />
                <Route path='/feedbacks' element={<Feedbacks />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/tools' element={<Tools />} />
                <Route path='/tutorials' element={<Tutorials />} />
                <Route path='/asb-edit' element={<ASBEdit />} />
                <Route path='/asb-list' element={<AdminASBList />} />
                <Route path='/writeup-list' element={<AdminWriteUpList />} />
                <Route path='/writeup-edit' element={<WriteUpEdit />} />
                <Route path='/writeup-edit/:writeupid' element={<WriteUpEdit />} />
                <Route path='/khb-edit' element={<KHBEdit />} />
                <Route path='/khb-list' element={<AdminKHBList />} />
            </Routes>
        </>
    )
}

export default AdminViewComp