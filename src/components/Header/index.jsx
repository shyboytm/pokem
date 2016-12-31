import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="pa3 pa4-ns bg-red">
        <a className="ttu tracked link white dim black b f2-ns f3 tc db mb3 mb4-ns" href="#" title="Home">Pokém</a>
        <div className="tc pb3">
          <span className="white measure">Personal Pokemon Team and Pokedex Tracker of <a className="link hover-white white-70 f6 f5-ns dib mr3" href="http://cortes.us" title="Dennis Cortés">Dennis Cortés</a></span>
          {/* <a className="link hover-white white-70 f6 f5-ns dib mr3" href="#" title="About">About</a>
          <a className="link hover-white white-70 f6 f5-ns dib mr3" href="#" title="Store">Store</a>
          <a className="link hover-white white-70 f6 f5-ns dib" href="#" title="Contact">Contact</a> */}
        </div>
      </nav>
    );
  }
}

export default Header;
