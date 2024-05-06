import React from 'react'
import Blog from '../Blogs/Blog'
import BlogList from '../Blogs/BlogList'
import ASB from '../NoteBooks/ASB/ASB'
import GHB from '../NoteBooks/GHB/GHB'
import KHB from '../NoteBooks/KHB/KHB'
import WriteUp from '../WriteUps/WriteUp'
import WriteUpsList from '../WriteUps/WriteUpListPage';
import SideNav from '../Bars/SideNavBar/SideNav'
import Home from '../Home/Home'
import ArticlesList from '../Articles/ArticlesList'
import Article from '../Articles/Article'

import { Route, Routes } from 'react-router-dom'

function UserViewComp() {
    return (
        <>
            <SideNav />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Articles' element={<ArticlesList />} />
                <Route path='/Articles/:articleid' element={<Article />} />
                <Route path='/Blogs' element={<BlogList />} />
                <Route path='/Blogs/:blogid' element={<Blog />} />
                <Route path='/WriteUps' element={<WriteUpsList />} />
                <Route path='/WriteUps/:writeupid' element={<WriteUp />} />
                <Route path='/ASB' element={<ASB />} />
                <Route path='/GHB' element={<GHB />} />
                <Route path='/KHB' element={<KHB />} />
            </Routes>
        </>
    )
}

export default UserViewComp