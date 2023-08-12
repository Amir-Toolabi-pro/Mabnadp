import React, { useState } from 'react';

//router
import { NavLink, useNavigate } from 'react-router-dom';
//style
import style from "../../styles/header.module.css"


const HeaderComponent = ({ currentUser }) => {

  const [mouseMove, setMouseMove] = useState(false)

  const navigate = useNavigate()


  return (
    <>
      <header>
        <div className={style.header_container}>
          <div className={style.ham_menu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={style.logo_and_navbar}>
            <div className={style.logo}>
              <img src="https://mabnadp.com/_next/static/media/mabna-logo-40-40.d9957e41.svg" alt="" />
            </div>
            <div className={style.logo_phone}>
              <img src="https://mabnadp.com/_next/static/media/mabna-logo-text.698569fc.svg" alt="" />
            </div>
            <div className={style.navbar}>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      to={"/"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "2px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      خانه
                    </NavLink>
                  </li>
                  <li
                    onMouseOver={() => {
                      setMouseMove(true)
                    }}
                    onMouseOut={() => {
                      setMouseMove(false)
                    }}
                  >
                    <NavLink
                      to={"b"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? " 3px solid #00b753" : null,
                          }
                        }
                      }
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      محصولات
                      <svg className={style.head_svg} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"a"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "3px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      فرصت های شغلی
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/about"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "3px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      درباره مبنا
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "3px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      تماس با ما
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={style.btn_login_header}>
            {currentUser ?
              <button>
                {currentUser.fullname}
              </button>
              :
              <button
                onClick={() => {
                  navigate("/login")
                }}
              >
                ورود
              </button>
            }
          </div>
        </div>
        <div className={style.products_hover_show}
          style={{ display: mouseMove ? "block" : "none" }}
        >
          <div className={style.products_hover_show_container}
            onMouseOver={() => {
              setMouseMove(true)
            }}
            onMouseOut={() => {
              setMouseMove(false)
            }}
          >
            <div className={style.products_hover_show_culmn_holder}>
              <div className={style.products_hover_show_culmn_holder_child_one}>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/rahavard365.f6f28db5.svg" alt="" />
                      ره آورد
                    </h5>
                    <p>مرجع اطلاعات و تحلیل بازار های مالی</p>
                  </div>
                </div>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/sabadyar.95382236.svg" alt="" />
                      سبدیار
                    </h5>
                    <p>
                      مدیریت پرتفوی برای سبدگردانی‌ها
                    </p>
                  </div>
                </div>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/dohi.987f4ad5.svg" alt="" />
                      داهی
                    </h5>
                    <p>
                      نرم‌افزار معاملات الگوریتمی
                    </p>
                  </div>
                </div>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/vasam.c7bc6308.svg" alt="" />
                      وسام
                    </h5>
                    <p>
                      وب‌سرویس اطلاعات مالی و معاملاتی
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.products_hover_show_culmn_holder_child_two}>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/yekan.f7afcfc6.svg" alt="" />
                      یکان
                    </h5>
                    <p>
                      مدیریت و حسابداری صندوق‌های سرمایه‌گذاری
                    </p>
                  </div>
                </div>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/emax.cc0216f4.svg" alt="" />
                      ایمکس
                    </h5>
                    <p>
                      سامانه معاملاتی برخط کارگزاری‌های بورس
                    </p>
                  </div>
                </div>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/rahavard-academy.f6f28db5.svg" alt="" />
                      ره آورد آکادمی
                    </h5>
                    <p>
                      سامانه آموزش بازارهای مالی
                    </p>
                  </div>
                </div>
                <div className={style.child}>
                  <div>
                    <h5>
                      <img src="https://mabnadp.com/_next/static/media/rahavard-novin-3.6a5d286e.svg" alt="" />
                      ره آورد نوین
                    </h5>
                    <p>
                      بانک اطلاعاتی و ابزار تحلیل
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.products_hover_show_alone_list}>
              <div>
                <h5>
                  <img src="https://mabnadp.com/_next/static/media/rahavard-novin-3.6a5d286e.svg" alt="" />
                  ره آورد نوین
                </h5>
                <p>
                  بانک اطلاعاتی و ابزار تحلیل
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;