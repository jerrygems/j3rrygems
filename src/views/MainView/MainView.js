import React from 'react'
import Login from '../../components/Forms/Login'
import SignUp from '../../components/Forms/SignUp'
import SideNav from '../Bars/SideNavBar/SideNav'
import Home from '../Home/Home'
import ArticlesList from '../Articles/ArticlesList/ArticlesList'

function MainView() {
    return (
        <div className='d-flex flex-row'>
            <SideNav />  
            {/* <Home /> */}
            {/* <ArticlesList /> */}
            {/* <SignUp /> */}
            {/* <Login /> */}

        </div>
    )
}

export default MainView