import React, { useEffect } from 'react';

//style
import style from "../../styles/ContactUs.module.css"

//comppnents 
import HeaderComponent from '../public components/Header';
import Footer from '../public components/Footer';
import SwiperSlideShow from '../public components/SwiperSlideShow';
import FormHomePage from '../home page components/FormHomePage';
import GoogleAddres from '../public components/GoogleAddres';


const ContactUs = () => {

  useEffect(() => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }, [])

    return (
      <>
        <HeaderComponent />
        <div className={style.contact_container} >
          <section id='contact_head' className={style.contact_head} >
            <h3>تماس با ما</h3>
            <p>از هر طریقی که مایلید با ما در تماس باشید.</p>
          </section>
          <div className={style.system_customer_service}>
            <p>
              اگر درحال‌حاضر مشتری محصولات مبنا هستید و نیاز به پشتیبانی دارید ازطریق سامانه امور مشتریان تیکت ثبت کنید.
            </p>
            <div>
              <button>
                سامانه امور مشتریان مبنا
              </button>
            </div>
          </div>
          <FormHomePage />
          <section className={style.contact_icons} >
            <div className={style.contact_icons_twoing}>
              <div>
                <img src="https://mabnadp.com/_next/static/media/instagram-icon.b1b7fae9.svg" alt="" />
                <p>اینستاگرام</p>
              </div>
              <div>
                <img src="https://mabnadp.com/_next/static/media/linkedin-icon.04674b29.svg" alt="" />
                <p>لینکدین</p>
              </div>
            </div>
            <div className={style.contact_icons_twoing}>
              <div>
                <img src="https://mabnadp.com/_next/static/media/tel-icon.5c4fbd37.svg" alt="" />
                <p>۰۲۱-۸۸۷۴۹۸۲۴</p>
              </div>
              <div>
                <img src="https://mabnadp.com/_next/static/media/email-icon.7f10151d.svg" alt="" />
                <p>info@mabnadp.com</p>
              </div>
            </div>
          </section>
          <GoogleAddres />
        </div>
        <SwiperSlideShow />
        <Footer />
      </>
    );
  }

export default ContactUs;