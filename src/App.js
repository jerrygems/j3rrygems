import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/NavBar';
// import SideNav from './views/Bars/SideNavBar/SideNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';


import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'

// admin

import AdminViewComp from './views/BeastPanel/AdminViewComp';
import UserViewComp from './views/BeastPanel/UserViewComp';

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('jwt_token')
    if (!token) {
      console.log('no token found')
    } else {
      if (jwtDecode(token) && jwtDecode(token).role === "admin") {
        setIsAdmin(true)
        console.log(token)
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
                <AdminViewComp />
              </> : <>
                <UserViewComp />
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
