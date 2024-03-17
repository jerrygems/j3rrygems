import React from 'react'
import Login from '../../components/Forms/Login'
import SignUp from '../../components/Forms/SignUp'
import SideNav from '../Bars/SideNavBar/SideNav'
import Home from '../Home/Home'
import ArticlesList from '../Articles/ArticlesList/ArticlesList'
import Article from '../Articles/Article/Article'
import NavBar from '../../components/Navbar/NavBar'
import Footer from '../../components/Footer/Footer'
import Blog from '../Blogs/Blog/Blog'
import BlogList from '../Blogs/BlogList/BlogList'
import ListNorm from '../../components/Lists/ListNorm'
import ASB from '../NoteBooks/ASB/ASB'

function MainView() {
    return (
        <div className='d-flex flex-column'>
            <NavBar />
            <div className='d-flex flex-row'>
                <SideNav />
                {/* <Article /> */}
                {/* <BlogList /> */}
                <ASB />

            </div>
            <Footer />

            {/* <Home /> */}
            {/* <ArticlesList /> */}
            {/* <SignUp /> */}
            {/* <Login /> */}

        </div>
    )
}

export default MainView