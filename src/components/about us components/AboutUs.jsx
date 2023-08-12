import React, { useState } from 'react';


//style
import style from "../../styles/AboutUs.module.css"

//components
import HeaderComponent from '../public components/Header';
import SwiperSlideShow from '../public components/SwiperSlideShow';
import Footer from '../public components/Footer';
import SwipHolders from './SwipHolders';
import AccordionAboutUs from './AccordionAboutUs';

//images
import icon from "../../images/icons8-top-32.png"
import value1 from "../../images/mabna-img1.6470c6e7.jpg"
import value2 from "../../images/mabna-img3.fa625e1f.jpg"
import value3 from "../../images/mabna-img2.88cc0a95.jpg"

const AboutUs = () => {

  const [getScroll, setScroll] = useState(false)

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 400) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  });

  const getholders = [
    {
      img: "https://mabnadp.com/_next/static/media/rajabi.2f1abcba.jpg",
      personName: "مهرداد رجبی",
      personJob: "مدیر اجرایی",
      personTalent: "کارشناسی کامپیوتر | ۳۱/۵ درصد سهامداری",
      talentList: [
        { listone: "شرکت مشاوران و برنامه‌نویسان نوین ایده - مدیر عامل" },
        { listone: "شرکت پارس پرتفولیو - مدیر اجرایی" },
        { listone: "شرکت دنا سهم - مدیر استقرار و واحد پشتیبانی" },
        { listone: "شرکت سرمایه‌گذاری صبا جهاد - مشاور سرمایه‌گذاری" },
        { listone: "شرکت پارس فرا اندیشان - مدرس دوره‌های تحلیل تکنیکی" },
        { listone: "شرکت پارس پویا سهام - مشاور سرمایه‌گذاری و تحلیل‌گر" },
      ]
    },
    {
      img: "https://mabnadp.com/_next/static/media/kiaee.f376ecdf.jpg",
      personName: "حسین کیایی",
      perosnJob: "مدیر شبکه و سخت افزار",
      personTalent: "کارشناسی ریاضی کاربردی | ۰/۵ درصد سهامداری",
      talentList: [
        { listone: "شرکت پارس پرتفولیو - مدیر واحد پشتیبانی" },
        { listone: "شرکت به‌اندیش مترو - مدیر شبکه و سخت‌افزار" },
      ]
    },
    {
      img: "https://mabnadp.com/_next/static/media/roham.93d1f4e4.jpg",
      personName: "رهام یاوری",
      personJob: "مدیرعامل و عضو هیئت مدیره",
      personTalent: "کارشناسی ارشد مدیریت مالی | ۰/۵ درصد سهامداری",
      talentList: [
        { listone: "پردازش اطلاعات مالی مبنا - مدیر واحد تحقیق‌وتوسعه" },
        { listone: "شرکت نگین سبز برنا - مدیر مالی" },
      ]
    },
    {
      img: "https://mabnadp.com/_next/static/media/farahabadi.472fe024.jpg",
      personName: "مهرداد فرح آبادی",
      personJob: "عضو هیئت مدیره",
      personTalent: "دکتری مدیریت مالی | ۰/۵ درصد سهامداری",
      talentList: [
        { listone: "شرکت رتبه‌بندی برهان - مدیر خدمات رتبه‌بندی" },
        { listone: "سازمان بورس و اوراق بهادار - رئیس بازرسی نهادهای مالی" },
        { listone: "بانک پارسیان - امور شرکت‌ها و مجامع" },
        { listone: "مؤسسه حسابرسی بهراد مشار - حسابرس" },
      ]
    },
    {
      img: "https://mabnadp.com/_next/static/media/kian.ee619049.jpg",
      personName: "گروه مالی کیان(سهامی عام)",
      personTalent: "۶۶/۸ درصد سهامداری",
    },
    {
      img: "https://mabnadp.com/_next/static/media/parto-kian.7798db5a.png",
      personName: "مشاور سرمایه گذاری پرتو آفتاب کیان",
      personTalent: "۰/۲ درصد سهامداری",
    },
  ]


  const getLicensingAgents = [
    {
      img: "https://mabnadp.com/_next/static/media/maleki.b4342a9d.jpg",
      personName: "محسن ملکی",
      personJob: "حسابدار",
      personTalent: "کارشناسی حسابداری",
      license: "نماینده مجوز"
    },
    {
      img: "https://mabnadp.com/_next/static/media/kiaee.f376ecdf.jpg",
      personName: "حسین کیایی",
      personJob: "مدیر شبکه و سخت‌افزار",
      personTalent: "کارشناسی ریاضی کاربردی|۰/۵ درصد سهامداری",
    },
    {
      img: "https://mabnadp.com/_next/static/media/mohajer.241a3ae7.jpg",
      personName: "محمد آخوندزاده مهاجر",
      personJob: "مدیر ارشد توسعه نرم‌افزار",
      personTalent: "کارشناسی مهندسی نرم‌افزار",
      license: "نماینده مجوز"
    },
    {
      img: "https://mabnadp.com/_next/static/media/ashkan.7ba071f2.jpg",
      personName: "اشکان نورزاده",
      personJob: "مدیر ارشد فناوری",
      personTalent: "کارشناسی مهندسی نرم‌افزار",
    },
    {
      img: "https://mabnadp.com/_next/static/media/rajabi.2f1abcba.jpg",
      personName: "مهرداد رجبی",
      personJob: "مدیر اجرایی",
      personTalent: "کارشناسی کامپیوتر|۳۵ درصد سهامداری",
    },
    {
      img: "https://mabnadp.com/_next/static/media/roham.93d1f4e4.jpg",
      personName: "رهام یاوری",
      personJob: "مدیرعامل و عضو هیئت مدیره",
      personTalent: "کارشناسی ارشد مدیریت مالی|۰/۵ درصد سهامداری",
    },
    {
      img: "https://mabnadp.com/_next/static/media/bekran.81da69ee.jpg",
      personName: "فرید بکران",
      personJob: "کارشناس توسعه نرم افزار",
      personTalent: "کارشناسی علوم کامپیوتر",
    },
    {
      img: "https://mabnadp.com/_next/static/media/samira.1ccc3825.jpg",
      personName: "سمیرا موسوی",
      personJob: "کارشناس مسئول بازبینی اطلاعات",
      personTalent: "کارشناسی حسابداری",
      license: "نماینده مجوز"
    },
    {
      img: "https://mabnadp.com/_next/static/media/parisa.2117393d.jpg",
      personName: "فاطمه شاه‌بابا",
      personJob: "متصدی جمع‌آوری اطلاعات",
      personTalent: "کارشناسی علوم اقتصادی",
      license: "نماینده مجوز"
    },
    {
      img: "https://mabnadp.com/_next/static/media/parastoo_moosavi.bc5b9b45.jpg",
      personName: "پرستو موسوی",
      personJob: "بایگان",
      personTalent: "کارشناسی روانشناسی بالینی",
      license: "نماینده مجوز"
    },
  ]




  return (
    <>
      <div className={style.about_container}>
        <HeaderComponent />
        <section className={style.about_head} >
          <div className={style.about_head_para} >
            <h3>ما که هستیم؟</h3>
            <p>مبنا جزء اولین شرکت‌های پردازش اطلاعات مالی در ایران است. ما در مبنا از سال ۱۳۷۶ مشغول فعالیت هستیم و همواره یکی از شرکت‌های پیشرو در تولید محصولات مرتبط با بازارهای مالی بوده‌ایم.</p>
            <p>شرکت پردازش اطلاعات مالی مبنا (سهامی خاص) دارای مجوز فعالیت پردازش اطلاعات مالی به شماره ۱۱۱۰۵ از سازمان بورس اوراق بهادار در تاریخ ۱۳۹۱/۰۸/۱۶ با شماره ۴۳۱۱۹۷ و سرمایه 25 میلیارد ریال نزد مرجع ثبت شرکت‌ها در استان تهران به ثبت رسیده است.</p>
          </div>
          <div className={style.about_head_img_holder}>
            <div><img src="https://mabnadp.com/_next/static/media/header-img1.c0e38980.png" alt="" /></div>
            <div><img src="https://mabnadp.com/_next/static/media/header-img.3acdc852.png" alt="" /></div>
          </div>
        </section>
        <section className={style.about_direction_mabna}>
          <h3>چه &nbsp; مسیری &nbsp; را &nbsp; طی &nbsp; کرده‌ایم؟</h3>
          <p>ایده اولیه تأسیس مبنا از شناسایی یک نقطه‌ضعف بزرگ در بازار سرمایه به‌وجود آمد؛ فقدان ابزارهایی برای تجزیه و تحلیل اطلاعات مالی. ابزارهایی که به فعالین بازار برای تصمیم‌گیری‌های سریع‌تر و بهینه‌تر کمک کند.</p>
          <p>برای رسیدن به نقطه ابتدایی باید سال‌ها به عقب برگردیم. در آن زمان مؤسسین شرکت، برای اینکه بتوانند نیاز تحلیلی و اطلاعاتی خودشان در بازار را برطرف کنند، نرم‌افزاری به‌نام ره‌آورد طراحی کردند. از ۲۵ سال پیش صحبت می‌کنیم. ره‌آوردِ اولیه تحت سیستم عامل DOS‌ طراحی شد. بعدها این نرم‌افزار گسترده‌تر شد. تاجایی‌که امروز سایت ره‌آورد۳۶۵ یکی از مراجع اصلی تحلیل و اطلاعات بازارهای مالی است.
            اما محصولات مبنا فقط به ره‌آورد خلاصه نمی‌شود. حاصل سال‌ها تلاش و فعالیت در بازارهای مالی، ۹ نرم‌افزار بوده‌است که نیاز تقریباً همه اهالی بازار، اعم از حقیقی و حقوقی، را پاسخ می‌دهد.</p>
          <div className={style.strong}>
            <strong>در این سال‌ها همواره اصلی‌ترین هدف مبنا تولید نرم‌افزارهایی کارآمد برای رفع نیاز فعالین بازار سرمایه بوده‌است.</strong>
          </div>
          <div className={style.about_direction_mabna_img_holder}>
            <img className={style.child1} src="https://mabnadp.com/_next/static/media/infography.c68c5dc2.jpg" alt="" />
            <img className={style.child2} src="https://mabnadp.com/_next/static/media/infography-lg.f42deae9.jpg" alt="" />
            <img className={style.child3} src="https://mabnadp.com/_next/static/media/infography-md.522cc30c.jpg" alt="" />
            <img className={style.child4} src="https://mabnadp.com/_next/static/media/infography-sm.4dbbe933.jpg" alt="" />
          </div>
        </section>
        <section className={style.about_mabna_value}>
          <h3>
            ارزش های مبنا
          </h3>
          <div className={style.about_mabna_value_holder}>
            <div className={style.about_mabna_value_holder_img} >
              <img className={style.img_value1} src={value1} alt="" />
              <img className={style.img_value2} src={value2} alt="" />
              <img className={style.img_value3} src={value3} alt="" />
            </div>
            <div className={style.about_mabna_value_holder_img_responsive}>
              <div>
                <img src={value1} alt="" />
                <img src={value3} alt="" />
              </div>
              <img className={style.img_value_responsive} src={value2} alt="" />
            </div>
            <div className={style.about_mabna_value_holder_para} >
              <div className={style.responsibility}>
                <h4>مسئولیت پذیری</h4>
                <p>
                  وقتی کاری به ما محول می‌شود، خود را متعهد به انجامش می‌دانیم. حتی اگر موانع زیادی بر سرِ انجام آن وجود داشته باشد. مسئولیت خطاهایمان را می‌پذیریم و می‌کوشیم آنها را اصلاح کنیم.
                </p>
              </div>
              <div className={style.learning}>
                <h4>روحیه یادگیری</h4>
                <p>
                  یادگیری برای هیچ‌کس، هیچ‌وقت تمام نمی‌شود. ما در مبنا همیشه در حال یادگیری هستیم. از کشف علوم تازه ترسی نداریم،‌ حتی اگر این علوم دانسته‌های قبلیمان را زیر سؤال ببرد.
                </p>
              </div>
              <div className={style.discipline}>
                <h4>نظم</h4>
                <p>
                  چابُک کار کردن و امروزی بودن را مترادف بی‌نظمی نمی‌دانیم. معتقدیم نظم است که راندمان کار تیمی را به حداکثر می‌رساند.
                </p>
              </div>
              <div className={style.cooperation}>
                <h4>همکاری تیمی</h4>
                <p>
                  اهداف تیمی را در جایگاهی به‌مراتب بالاتر از اهداف شخصی قرار می‌دهیم. می‌دانیم که موفقیت‌های شخصی هم در سایه یک تیم موفق اتفاق می‌افتند. برای کار تیمی وقت می‌گذاریم و اگر نیاز باشد تا به کسی چیزی آموزش بدهیم، این کار را به‌نحواحسن انجام می‌دهیم.
                </p>
              </div>
              <div className={style.three_last_child_value_holder}>
                <div className={style.honesty}>
                  <h4>صداقت</h4>
                  <p>
                    شفافیت، صداقت و راستگویی را نه‌تنها یک وظیفه اخلاقی و اجتماعی، بلکه مایه پیشرفت و موفقیت می‌دانیم.
                  </p>
                </div>
                <div className={style.correct}>
                  <h4>درست انجام دادن</h4>
                  <p>
                    انتخاب ما «درست انجام دادن» کار است. حتی اگر هزاران بار سخت‌تر از اهمال‌کاری و سهل‌انگاری در کارها باشد.
                  </p>
                </div>
                <div className={style.simplicity}>
                  <h4>سادگی</h4>
                  <p>
                    تاجایی‌که بتوانیم پیچیدگی‌ها را کاهش می‌دهیم و کارها را ساده‌تر می‌کنیم. ساده‌تر؛ و نه راحت‌تر. بهترین راه‌حل‌ها همیشه ساده‌ترین آنها هستند و نه لزوماً راحت‌ترینشان.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.about_mabna_days} >
          <h3>امروزِ مبنا</h3>
          <div className={style.about_mabna_days_card_holder}>
            <div>
              <strong>۳۳+</strong>
              <p>سال اطلاعات بازار سرمایه</p>
            </div>
            <div>
              <strong>۷۰۰+</strong>
              <p>مشتری حقوقی</p>
            </div>
            <div>
              <strong>۲,۰۰۰,۰۰۰+</strong>
              <p>میلیون کابر حقیقی</p>
            </div>
          </div>
        </section>
        <SwipHolders getholders={getholders} />
        <SwipHolders getlicense={getLicensingAgents} />
        <AccordionAboutUs />
        <SwiperSlideShow />
        <Footer />
        {getScroll ?
          <div className={style.top_btn}
            style={getScroll ? { animation: "example1 .4s ease" } : { animation: "example2 .2s ease" }}
            onClick={() => {
              document.body.scrollTop = 0
              document.documentElement.scrollTop = 0
            }}
          >
            <img src={icon} alt="" />
          </div> :
          null
        }
      </div>
    </>
  );
}

export default AboutUs;