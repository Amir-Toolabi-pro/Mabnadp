import React, { useEffect, useState } from 'react';

//style
import style from "../../styles/login.module.css"

//router
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const [getNumber, setGetNumber] = useState("");

  useEffect(()=>{
    const localNumber = localStorage.getItem('userNumber');
    if(localNumber){
      setGetNumber(localNumber)
    }else{
      setGetNumber(getNumber)
    }
  },[])

  let validate = false
  const navigate = useNavigate();
  if (getNumber !== "" && getNumber.startsWith("09") && getNumber.length === 11) {
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
            <div className={style.inputnum_holder} >
              <span>شماره موبایل خود را وارد کنید.</span>
              <input
                value={getNumber}
                onChange={(event) => {
                  setGetNumber(event.target.value);
                  // console.log(getNumber);
                  // console.log(validate);
                }}
                type="number"
                placeholder='به طور مثال ۰۹۱۲۰۰۰۰۰۰۰'
              />
            </div>
            <button
            style={validate? {background: "green" , cursor:"pointer" } : {backgroundColor: "#bcbcbc" , cursor:"not-allowed"} }
              disabled = {validate? false : true}
              onClick={() => {
                localStorage.setItem('userNumber' , getNumber)
                navigate("/loginPass")
              }}
            >ادامه</button>
          </form>
        </div>

        <div className={style.login_bgi}>

        </div>
      </div>
    </>
  );
}

export default Login;