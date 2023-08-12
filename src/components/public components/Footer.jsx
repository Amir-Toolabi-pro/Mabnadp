import React from 'react';


import style from "../../styles/Footer.module.css"

import enamad from "../../images/enamad.142cd813.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.head_footer}>
          <a href="#"><img src="https://mabnadp.com/_next/static/media/mabna-logo-104-40.5653ee79.svg" alt="" /></a>
        </div>
        <div className={style.footer_body}>
          <div className={style.lists_footer}>
            <div className={style.products_footer}>
              <h4>محصولات</h4>
              <ul>
                <li><a href="#">ره آورد</a></li>
                <li><a href="#">یکان</a></li>
                <li><a href="#">سبد یار</a></li>
                <li><a href="#">ایمکس</a></li>
                <li><a href="#">داهی</a></li>
                <li><a href="#">ره آورد آکادمی</a></li>
                <li><a href="#">وسام</a></li>
                <li><a href="#">ره آورد نوین</a></li>
                <li><a href="#">سیگما</a></li>
              </ul>
            </div>
            <div className={style.mabna_footer}>
              <h4>مبنا</h4>
              <ul>
                <li><a href="#">درباره مبنا</a></li>
                <li><a href="#">تماس با ما</a></li>
                <li><a href="#">فرصت های شغلی</a></li>
              </ul>
            </div>
          </div>
          <div className={style.contact_footer}>
            <div className={style.contact_us_footer}>
              <h4>تماس با ما</h4>
              <ul>
                <li><a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49829 9.7489L10.425 11.5533C11.3907 12.1487 12.6096 12.1487 13.5754 11.5533L16.502 9.7489" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><rect x="2.99634" y="4.99689" width="18.0075" height="14.0058" rx="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></rect></svg> info@mabnadp.com</a></li>
                <li><a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8559 13.1438C9.6859 11.9738 8.8039 10.6638 8.2179 9.33481C8.0939 9.05381 8.1669 8.72481 8.3839 8.50781L9.2029 7.68981C9.8739 7.01881 9.8739 6.06981 9.2879 5.48381L8.1139 4.30981C7.3329 3.52881 6.0669 3.52881 5.2859 4.30981L4.6339 4.96181C3.8929 5.70281 3.5839 6.77181 3.7839 7.83181C4.2779 10.4448 5.7959 13.3058 8.2449 15.7548C10.6939 18.2038 13.5549 19.7218 16.1679 20.2158C17.2279 20.4158 18.2969 20.1068 19.0379 19.3658L19.6889 18.7148C20.4699 17.9338 20.4699 16.6678 19.6889 15.8868L18.5159 14.7138C17.9299 14.1278 16.9799 14.1278 16.3949 14.7138L15.4919 15.6178C15.2749 15.8348 14.9459 15.9078 14.6649 15.7838C13.3359 15.1968 12.0259 14.3138 10.8559 13.1438Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ۰۲۱-۸۸۷۴۹۸۲۴</a></li>
                <li className={style.contact_us_footer_logo}>
                  <a href=""><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.499817" width="39" height="39" rx="7.5" fill="#00203B"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 10.9998H24.504C26.987 10.9998 29 13.0128 29 15.4958V24.5048C29 26.9868 26.987 28.9998 24.504 28.9998H15.496C13.013 28.9998 11 26.9868 11 24.5038V15.4998C11 13.0148 13.015 10.9998 15.5 10.9998V10.9998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1201 19.0998V24.4998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.719 24.4998V21.3498C19.719 20.1068 20.726 19.0998 21.969 19.0998V19.0998C23.212 19.0998 24.219 20.1068 24.219 21.3498V24.4998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1179 15.8378C15.9939 15.8378 15.8929 15.9388 15.8939 16.0628C15.8939 16.1868 15.9949 16.2878 16.1189 16.2878C16.2429 16.2878 16.3439 16.1868 16.3439 16.0628C16.3439 15.9378 16.2429 15.8378 16.1179 15.8378" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><rect x="0.5" y="0.499817" width="39" height="39" rx="7.5" stroke="currentColor"></rect></svg></a>
                  <a href=""><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.499817" width="39" height="39" rx="7.5" fill="#00203B"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M15.496 10.9998H24.505C26.987 10.9998 29 13.0118 29 15.4958V24.5048C29 26.9868 26.988 28.9998 24.504 28.9998H15.496C13.013 28.9998 11 26.9878 11 24.5038V15.4958C11 13.0128 13.012 10.9998 15.496 10.9998V10.9998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.949 14.7128C24.763 14.7138 24.612 14.8648 24.612 15.0508C24.612 15.2368 24.764 15.3878 24.95 15.3878C25.136 15.3878 25.287 15.2368 25.287 15.0508C25.288 14.8638 25.136 14.7128 24.949 14.7128" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.5455 17.4542C23.9514 18.8601 23.9514 21.1395 22.5455 22.5454C21.1396 23.9513 18.8602 23.9513 17.4543 22.5454C16.0484 21.1395 16.0484 18.8601 17.4543 17.4542C18.8602 16.0483 21.1396 16.0483 22.5455 17.4542" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><rect x="0.5" y="0.499817" width="39" height="39" rx="7.5" stroke="currentColor"></rect></svg></a>
                </li>
              </ul>
            </div>
            <div className={style.simbol_footer}>
              <h4>نماد ها</h4>
              <div className={style.simbol_footer_holer}>
                  <a href="#"><img src={enamad} alt="" /></a>    
              </div>
            </div>
          </div>
        </div>
        <div className={style.foot_footer}>
          <p>تمامی حقوق برای شرکت پردازش اطلاعات مالی مبنا محفوظ است.</p>
          <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> تهران، میدان آرژانتین، خیابان الوند، پلاک ۱۹، طبقه دوم، کد پستی: ۱۵۱۴۹۴۴۸۱۹</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;