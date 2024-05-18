import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { DarkModeProvider, useDarkMode } from './components/Context/DarkModeProvider';

import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';

// admin
import AdminViewComp from './views/BeastPanel/AdminViewComp';
import UserViewComp from './views/BeastPanel/UserViewComp';

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      console.log('no token found');
      return;
    }

    const checkRole = async () => {
      try {
        const response = await fetch('/users/check', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Role check failed');
        }

        const data = await response.json();
        if (data.role === 'admin') {
          setIsAdmin(true);
        } else {
          console.log('User is not an admin');
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkRole();
  }, []);

  return (
    <DarkModeProvider>
      <AppContent isAdmin={isAdmin} />
    </DarkModeProvider>
  );
}

const AppContent = ({ isAdmin }) => {
  const { darkMode } = useDarkMode();

  return (
    <BrowserRouter>
      <div className={darkMode ? "App dark" : "App"}>
        <div className='d-flex flex-column'>
          <NavBar />
          <div className='d-flex flex-row'>
            {!isAdmin ? <UserViewComp /> : <AdminViewComp />}
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
