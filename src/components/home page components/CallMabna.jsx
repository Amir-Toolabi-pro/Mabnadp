import React from 'react';


import style from "../../styles/CallMabna.module.css"
import { Link } from 'react-router-dom';

const CallMabna = () => {
  return ( 
    <>
      <div className={style.call}>
        <div className={style.call_holder}>
          <h3>مبنا همراه شما در بازارهای مالی</h3>
          <div className={style.btn_call_holder}>
            <a href='#form_counseling' className={style.request_btn}>درخواست مشاوره</a>
            <Link to={"/contact/#contact_head"} className={style.call_btn}>تماس</Link>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default CallMabna;