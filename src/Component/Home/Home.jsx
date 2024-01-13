import { useEffect } from "react";
import clouds from "../../Assets/clouds.mp4";
import homeplane from "../../Assets/homeplane.png";


import Aos from "aos";
import "aos/dist/aos.css";


function Home() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className="home flex container">

      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500" >CREATE EVER LASTING MEMORIES WITH US</h1>
      </div>

      <div className="homeImages flex" data-aos="fade-down" data-aos-duration="2500">
        <div className="videoDiv">
          <video src={clouds} autoPlay muted loop className="video"></video>
        </div>

        <img src={homeplane} className="plane"/>
      </div>
    </div>
  )
}

export default Home

