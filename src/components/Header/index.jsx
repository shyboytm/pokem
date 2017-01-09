import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="db dt-l w-100 border-box pv4 ph5-l bg-red">
          <Link to="/" className="f3 ttu tracked fw9 db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Pokém">
            Pokem
          </Link>
          <div className="db dtc-l v-mid w-70 center w-75-l tc tr-l">
            <span className="white-70 f6 f5-l dib mr3 mr4-l lh-copy" title="Home">
              Pokémon Resources by
              <a className="dim link white fw7" href="http://cortes.us"> Dennis Cortés</a>
            </span>
          </div>
        </div>
        <div className="db w-100 tc pv3 bg-white bb b--black-10">
          <Link to="/" title="Teams" className="pointer f6 ttu tracked-custom dib ph3-ns ph2 link b black hover-red">Teams</Link>
          <Link to="/pokedex" title="Pokedex" className="pointer f6 ttu tracked-custom dib ph3-ns ph2 link b black hover-red">Pokédex</Link>
          <Link to="/counter"  title="Counter" className="pointer f6 ttu tracked-custom dib ph3-ns ph2 link b black hover-red">Counter</Link>
          <a className="pointer f6 ttu tracked-custom dib ph3-ns ph2 link b black hover-red" href="https://twitter.com/home?status=Just%20found%20this%20awesome%20Pok%C3%A9mon%20resource%20and%20encounter%20counter%20website!%0A%0ACheck%20it%20out%3A%20pokem.cortes.us%20via%20%40fromcortes">
            Tweet
          </a>
        </div>
        {/* <div className="db w-100 tc pv3">
          <a className="f6 link br2 ph3 pv2 mb2 dib black-30 hover-black ba b--black-30" href="https://twitter.com/home?status=Just%20found%20this%20awesome%20Pok%C3%A9mon%20resource%20and%20encounter%20counter%20website!%0A%0ACheck%20it%20out%3A%20pokem.cortes.us%20via%20%40fromcortes">
            Share site on Twitter
          </a>
        </div> */}
      </div>
    );
  }
}

export default Header;
