import React from "react";
import "./Header.css";
import { BsGlobe } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";



function Header() {
  return (
    <div>
        <img src={require('./airbnb.png')} className="logo" alt="logo" />
        <div>
            
            <button className="Header-right">Become a host</button>
            <button className="globe"><BsGlobe/></button>
            <button className="profile"><VscThreeBars style={{ fontSize:'25px', float:'left', paddingLeft:'7px', paddingTop:'5px', color:'grey'}}/><CgProfile style={{fontSize:'35px', float:'right', color:'grey'}}/></button>

        </div>
        <div className="line1">
        </div>
    </div>
    );
}

export default Header;