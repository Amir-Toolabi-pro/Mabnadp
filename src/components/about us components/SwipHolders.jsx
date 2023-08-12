import React, { useState } from 'react';

//style
import style from "../../styles/SwipHolders.module.css"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import circle from "../../images/icons8-circle-16.png"

//
// import 'swiper/css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/controller/controller.min.css"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow, Controller, EffectFade } from 'swiper/core';
SwiperCore.use([EffectCoverflow, Navigation, Controller, EffectFade]);

//bootstrap

//img

const SwipHolders = ({ getholders, getlicense }) => {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const swiperKeys = {
    slidesPerView: 5,
    speed: 500,
    grabCursor: true,
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'coverflow',
    navigation: {
      nextEl: ".thumb_btn_next",
      prevEl: ".thumb_btn_prev",
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      modifier: 4,
      depth: 180,
      slideShadows: true
    },
    controller: { control: controlledSwiper },
  }

  // const resize = window.addEventListener('resize', (event) => {
  //   setSize(document.body.offsetWidth);
  //   if (getSize <= 770) {
  //     swiperKeys.coverflowEffect.modifier = 2
  //   }
  // })



  return (
    <>
      <section className={style.swipholders_container} >
        <h3>{getholders ? "سهامداران و اعضای هیئت مدیره" : "تیم مبنا و نمایندگان مجوز"}</h3>
        <div className={style.swipholders_container_holder} >
          <Swiper
            {...swiperKeys}
            className="myswiper"
          >
            {getholders ?
              getholders.map((person) =>
                person.img ?
                  <SwiperSlide className="myswiper_slide" >
                    <div className="swipholders_container_holder_card">
                      <img src={person.img} alt="" />
                    </div>
                  </SwiperSlide>
                  : null
              ) :
              getlicense.map((person) => 
                person.img ?
                  <SwiperSlide className="myswiper_slide" >
                    <div className="swipholders_container_holder_card">
                      <img src={person.img} alt="" />
                    </div>
                  </SwiperSlide>
                  :
                  null
              )
            }

          </Swiper>
          <div className="thumb">
            <Swiper
              slidesPerView={1}
              grabCursor={false}
              spaceBetween={0}
              centeredSlides={true}
              effect='fade'
              fadeEffect={{
                crossFade: true
              }}
              allowTouchMove={false}
              modules={[Controller]}
              onSwiper={setControlledSwiper}
              draggable={false}
              className="thumbswiper"
            >
              {getholders ? getholders.map((person) => {
                return (
                  <SwiperSlide>
                    <p className="SwipHolders_name" >{person.personName}</p>
                    {person.personJob ? <p className="SwipHolders_job" >{person.personJob}</p> : null}
                    {person.personTalent ? <p className="SwipHolders_talent">{person.personTalent}</p> : null}
                    {person.talentList ?
                      <ul className="SwipHolders_talent_list">
                        {person.talentList.map((list) => {
                          return (
                            <li>
                              <img src={circle} alt="" />{list.listone}
                            </li>
                          )
                        })}
                      </ul> :
                      null
                    }
                  </SwiperSlide>
                )
              }) :
                getlicense.map((person) => {
                  return (
                    <SwiperSlide>
                      <p className="SwipHolders_name" >{person.personName}</p>
                      {person.personJob ? <p className="SwipHolders_job" >{person.personJob}</p> : null}
                      {person.personTalent ? <p className="SwipHolders_talent">{person.personTalent}</p> : null}
                      {person.license ? <p className="SwipHolders_license">{person.license}</p> : null}
                      {person.talentList ?
                        <ul className="SwipHolders_talent_list">
                          {person.talentList.map((list) => {
                            return (
                              <li>
                                <img src={circle} alt="" />{list.listone}
                              </li>
                            )
                          })}
                        </ul> :
                        null
                      }
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <button className="thumb_btn_prev">
              <ChevronRight className="prev_icon" />
            </button>
            <button className="thumb_btn_next">
              <ChevronLeft className="next_icon" />
            </button>
          </div>
        </div>
      </section >
    </>
  );
}

export default SwipHolders;