import React from 'react';

import style from "../../styles/ProductsHomePage.module.css"


const ProductsHomePage = () => {
  return (
    <>
      <div className={style.products_homepage}>
        <h3>در هر حوزه مالی که فعالیت می‌کنید</h3>
        <p>محصولی &nbsp;مختص &nbsp;شما &nbsp;داریم</p>
        <div className={style.products_list_button}>
          <ul>
            <li>سبد گردانی</li>
            <li>کارگزاری</li>
            <li>پردازش اطلاعات مالی</li>
            <li>صندوق سرمایه گذاری</li>
            <li>شرکت سرمایه گذاری</li>
          </ul>
        </div>
        <div className={style.products_cards}>
          <a href="#" className={style.card}>
            <div className={style.imgbgc}>
            </div>
              <div className={style.img_holder}>
                <img src="https://mabnadp.com/_next/static/media/rahavard365.f6f28db5.svg" alt="" />
              </div>
            <div className={style.products_card_para}>
              <h4>ره آورد</h4>
              <p>مرجع اطلاعات و تحلیل بازار های مالی</p>
            </div>
          </a>
          <a href="#" className={style.card}>
            <div className={style.imgbgc}>
            </div>
              <div className={style.img_holder}>
                <img src="https://mabnadp.com/_next/static/media/vasam.c7bc6308.svg" alt="" />
              </div>
            <div className={style.products_card_para}>
              <h4>داهی</h4>
              <p>نرم افزار معاملات الگوریتمی</p>
            </div>
          </a>
          <a href="#" className={style.card}>
            <div className={style.imgbgc}>
            </div>
              <div className={style.img_holder}>
                <img src="https://mabnadp.com/_next/static/media/rahavard-novin-3.6a5d286e.svg" alt="" />
              </div>
            <div className={style.products_card_para}>
              <h4>ره آورد نوین</h4>
              <p>بانک اطلاعاتی و ابزار تحلیل</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductsHomePage;