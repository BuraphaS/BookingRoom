import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Axios from 'axios';

import Login from './component/Login/Login';
import './App.css';
import Dashboard from './component/Page/DashBoard';
import List from './component/Page/ListPage';
import Register from './component/Register/Register';
import CreateList from './component/Page/CreateList';
import BookingPage from './component/Page/BookingPage';
import ReportPage from './component/Page/ReportPage';
import Users from './component/Page/ListUser'
import CreateItem from './component/Page/CreateItemPage'
import CreateDepartment from './component/Page/CreateDepartment'

import DashboardUser from './UserPage/DashBoard';
import ListUser from './UserPage/ListPage';
import BookingPageUser from './UserPage/BookingPage';
import BookingListUser from './UserPage/BookingList';

import DashboardMini from './miniAdminPage/DashBoard';
import ListMini from './miniAdminPage/ListPage';
import BookingPageMini from './miniAdminPage/BookingPage';
import BookingListMini from './miniAdminPage/BookingList';
import CreateUsefor from './component/Page/CreateUsefor'

import Info from './component/InfoUser/InfoUserPage';
import InfoMini from './miniAdminPage/InfoPageMini';
import InfoUser from './UserPage/InfoPageUser';

function App() {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/userlog', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <>
      <Routes>
        {isAuthenticated && userData && (
          <>
            {userData.role === 'Admin' && (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Dashboard />} />
                <Route path="/list" element={<Dashboard />} />
                <Route path="/listrooms" element={<List />} />
                <Route path="/createroom" element={<CreateList />} />
                <Route path="/createitem" element={<CreateItem />} />
                <Route path="/createdepartment" element={<CreateDepartment />} />
                <Route path="/createusefor" element={<CreateUsefor />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/users" element={<Users />} />
                <Route path="/info" element={<Info />} />
              </>
            )}
            {userData.role === 'miniAdmin' && (
              <>
                <Route path="/" element={<DashboardMini />} />
                <Route path="/list" element={<DashboardMini />} />
                <Route path="/login" element={<DashboardMini />} />
                <Route path="/listUser" element={<DashboardMini />} />
                <Route path="/listroomsUser" element={<ListMini />} />
                <Route path="/bookingUser" element={<BookingPageMini />} />
                <Route path="/bookinglist" element={<BookingListMini />} />
                <Route path="/infoMini" element={<InfoMini />} />
              </>
            )}
            {userData.role === 'User' && (
              <>
                <Route path="/" element={<DashboardUser />} />
                <Route path="/list" element={<DashboardUser />} />
                <Route path="/login" element={<DashboardUser />} />
                <Route path="/listUser" element={<DashboardUser />} />
                <Route path="/listroomsUser" element={<ListUser />} />
                <Route path="/bookingUser" element={<BookingPageUser />} />
                <Route path="/bookinglist" element={<BookingListUser />} />
                <Route path="/infoUser" element={<InfoUser />} />
              </>
            )}
          </>
        )}

        {!isAuthenticated && (
          <>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/listrooms" element={<Navigate to="/login" />} />
            <Route path="/createroom" element={<Navigate to="/login" />} />
            <Route path="/booking" element={<Navigate to="/login" />} />
            <Route path="/report" element={<Navigate to="/login" />} />
            <Route path="/users" element={<Navigate to="/login" />} />
            <Route path="/createitem" element={<Navigate to="/login" />} />
            <Route path="/createdepartment" element={<Navigate to="/login" />} />

            <Route path="/list" element={<Navigate to="/login" />} />

            <Route path="/listUser" element={<Navigate to="/login" />} />
            <Route path="/listroomsUser" element={<Navigate to="/login" />} />
            <Route path="/bookingUser" element={<Navigate to="/login" />} />
            <Route path="/bookinglist" element={<Navigate to="/login" />} />

            <Route path="/info" element={<Navigate to="/login" />} />
            <Route path="/infoMini" element={<Navigate to="/login" />} />
            <Route path="/infoUser" element={<Navigate to="/login" />} />
            
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
