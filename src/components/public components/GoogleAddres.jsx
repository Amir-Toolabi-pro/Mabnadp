import React from 'react';

import style from "../../styles/GoogleAddres.module.css"

const GoogleAddres = () => {
  return (
    <>

      <div className={style.google_addres} >
        <div className={style.location_icon} >
          <img src="https://mabnadp.com/_next/static/media/location-place-icon.915a10c0.svg" alt="" />
        </div>
        <p>آدرس: تهران، بلوار آفریقا، نرسیده به تقاطع میرداماد، کوچه عمدی، پلاک ۱۵</p>
        <p>کد پستی: ۱۵۱۸۹۶۷۷۱۱</p>
        <div className={style.google_addres_map} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5699353094183!2d51.41619747496979!3d35.76137392556871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0755c8213941%3A0x351160abc49d28a0!2sMabna%20DP!5e0!3m2!1sen!2s!4v1691424560084!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
}

export default GoogleAddres;