import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


function Subscribers() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className="subscribe section">
      <div className="sectionContainer container">
        <h2 data-aos="fade-up" data-aos-duration="2500">Subscribe Newsletters & get Latest News</h2>
        <div data-aos="fade-down" data-aos-duration="2500" className="inputDiv flex">
          <input type="email" placeholder="Enter your Email address"/>
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers
