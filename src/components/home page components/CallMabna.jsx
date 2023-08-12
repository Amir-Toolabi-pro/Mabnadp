import React from 'react';


import style from "../../styles/CallMabna.module.css"

const CallMabna = () => {
  return ( 
    <>
      <div className={style.call}>
        <div className={style.call_holder}>
          <h3>مبنا همراه شما در بازارهای مالی</h3>
          <div className={style.btn_call_holder}>
            <button className={style.request_btn}>درخواست مشاوره</button>
            <button className={style.call_btn}>تماس</button>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default CallMabna;