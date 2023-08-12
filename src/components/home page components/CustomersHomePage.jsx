import React from 'react';

import style from "../../styles/CustomersHomePage.module.css"

const CustomersHomePage = () => {
  return ( 
    <>
      <div className={style.customers}>
        <h3>مشتریان</h3>
        <p>۷۰۰+ شرکت</p>
        <div className={style.customers_cards}>
          <div className={style.customers_card}>
            <div className={style.customers_logo_holder}>
              <img src="https://mabnadp.com/_next/static/media/Saman.cdd61a6a.svg" alt="" />
              <p>بانک سامان</p>
            </div>
          </div>
          <div className={style.customers_card}>
            <div className={style.customers_logo_holder}>
              <img src="https://mabnadp.com/_next/static/media/KarAfarin.532c2a22.svg" alt="" />
              <p>بانک کارآفرین</p>
            </div>
          </div>
          <div className={style.customers_card}>
            <div className={style.customers_logo_holder}>
              <img src="https://mabnadp.com/_next/static/media/Novin.f0ab69c3.svg" alt="" />
              <p>تامین سرمایه نوین</p>
            </div>
          </div>
          <div className={style.customers_card}>
            <div className={style.customers_logo_holder}>
              <img src="https://mabnadp.com/_next/static/media/Farabi.0c04cb1f.svg" alt="" />
              <p>سبد گردانی فارابی</p>
            </div>
          </div>
          <div className={style.customers_card}>
            <div className={style.customers_logo_holder}>
              <img src="https://mabnadp.com/_next/static/media/Kian.b2cb725f.svg" alt="" />
              <p>گروه مالی کیان</p>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default CustomersHomePage;