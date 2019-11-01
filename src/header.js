import React, { Component } from "react";

class Header extends Component {
render(){
return (
    <div id="navBar">
      <h1 className="brand-name">Frequent Weekender
        </h1>
            <ul>
               <li className="nav-hotel"><a href="#">hotels</a></li>
                <li className="nav-flights"><a href="#">flights</a></li>
            </ul>
     </div>
    );
  }
}

export default Header; 