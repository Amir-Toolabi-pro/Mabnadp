import React from 'react';

// imported components
import HomePage from './components/home page components/HomaPage';

// router
import { Routes , Route } from 'react-router-dom';
import Login from './components/public components/Login';
import WellcomePage from './components/public components/WellcomePage';
import AboutUs from './components/about us components/AboutUs';
import ContactUs from './components/contact us/ContactUs';
import LoginPassword from './components/public components/LoginPassword';


const AllComponents = () => {
  return ( 
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/loginPass' element={<LoginPassword/>} />
      <Route path='/WellcomePage' element={<WellcomePage/>} />
    </Routes>
    </>
   );
}
 
export default AllComponents;