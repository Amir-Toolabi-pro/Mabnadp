import React, { useEffect, useRef, useState } from 'react';

import { Accordion, AccordionItem } from '@szhsin/react-accordion';


//css style
import css from "../../styles/AccordionAboutUs.module.css"

//icons
import { ChevronDown } from 'react-bootstrap-icons';
import circle from "../../images/icons8-circle-16.png"



const AccordionAboutUs = () => {

  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  const [openSix, setOpenSix] = useState(false);

  const handleAccordionOne = (event) => {
    setOpenOne(!openOne)
  }
  const handleAccordionTwo = (event) => {
    setOpenTwo(!openTwo)
  }
  const handleAccordionThree = (event) => {
    setOpenThree(!openThree)
  }
  const handleAccordionFour = (event) => {
    setOpenFour(!openFour)
  }
  const handleAccordionFive = (event) => {
    setOpenFive(!openFive)
  }
  const handleAccordionSix = (event) => {
    setOpenSix(!openSix)
  }

  return (
    <>
      <section className={css.accordion_about_us}>
        <div className={css.accordion_about_us_holder}>
          <h3>
            اطلاعات تکمیلی
          </h3>
          <div className={css.accordion_about_us_holder_accordions}>
            <div
              className={css.the_accorion}
            >
              <div
                class={css.the_accorion_head}
                onClick={(event) => {
                  handleAccordionOne(event)
                }}
              >
                <strong>
                  منابع اطلاعاتی
                </strong>
                <button><ChevronDown color='#00b753' style={openOne ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button>
              </div>
              <div class={css.the_accorion_body} style={openOne ? { display: "block" } : { display: "none" }}>
                <ul>
                  <li><img src={circle} alt="" />شبکه کدال - مرجع اطلاعات مالی شرکت‌های پذیرفته‌شده در بورس و فرابورس</li>
                  <li><img src={circle} alt="" />سایت شرکت مدیریت فناوری بورس اوراق بهادار - مرجع اطلاعات معاملاتی شرکت‌های پذیرفته‌شده در بورس و فرابورس</li>
                  <li><img src={circle} alt="" />روزنامه رسمی کشور جهت استخراج اطلاعاتی ثبتی شرکت‌های بورسی</li>
                  <li><img src={circle} alt="" />خبرگزاری فارس ایرنا و دنیای اقتصاد</li>
                  <li><img src={circle} alt="" />سایت فلزات بورس لندن برای تأمین اطلاعات قیمت فلزات اساسی</li>
                  <li><img src={circle} alt="" />سایت رسمی بورس کالای ایران جهت ارائه اطلاعات قیمت معاملاتی محصولات</li>
                </ul>
              </div>
            </div>
            <div
              className={css.the_accorion}
            >
              <div
                class={css.the_accorion_head}
                onClick={(event) => {
                  handleAccordionTwo(event)
                }}
              >
                <strong>
                  معیار‌های انتخاب منابع اطلاعاتی
                </strong>
                <button><ChevronDown color='#00b753' style={openTwo ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button>
              </div>
              <div class={css.the_accorion_body} style={openTwo ? { display: "block" } : { display: "none" }}>
                <p>طبق ماده ۱۱ بند ۱ دستورالعمل تأسیس و فعالیت شرکت‌های پردازش اطلاعات مالی به شرح زیر:</p>
                <ul>
                  <li>
                    <img src={circle} alt="" />
                    «معیارهایی که پردازشگر اطلاعات مالی در انتخاب منابع اطلاعاتی خود در نظر می‌گیرد به‌طوری که منابع اطلاعاتی انتخاب‌شده براساس این معیارها، از نظر پردازشگر اطلاعات مالی، موثق باشند.»
                  </li>
                </ul>
                <p>شرکت پردازش اطلاعات مالی مبنا از منابعی جهت گردآوری اطلاعات استفاده می‌کند که دارای ویژگی‌های زیر باشند:</p>
                <ul>
                  <li><img src={circle} alt="" />منبع موردنظر تحت نظارت یکی از سازمان‌های معتبر دولتی یا بین‌المللی باشد.</li>
                  <li><img src={circle} alt="" />منبع موردنظر تحت عنوان خبرگزاری، روزنامه یا نشریه زیر نظر وزارت فرهنگ و ارشاد اسلامی فعالیت کند.</li>
                  <li><img src={circle} alt="" />اطلاعات در منبع موردنظر به‌صورت مرتب و بدون وقفه منتشر گردد.</li>
                  <li><img src={circle} alt="" />در صورت فروش خدمات سایت فروشنده دارای نشان نماد الکترونیکی باشد یا از طریق مراجع دیگر تأیید شده‌باشد.</li>
                  <li><img src={circle} alt="" />امکان دریافت اطلاعات از طریق وب‌سرویس وجود داشته‌باشد.</li>
                  <li><img src={circle} alt="" />امکان دریافت اطلاعات در قالب‌هایRSS/XML/CSV وجود داشته‌باشد.</li>
                </ul>
              </div>
            </div>
            <div
              className={css.the_accorion}
            >
              <div
                class={css.the_accorion_head}
                onClick={(event) => {
                  handleAccordionThree(event)
                }}
              >
                <strong>
                  رویه جمع آوری، ثبت و کنترل اطلاعات
                </strong>
                <button><ChevronDown color='#00b753' style={openThree ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button>
              </div>
              <div class={css.the_accorion_body} style={openThree ? { display: "block" } : { display: "none" }}>
                <p>اطلاعات مورد استفاده در سرویس‌ها و نرم‌افزارهای شرکت پردازش اطلاعات مالی مبنا به دو صورت خودکار و دستی جمع‌آوری و در پایگاه داده شرکت ثبت می‌شوند. این اطلاعات سپس در دو مرحله مجزا به‌صورت خودکار و دستی توسط کارشناسان کنترل و بازبینی می‌شوند.</p>
              </div>
            </div>
            <div
              className={css.the_accorion}
            >
              <div
                class={css.the_accorion_head}
                onClick={(event) => {
                  handleAccordionFour(event)
                }}
              >
                <strong>
                  رویه‌های به کار رفته برای حصول اطمینان از صحت استخراج اطلاعات
                </strong>
                <button><ChevronDown color='#00b753' style={openFour ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button>
              </div>
              <div class={css.the_accorion_body} style={openFour ? { display: "block" } : { display: "none" }}>
                <p>طبق ماده ۱۱ بند ۲ دستورالعمل تأسیس و فعالیت شرکت‌های پردازش اطلاعات مالی به شرح زیر:</p>
                <ul>
                  <li>
                    <img src={circle} alt="" />
                    «رویه‌هایی که پردازشگر اطلاعات مالی به‌کار می‌گیرد تا مطمئن شود، اطلاعات مورداستفاده برای ارائه به مشتریان، صرفاً از منابع اطلاعاتی که براساس معیارهای بند ۱ موثق تشخیص داده شده‌اند، جمع‌آوری می‌شوند.»
                  </li>
                </ul>
                <p>شرکت پردازش اطلاعات مالی مبنا با روش‌های زیر صحت اطلاعات دریافتی را کنترل می‌کند:</p>
                <ul>
                  <li><img src={circle} alt="" />بررسی هفتگی آدرس منابع و بانک‌های اطلاعاتی جهت حصول اطمینان از برقرار بودن سرویس.</li>
                  <li><img src={circle} alt="" />کنترل‌های خودکار به‌منظور بررسی در دسترس بودن سرویس‌ها از طریقPING مستمر سرویس‌های مذکور</li>
                  <li><img src={circle} alt="" />چک کردن اطلاعات دریافتی بر مبنای دامنه مجاز جهت کنترل اشتباهات با دامنه تغییر بالا</li>
                  <li><img src={circle} alt="" />کنترل روابط ریاضی اطلاعات دریافت‌شده به‌صورت خودکار (صورت‌های مالی)</li>
                </ul>
              </div>
            </div>
            <div
              className={css.the_accorion}
            >
              <div
                class={css.the_accorion_head}
                onClick={(event) => {
                  handleAccordionFive(event)
                }}
              >
                <strong>
                  رویه‌های به کار رفته برای حصول اطمینان از صحت پردازش اطلاعات
                </strong>
                <button><ChevronDown color='#00b753' style={openFive ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button>
              </div>
              <div class={css.the_accorion_body} style={openFive ? { display: "block" } : { display: "none" }}>
                <p>شرکت پردازش اطلاعات مالی مبنا با روش‌های زیر صحت اطلاعات پردازش‌شده را کنترل می‌کند:</p>
                <ul>
                  <li><img src={circle} alt="" />پایش روزانه اطلاعات پردازش‌شده به‌صورت خودکار براساس روابط و فرمول‌های ریاضی تعریف‌شده.</li>
                  <li><img src={circle} alt="" />تعیین درصد انحراف مجاز برای فرمول‌های پردازش‌شده و کنترل موارد خارج از دامنه مجاز به‌صورت هفتگی.</li>
                  <li><img src={circle} alt="" />بررسی حداقل ۵ درصد از اطلاعات پردازش‌شده به‌صورت دستی در پایان هر هفته.</li>
                  <li><img src={circle} alt="" />تعیین تعداد دفعات مجاز برای وقوع انحراف و ثبت رخدادها (درصورتی‌که از تعداد مجاز گذر کند، فرمول‌ها و روابط ریاضی مجدداً بررسی و اصلاحات لازم اعمال می‌شود.)</li>
                </ul>
              </div>
            </div>
            <div
              className={css.the_accorion}
            >
              <div
                class={css.the_accorion_head}
                onClick={(event) => {
                  handleAccordionSix(event)
                }}
              >
                <strong>
                  تضاد منافع
                </strong>
                <button><ChevronDown color='#00b753' style={openSix ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button>
              </div>
              <div class={css.the_accorion_body} style={openSix ? { display: "block" } : { display: "none" }}>
                <p>طبق ماده ۲۳ بندهای ۶، ۷، ۸ دستورالعمل تأسیس و فعالیت شرکت‌های پردازش اطلاعات مالی به شرح زیر:</p>
                <ul>
                  <li><img src={circle} alt="" />«تضاد منافعی که ممکن است به دلیل ارائه خدمات مختلف بین منافع پردازشگر اطلاعات مالی یا اشخاص وابسته و کارکنان وی با مشتریان به‌وجود آید و راه‌های کنترل و حل‌وفصل این تضاد منافع.»</li>
                  <li><img src={circle} alt="" />«هرگونه رابطه تجاری اساسی که پردازشگر اطلاعات مالی با دیگران دارد و با خدمات پردازش اطلاعات مالی و سایر خدماتی که پردازشگر اطلاعات مالی ارائه می‌دهد در تضاد است.»</li>
                  <li><img src={circle} alt="" />«هرگونه منافعی که ارائه خدمات پردازش اطلاعات مالی برای اشخاص ثالث به‌استثناء کارکنان شرکت پردازش اطلاعات مالی، به‌وجود می‌آورد.»</li>
                </ul>
                <p>درحال‌حاضر موارد ذکرشده بند ۶، ۷، ۸ مابین شرکت پردازش اطلاعات مالی مبنا و مشتریان یا اشخاص ثالث وجود ندارد. درصورتی‌که هریک از موارد بالا به‌وجود بیاید موضوع بلافاصله در سایت شرکت افشاء و اطلاع‌رسانی خواهد شد. درصورت‌وجود تضاد منافع، اولویت و حق با مشتری خواهد بود.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccordionAboutUs;