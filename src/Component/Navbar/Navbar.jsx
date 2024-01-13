import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

import logo from "../../Assets/logo.png";
import { useState } from "react";


function Navbar() {

  const [active,setActive] = useState("navBarMenu");
  const showNavBar = ()=>{
    setActive("navBarMenu showNavBar");
  }
  const removeNavBar = ()=>{
    setActive("navBarMenu");
  }

  const[noBg,addBg] = useState("navBarTwo");
  const addBgColor = ()=>{
    if(window.scrollY >= 10){
      addBg("navBarTwo nav_with_bg")
    }
    else{
      addBg("navBarTwo");
    }
  }
  window.addEventListener("scroll",addBgColor);
  

  return (
    <div className="navBar flex">

      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon"/>
        </div>

        <div className="none flex">
          <li className="flex"> <BsPhoneVibrate className="icon"/> Support</li>
          <li className="flex"> <AiOutlineGlobal className="icon"/> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo"/>
        </div>

        <div onClick={removeNavBar} className={active}>
          <ul className="menu flex">
            <li className="listItems">Home</li>
            <li className="listItems">About</li>
            <li className="listItems">Offers</li>
            <li className="listItems">Seats</li>
            <li className="listItems">Destinations</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridR className="icon"/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
