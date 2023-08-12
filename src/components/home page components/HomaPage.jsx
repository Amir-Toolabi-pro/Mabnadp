import React, { useEffect, useState } from 'react';
//components
import HeaderComponent from '../public components/Header';
import ConsultationRequest from './ConsultationRequest';
import ProductsHomePage from './ProductsHomePage';
import CustomersHomePage from './CustomersHomePage';
import FormHomePage from './FormHomePage';
import MabnaHistory from './MabnaHistory';
import MabnaIsDifferent from './MabnaIsDifferent';
import CallMabna from './CallMabna';
import SwiperSlideShow from '../public components/SwiperSlideShow';
import Footer from '../public components/Footer';
import axios from 'axios';





const HomePage = () => {

  const [getUsers, setGetUsers] = useState([])
  const [localName, setLocalName] = useState("")
  const [localNum, setLocalNum] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/users");
        setGetUsers(data);
      } catch (err) {
        console.log(err.message);
      }

    }
    const name = localStorage.getItem('userName');
    const number = localStorage.getItem('userNumber');
    setLocalName(name);
    setLocalNum(number)
    fetchData()
  }, []);

  const currentUser = getUsers.find(user => {
    return user.fullname == localName && user.phone == localNum
  })


  return ( 
    <>
      <HeaderComponent currentUser={currentUser} />
      <ConsultationRequest/>
      <ProductsHomePage/>
      <CustomersHomePage/>
      <FormHomePage/>
      <MabnaHistory/>
      <MabnaIsDifferent/>
      <CallMabna/>
      <SwiperSlideShow/>
      <Footer/>
    </>
   );
}
 
export default HomePage;