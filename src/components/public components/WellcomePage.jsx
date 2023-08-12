import React, { useEffect, useState } from 'react';

//style
import style from "../../styles/WellcomePage.module.css"

//rputer
import { Link, useNavigate } from 'react-router-dom';

//axios
import axios from 'axios';

const WellcomePage = () => {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [pass, setPass] = useState("")
  const [validate, setValidate] = useState(false)
  const navigate = useNavigate();
  const users = {
    fullname: name,
    phone: number,
    password: pass
  }
  
  useEffect(() => {
    setName(localStorage.getItem('userName'));
    setNumber(localStorage.getItem('userNumber'));
    setPass(localStorage.getItem('userPassword'));
  }, [])

  return (
    <>
      <div className={style.wllcome_container}>
        <p>من {users.fullname} هستم با شماره تلفن: {users.phone}</p>
        <p className={style.agree} >
          مشخصات فوق را تایید میکنید؟
          <input type="checkbox"
            onClick={(e) => {
              if (e.currentTarget.checked) {
                setValidate(true)
              } else {
                setValidate(false);
              }
            }}
          />
          <Link to={"/"}>بیخیال</Link>
        </p>
        <div className={style.wellcome_btn}>
          <button
            style={validate ? { cursor: "pointer" } : { cursor: "not-allowed" }}
            disabled={validate ? false : true}
            onClick={() => {
              // console.log(users);
              axios.post('http://localhost:8000/users', users)
              navigate("/")
            }}
          >
            تایید
          </button>
        </div>
      </div>
    </>
  );
}

export default WellcomePage;