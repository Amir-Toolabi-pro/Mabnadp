import React, { useState } from 'react';

import { useSelector } from 'react-redux';

//css style
import css from "../../styles/AccordionAboutUs.module.css"

//icons
import { ChevronDown, List } from 'react-bootstrap-icons';
import circle from "../../images/icons8-circle-16.png"

{/* <button><ChevronDown color='#00b753' style={openOne ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button> */ }

const AccordionAboutUs = () => {

  const accordions = useSelector(state => state.accordionsReducer)
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
    console.log(i);
  }


  const accordion = accordions.map((item, i) => (
    <div className={css.the_accorion}>
      <div className={css.the_accorion_head}
        onClick={() => toggle(i)}
      >
        <h4>
          {item.title}
        </h4>
        <div className={css.the_accorion_head_icon_holder} >
          <button><ChevronDown color='#00b753' style={selected === i ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} className={css.the_accorion_head_icon} /></button>
        </div>
      </div>
      <div className={selected === i ? "the_accorion_body show_accordion_body" : "the_accorion_body"} >
        <div>

          {item.firstContent ?
            <p>
              {item.firstContent}
            </p> : null
          }
          {item.firstList ?
            <ul>
              {item.firstList.map(listItem => (
                <li>
                  <img src={circle} />
                  {listItem.list}
                </li>
              ))}
            </ul> : null
          }
          {item.secondContent ?
            <p>
              {item.secondContent}
            </p> : null
          }
          {item.secondList ?
            <ul>
              {item.secondList.map(listItem => (
                <li>
                  <img src={circle} />
                  {listItem.list}
                </li>
              ))}
            </ul> : null
          }
        </div>
      </div>
    </div>
  ))


  return (

    <>
      <section className={css.accordion_about_us}>
        <div className={css.accordion_about_us_holder} >
          <h2>
            اطلاعات تکمیلی
          </h2>
          <div className={css.accordion_about_us_holder_accordions}>
            {accordion}
          </div>
        </div>
      </section>
    </>
  );
}

export default AccordionAboutUs;