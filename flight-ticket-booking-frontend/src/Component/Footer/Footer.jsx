import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai"
import logo from "../../Assets/logo.png"
import {TiSocialFacebook} from "react-icons/ti"
import { FaPinterest } from "react-icons/fa";

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className="footer">
      <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer container flex">

        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="logo"/>
          </div>
          <p>your mind should be stronger than your feelings,fly</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon"/>
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <FaPinterest className="icon"/>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="">Home</a></li>
          <li><a href="">Explore</a></li>
          <li><a href="">Flight Status</a></li>
          <li><a href="">Travel</a></li>
          <li><a href="">Chec-In</a></li>
          <li><a href="">Manage your booking</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li><a href=""></a>FAQ</li>
          <li><a href="">How to</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Baggage</a></li>
          <li><a href="">Route-Map</a></li>
          <li><a href="">Our Communities</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="">Chauffuer</a></li>
          <li><a href="">Our partners</a></li>
          <li><a href="">Destination</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Transportation</a></li>
          <li><a href="">Programmes</a></li>
        </div>

      </div>
    </div>
  )
}

export default Footer
