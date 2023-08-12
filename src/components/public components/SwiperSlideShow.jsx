import React from 'react';


//style
import style from "../../styles/SwiperSlideShow.module.css"
// Import Swiper styles
// import 'swiper/css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation, Autoplay]);
SwiperCore.use([Autoplay]);
const SwiperSlideShow = () => {

  return (
    <>
      <div className={style.slidshow_content}>
        <h3>سه دهه همراهی با بزرگان</h3>
        <div className={style.slid_holder}>
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 0 }}
            speed={3000}
            breakpoints={{
              950: {
                width: 950,
                slidesPerView: 6,
              },
              700: {
                width: 700,
                slidesPerView: 5,
              },
              600: {
                width: 600,
                slidesPerView: 4,
              },
              400: {
                width: 400,
                slidesPerView: 3,
              },

              300: {
                width: 300,
                slidesPerView: 2.5,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/PetroshimiKhaligFars.5f662c38.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/KargozariBankMeli.c768a6f8.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BankDey.fbdc2315.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BankGardeshgari.52f5cd3f.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/ArmanEghtesad.6804efb4.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/AminSahin.94f14201.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/SabadgardanHadaf.dc6ab05d.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/NoavaranAmin.2e239612.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BazarganiMeayar.00400e6d.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/kargozarriBazarganiHadaf.a29a0d26.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/KargozariBankAnsar.347aa645.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BankMehr.55933edb.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/Bahman.201e4faf.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/AtiyeParis.e4cbbc1e.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/AtiyeMaskan.98263f51.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/Karizma.e3726039.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/TaminSarmayeKardan.50f50512.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/KargozariBankMeli.c768a6f8.svg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SwiperSlideShow;