import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/NavBar';
// import SideNav from './views/Bars/SideNavBar/SideNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

import Login from './components/Forms/Login'
import SignUp from './components/Forms/SignUp'
import SideNav from './views/Bars/SideNavBar/SideNav'
import AdminSideNav from './views/BeastPanel/comps/AdminSideNav';
import Home from './views/Home/Home'
import ArticlesList from './views/Articles/ArticlesList'
import Article from './views/Articles/Article'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import Blog from './views/Blogs/Blog'
import BlogList from './views/Blogs/BlogList'
import ListNorm from './components/Lists/ListNorm'
import ASB from './views/NoteBooks/ASB/ASB'
import GHB from './views/NoteBooks/GHB/GHB'
import KHB from './views/NoteBooks/KHB/KHB'
import WriteUp from './views/WriteUps/WriteUp'
import WriteUpsList from './views/WriteUps/WriteUpListPage';
// admin
import InsightsPanel from './views/BeastPanel/panels/InsightsPanel';
import ASBPanel from './views/BeastPanel/panels/ASBPanel';
import GHBPanel from './views/BeastPanel/panels/GHBPanel'
import KHBPanel from './views/BeastPanel/panels/KHBPanel'
import BlogsPanel from './views/BeastPanel/panels/BlogsPanel'
import BugsAndFixes from './views/BeastPanel/panels/BugsAndFixes'
import Events from './views/BeastPanel/panels/Events/EventCreate'
import Feedbacks from './views/BeastPanel/panels/Feedbacks'
import Reports from './views/BeastPanel/panels/Reports'
import Tools from './views/BeastPanel/panels/Tools'
import Tutorials from './views/BeastPanel/panels/Tutorials'
import WriteUpEdit from './views/BeastPanel/panels/WriteUps/WriteUpEdit'
import AdminWriteUpList from './views/BeastPanel/panels/WriteUps/WriteUpsList'
import BlogEdit from './views/BeastPanel/panels/Blogs/BlogEdit'
import AdminBlogList from './views/Blogs/BlogList';
import ASBEdit from './views/BeastPanel/panels/ASB/ASBEdit'
import AdminASBList from './views/BeastPanel/panels/ASB/ASBList'
import KHBEdit from './views/BeastPanel/panels/KHB/KHBEdit';
import AdminKHBList from './views/BeastPanel/panels/KHB/KHBList'
import AdminEventList from './views/BeastPanel/panels/Events/EventList'
import EventCreate from './views/BeastPanel/panels/Events/EventCreate'
import EventEdit from './views/BeastPanel/panels/Events/EventEdit'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  // const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('jwt_token')
    if (!token) {
      console.log('no token is there')
      console.log('go somewhere')
    } else {
      const decodedToken = jwtDecode(token)
      console.log('token is there')
      if (decodedToken && decodedToken.role === "admin") {
        setIsAdmin(true)
      } else {
        console.log('go somewhere')
      }
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <div className='d-flex flex-column'>
          <NavBar />
          {/* <SignUp /> */}
          <div className='d-flex flex-row'>
            {
              isAdmin ? <>
                {/* admin stuff is here */}
                <AdminSideNav />
                <Routes>
                  <Route path='/' element={<InsightsPanel />} />
                  <Route path='/asb-panel' element={<ASBPanel />} />
                  <Route path='/ghb-panel' element={<GHBPanel />} />
                  <Route path='/khb-panel' element={<KHBPanel />} />
                  <Route path='/blogs-panel' element={<BlogsPanel />} />
                  <Route path='/bugsandfixes' element={<BugsAndFixes />} />
                  <Route path='/events' element={<Events />} />
                  <Route path='/feedbacks' element={<Feedbacks />} />
                  <Route path='/reports' element={<Reports />} />
                  <Route path='/tools' element={<Tools />} />
                  <Route path='/tutorials' element={<Tutorials />} />
                  <Route path='/blog-edit' element={<BlogEdit />} />
                  <Route path='/asb-edit' element={<ASBEdit />} />
                  <Route path='/asb-list' element={<AdminASBList />} />
                  <Route path='/writeup-list' element={<AdminWriteUpList />} />
                  <Route path='/writeup-edit' element={<WriteUpEdit />} />
                  <Route path='/khb-edit' element={<KHBEdit />} />
                  <Route path='/khb-list' element={<AdminKHBList />} />
                </Routes>
              </> : <>
                <SideNav />
                <Routes>
                  <Route path='/' element={<Home />} />
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
            }
          </div>
          <Footer />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
