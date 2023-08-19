import React from 'react';


import { NavLink } from 'react-router-dom';

import style from "../../styles/ListBar.module.css"
import { useDispatch } from 'react-redux';
import { openMenu } from '../../redux/humberSlice';


const ListBar = () => {

  const dispatch = useDispatch()

  return (
    <>
      <div className={style.listbar} >
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                onClick={()=>dispatch(openMenu())}
                style={
                  ({ isActive }) => {
                    return {
                      color: isActive ? "#00b24a" : "#000",
                    }
                  }
                }
              >
                خانه
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"b"}
                style={
                  ({ isActive }) => {
                    return {
                      color: isActive ? "#00b24a" : "#000",
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
              <a
                target="_blank"
                href='https://jobinja.ir/companies/mabna-dp/jobs'
                style={{ color: "#000" }}
              >
                فرصت های شغلی
              </a>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={()=>dispatch(openMenu())}
                style={
                  ({ isActive }) => {
                    return {
                      color: isActive ? "#00b24a" : "#000",
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
                onClick={()=>dispatch(openMenu())}
                style={
                  ({ isActive }) => {
                    return {
                      color: isActive ? "#00b24a" : "#000",
                    }
                  }
                }
              >
                تماس با ما
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/login"}
                onClick={()=>dispatch(openMenu())}
                style={
                  ({ isActive }) => {
                    return {
                      color: isActive ? "#00b24a" : "#000",
                    }
                  }
                }
              >
                ورود به سامانه امور مشتریان
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </>
  );
}

export default ListBar;