import React, { Component } from "react";
import "./header.css";

class Header extends Component {
render(){
return (
    <div id="navBar">
      <h1 className="brand-name-primary">Frequent Weekender
        </h1>
        <h1 className="brand-name-secondary">FW
        </h1>
            <ul>
              <li className="nav-menu">
                <a href="#" >
                 <i className="material-icons">menu</i>
                </a>
              </li>
              <li className="nav-items"><a href="#" className="nav-link">home</a></li>
              <li className="nav-items">|</li>
              <li className="nav-items"><a href="#" className="nav-link">about us</a></li>
              <li className="nav-items">|</li>
              <li className="nav-items"><a href="#" className="nav-link">services</a></li>
              <li className="nav-items">|</li>
              <li className="nav-items"><a href="#" className="nav-link">Flights</a></li>
            </ul>
     </div>
    );
  }
}

export default Header; 