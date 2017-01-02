import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="db dt-l w-100 border-box pv4 ph5-l bg-red">
          <span className="f3 ttu tracked fw7 db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Pokém">
            Pokém
          </span>
          <div className="db dtc-l v-mid w-70 center w-75-l tc tr-l">
            <span className="white-70 f6 f5-l dib mr3 mr4-l lh-copy" title="Home">
              Personal Pokemon Team and Pokedex Tracker of
              <a className="dim link white fw7" href="http://cortes.us"> Dennis Cortés</a>
            </span>
          </div>
        </div>
        <div className="db w-100 tc pv3 bg-white bb b--black-10">
          <Link to="/" title="Teams" className="pointer f6 ttu tracked-custom dib ph2 link b red hover-black">Teams</Link>
          <Link to="/pokedex" title="Pokedex" className="pointer f6 ttu tracked-custom dib ph2 link b red hover-black">Pokédex</Link>
          {/* <Link to="/privacy/"  title="Privacy" className="pointer f6 ttu tracked-custom dib ph2 link b red hover-black">Games</Link> */}
          <Link to="/privacy/"  title="Privacy" className="pointer f6 ttu tracked-custom dib ph2 link b red hover-black">Resources</Link>
        </div>
      </div>
    );
  }
}

export default Header;
