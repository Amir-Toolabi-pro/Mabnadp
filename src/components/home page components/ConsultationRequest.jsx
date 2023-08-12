import React from 'react';

import style from "../../styles/ConsultationRequest.module.css"


const ConsultationRequest = () => {
  return ( 
    <>
      <div className={style.consultation_request}>
        <div className={style.head_para}>
          <h2>پردازش اطلاعات مالی مبنا</h2>
          <p>ارائه‌دهنده ابزارهای تحلیلی، پردازشی و مدیریتی در بازارهای مالی</p>
        </div>
        <div className={style.btn_holder}>
          <button>درخواست مشاوره</button>
        </div>
      </div>
    </>
   );
}
 
export default ConsultationRequest;