import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/NavBar';
// import SideNav from './views/Bars/SideNavBar/SideNav';
import { BrowserRouter, Routes, Route } from "react-router-dom"; import Login from './components/Forms/Login'
import SignUp from './components/Forms/SignUp'
import SideNav from './views/Bars/SideNavBar/SideNav'
import Home from './views/Home/Home'
import ArticlesList from './views/Articles/ArticlesList/ArticlesList'
import Article from './views/Articles/Article/Article'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import Blog from './views/Blogs/Blog/Blog'
import BlogList from './views/Blogs/BlogList/BlogList'
import ListNorm from './components/Lists/ListNorm'
import ASB from './views/NoteBooks/ASB/ASB'
import GHB from './views/NoteBooks/GHB/GHB'
import KHB from './views/NoteBooks/KHB/KHB'
import AdminView from './views/BeastPanel/AdminView'
import WriteUp from './views/WriteUps/WriteUp/WriteUp'
import WriteUpsList from './views/WriteUps/WriteUpList/WriteUpListPage';

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
          </div>
          <Footer />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
