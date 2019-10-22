import React, { Component } from "react";

class Header extends Component {
render(){
return (
    <div id="header" className="brand-name">
      <h1>
        <span className="brand-name-primary">Story</span>
        <span className="brand-name-secondary">Traveler.</span>
        </h1>
     </div>
    );
  }
}

export default Header; 