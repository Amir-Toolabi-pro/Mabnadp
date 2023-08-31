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

import style from "../../styles/AboutUs.module.css"
import getclass from "../../styles/homepage.module.css"
import icon from "../../images/icons8-top-32.png"
import { useSelector } from 'react-redux';



const HomePage = () => {

  const [getUsers, setGetUsers] = useState([])
  const [localName, setLocalName] = useState("")
  const [localNum, setLocalNum] = useState("")
  const [getScroll, setScroll] = useState(false)

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
    return user.fullname === localName && user.phone === localNum
  })

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 400) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  });

  const validateMenu = useSelector(state => state.humberReducer.value)


  return (
    <>
      <HeaderComponent currentUser={currentUser} />
      <div className={validateMenu? getclass.homepage_holder : getScroll.homepage_holder_scrolling}>
        <ConsultationRequest />
        <ProductsHomePage />
        <CustomersHomePage />
        <FormHomePage />
        <MabnaHistory />
        <MabnaIsDifferent />
        <CallMabna />
        <SwiperSlideShow />
        <Footer />
        {getScroll ?
          <div className={style.top_btn}
            style={getScroll ? { animation: "example1 .4s ease" } : { animation: "example2 .2s ease" }}
            onClick={() => {
              document.body.scrollTop = 0
              document.documentElement.scrollTop = 0
            }}
          >
            <img src={icon} alt="" />
          </div> :
          null
        }
      </div>
    </>
  );
}

export default HomePage;