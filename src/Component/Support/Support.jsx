import grid from "../../Assets/grid.jpg";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


function Support() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div data-aos="fade-down" data-aos-duration="2500" className="titleDiv">
          <small>Travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans,See what to expect along the journey</p>
        </div>

        <div className="infoDiv grid">

          <div data-aos="fade-right" data-aos-duration="2500"  className="textDiv grid">

            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans,See what to expect along the journey</p>
            </div>

            <div className="singleInfo">
              <span className="number">02</span>
              <h4>Multi risk travel insurance</h4>
              <p>Find help with booking and travel plans,See what to expect along the journey</p>
            </div>

            <div className="singleInfo">
              <span className="number">03</span>
              <h4>Chauffeur services</h4>
              <p>Find help with booking and travel plans,See what to expect along the journey</p>
            </div>

          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="imageDiv">
            <img src={grid}/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Support
