import React, { useState } from "react";
import './Navbar.css';

const Navbar = () =>{
  const [menu,setMenu] =useState("menu");
  
  return(
    <div className="navbar">
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Models")} className={menu==="Models"?"active":""}>Models</li>
        <li onClick={()=>setMenu("Makeup-products")} className={menu==="Makeup-products"?"active":""}>Makeup products</li>
        <li onClick={()=>setMenu("Events")} className={menu==="Events"?"active":""}>Fashion events</li>
        <li onClick={()=>setMenu("Photo-sales")} className={menu==="Photo-sales"?"active":""}>Photo Sales</li>
        <li onClick={()=>setMenu("Membership")} className={menu==="Membership"?"active":""}>MemberShips</li>
      </ul>
      <div className = "navbar-right">
       <button className="navbar-button" >Admin?</button>
      </div>
    </div>
  )
}

export default Navbar