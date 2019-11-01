import React, { Component } from "react";

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
                 <i class="material-icons">menu</i>
                </a>
              </li>
              <li className="nav-items"><a href="#" class="nav-link">Hotels</a></li>
              <li className="nav-items">|</li>
              <li className="nav-items"><a href="#" class="nav-link">Flights</a></li>
            </ul>
     </div>
    );
  }
}

export default Header; 