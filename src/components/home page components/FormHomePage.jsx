import React, { useState } from 'react';

import style from "../../styles/FormHomePage.module.css"
import { useLocation } from 'react-router-dom';

const FormHomePage = () => {

  const [texterNum, setTexterNum] = useState("۰")
  const [texterTxt, setTexterTxt] = useState(null)
  // const [reserv, setReserv] = useState(false)

  const search = useLocation()

  return (
    <>
      <div className={style.form_home} id='form_counseling'>
        <div className={style.form_home_holder}>
          <div className={style.get_counseling}>
            <h3>برای دریافت مشاوره، فرم را پر کنید تا همکاران ما با شما تماس بگیرند:</h3>
            <form action="">
              <div className={style.name_num}>
                <div className={style.form_home_items}>
                  <p>نام و نام خانوادگی</p>
                  <input type="text" placeholder='نام و نام خانوادگی' />
                </div>
                {search.pathname === '/contact' ?
                  <div className={style.form_home_items}>
                    <p>ایمیل</p>
                    <input type="email" placeholder='info@mabnadp.com' />
                  </div> :
                  undefined
                }
                <div className={style.form_home_items}>
                  <p>شماره موبایل</p>
                  <input className={style.getnumber} type="number" placeholder='۰۹۱۲۱۲۳۴۵۶۷' />
                </div>
              </div>
              {search.pathname === "/contact" ? undefined :
                <div className={style.form_home_items}>
                  <p>نام شرکت</p>
                  <input type="text" placeholder='پردازش اطلاعات مالی مبنا' />
                </div>
              }
              {search.pathname === "/contact" ?
                <div className={style.form_home_items}>
                  <p>توضیحات</p>
                  <textarea
                    placeholder='پیامتان را اینجا بنویسید'
                    value={texterTxt}
                    onChange={(e) => {
                      setTexterTxt(e.target.value)
                      setTexterNum(texterTxt.length)
                    }}
                  >
                  </textarea>
                  <span>
                    ۵۰۰ / {texterNum}
                  </span>
                </div>
                :
                <div className={style.form_home_items}>
                  <p>انتخاب زمان مناسب برای تماس با شما</p>
                  <div
                    className={style.form_home_items_drop_down}
                  >
                    <span>زمان مورد‌نظر خود را انتخاب کنید.</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="#BCBCBC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                  {/* <div
                    className={style.reservation_data}
                  >
                    please reserv a time to deate
                  </div> */}
                </div>
              }
              <div className={style.get_counseling_btn}>
                <button
                disabled
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
          <div className={style.form_home_img}>

          </div>
        </div >
      </div >
    </>
  );
}

export default FormHomePage;