import lounge from "../../Assets/lounge.jpg"


import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Lounge() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">

        <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
          <img src={lounge} />
        </div>

        <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

            <div className="singleGrid">
              <span className="gridTitle">Help through airport</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Chauffeur Services</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Lounge
