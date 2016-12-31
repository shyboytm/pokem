import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="db dt-l w-100 border-box pv4 ph5-l bg-red">
        <span className="f3 ttu tracked fw7 db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Pokém">
          Pokém
        </span>
        <div className="db dtc-l v-mid w-70 center w-75-l tc tr-l">
          <span className="dim white-70 f6 f5-l dib mr3 mr4-l lh-copy" title="Home">
            Personal Pokemon Team and Pokedex Tracker of
            <a className="link white fw7" href="http://cortes.us"> Dennis Cortés</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
