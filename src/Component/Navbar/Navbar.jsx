
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

          <h2>TAMIL NADU DOMESTIC AIRLINES</h2>   

      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo"/>
        </div>

        <div onClick={removeNavBar} className={active}>
          <ul className="menu flex">
            <li className="listItems">TRAVEL</li>
            <li className="listItems">AROUND</li>
            <li className="listItems">TAMIL NADU</li>
            <li className="listItems">WITH</li>
            <li className="listItems">US</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        <div className="logoDiv">
          <img src={logo} className="logo"/>
        </div>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridR className="icon"/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
