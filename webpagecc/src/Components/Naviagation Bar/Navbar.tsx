import React, { useState } from "react";
import './Navbar.css';

const Navbar = () =>{
  const [menu,setMenu] =useState("home");
  
  return(
    <div className="navbar">
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Models</li>
        <li>Makeup products</li>
        <li>Fashion events</li>
        <li>Photo Sales</li>
        <li>MemberShips</li>
      </ul>
      <div className = "navbar-right">
       <button className="navbar-button" >Admin?</button>
      </div>
    </div>
  )
}

export default Navbar