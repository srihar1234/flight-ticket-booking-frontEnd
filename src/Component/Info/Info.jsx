import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs"
import { RxCalendar } from "react-icons/rx"


import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Info() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className="info section">
      <div className="infoContainer container">

        <div className="titleDiv flex">
          <h2 data-aos="fade-down" data-aos-duration="2500">Travel to make memories all around the world</h2>
          <button className="btn">
            View All
          </button>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="cardsDiv grid">

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon"/>
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also book your tickets through phone</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsShieldCheck className="icon"/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>Check local tourism centers at your destinations</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsBookmarkCheck className="icon"/>
            </div>
            <span className="cardTitle">Save Time</span>
            <p>Non-delayable flight airline</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Info
