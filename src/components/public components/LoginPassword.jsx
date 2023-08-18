import React, { useState } from 'react';


import style from "../../styles/login.module.css"
import { useNavigate } from 'react-router-dom';



const LoginPassword = () => {

  const [getName, setGetName] = useState("");
  const [getPass, setGetPass] = useState("");
  const [lookPass, setLookPass] = useState("");
  const [checkPass, setCheckPass] = useState(false);
  let validate = false
  const navigate = useNavigate();
  if (getPass.length >= 8 && getPass === lookPass && getName.length >= 3) {
    validate = true
  }else{
    validate = false
  }


  return (
    <>
      <div className={style.login_content}>
        <div className={style.login_get_num}>
          <div className={style.login_icon}>
            <img src="https://my.mabnadp.com/_next/static/media/logo.5421f771.svg" alt="" />
            <p>سامانه امور مشتریان مبنا</p>
          </div>
          <form action="">
            <span>
              ثبت نام / ورود
            </span>
            <div className={style.inputname_holder}>
              <span>نام و نام خانوادگی خود را وارد کنید</span>
              <input
                type="text"
                value={getName}
                onChange={(event) => {
                  setGetName(event.target.value);
                  // console.log(getName);
                }}
                placeholder='به طور مثال امیرحسین طولابی'
              />
            </div>
            <div className={style.inputpass_holder}>
              <span>رمز عبور جدید</span>
              <input
                type={checkPass ? "text" : "password"}
                value={getPass}
                onChange={(event) => {
                  setGetPass(event.target.value);
                  // console.log(getPass);
                }}
                placeholder='********'
              />
            </div>
            <div className={style.inputpass_holder} >
              <span>رمز عبور را مجدد وارد نمایید</span>
              <input
                type={checkPass ? "text" : "password"}
                value={lookPass}
                onChange={(event) => {
                  setLookPass(event.target.value);
                }}
                placeholder='********'
              />
            </div>
            <div className={style.check}>
              <p>
                نمایش پسورد 
                <input
                  onClick={(event) => {
                    if (event.currentTarget.checked) {
                      setCheckPass(true)
                    } else {
                      setCheckPass(false)
                    }
                  }}
                  type="checkbox"
                />
              </p>
            </div>
            <button
              style={validate? {background: "green" , cursor:"pointer"} :{background: "#ababab" , cursor:"not-allowed"} }
              disabled = {validate? false : true}
              onClick={() => {
                localStorage.setItem('userName' , getName)
                localStorage.setItem('userPassword' , getPass)
                navigate("/WellcomePage")
              }}
            >ورود</button>
          </form>
        </div>
        <div className={style.login_bgi}>

        </div>
      </div>
    </>
  );
}

export default LoginPassword;