import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/NavBar';
// import SideNav from './views/Bars/SideNavBar/SideNav';
import { BrowserRouter, Routes, Route } from "react-router-dom"; import Login from './components/Forms/Login'
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
import InsightsPanel from './views/BeastPanel/panels/InsightsPanel';
import ASBPanel from './views/BeastPanel/panels/ASBPanel';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='d-flex flex-column'>
          <NavBar />
          {/* <SignUp /> */}
          <div className='d-flex flex-row'>
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

            {/* admin stuff is here */}
            {/* <AdminSideNav />
            <Routes>
              <Route path='/' element={<InsightsPanel />} />
              <Route path='/asb-panel' element={<ASBPanel/>} />
              <Route path='/ghb-panel' element={<InsightsPanel />} />
              <Route path='/khb-panel' element={<InsightsPanel />} />
              <Route path='/blogs-panel' element={<InsightsPanel />} />
              <Route path='/bugsandfixes' element={<InsightsPanel />} />
              <Route path='/events' element={<InsightsPanel />} />
              <Route path='/feedbacks' element={<InsightsPanel />} />
              <Route path='/reports' element={<InsightsPanel />} />
              <Route path='/tools' element={<InsightsPanel />} />
              <Route path='/tutorials' element={<InsightsPanel />} />
              <Route path='/writeups' element={<InsightsPanel />} />
            </Routes> */}
          </div>
          <Footer />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
