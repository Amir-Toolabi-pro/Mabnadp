import React from 'react';

import style from "../../styles/MabnaHistory.module.css"



const MabnaHistory = () => {
  return (
    <>
      <div className={style.history}>
        <div className={style.history_holder}>
          <div className={style.history_head}>
            <h3>ما در این بازار قدیمی‌ترینیم</h3>
            <p>نزدیک به سه ‌دهه روی لبه فناوری</p>
          </div>
          <div className={style.history_list}>
            <div className={style.history_list_item}>
              <p className={style.strong}>۳۳+</p>
              <p>سال اطلاعات بازار سرمایه</p>
            </div>
            <div className={style.history_list_item}>
              <p className={style.strong}>۷۰۰+</p>
              <p>مشتری فعال حقوقی</p>
            </div>
            <div className={style.history_list_item}>
              <p className={style.strong}>۲,۰۰۰,۰۰۰+</p>
              <p>کاربر حقیقی</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MabnaHistory;