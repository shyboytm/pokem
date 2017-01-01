import React, { Component } from 'react';

import Header from '../Header';
import CurrentCollection from '../CurrentCollection';
import Pokedex from '../Pokedex';

class Teams extends Component {
  render() {
    return (
      <div id="teams" className="bg-black-05">
        <Header />
        <div className="w-80 center pt5">
          <p className="center black measure lh-copy">
            Welcome!
          </p>
          <p className="center black-60 measure lh-copy">
            If you're like me, Pokémon was a big part of your childhood.
            Now that I'm older, nothing is better than the nostalgia
            of completing a Pokémon story and filling the Pokédex. To go
            along with this passion, I made this little site to keep track
            of my teams and my Pokédex for Sun and Moon in a fun and
            customizable way.
          </p>
          <p className="center black-60 measure lh-copy">
            I'm currently playing the post-game of Sun with the first team below
            and at the beginning of a shiny locke playthrough of Moon with 2/6
            caught so far.
          </p>
        </div>
        <div id="home-content" className="pv2 mw8 center w-90-ns w-100">
          <CurrentCollection />
        </div>
      </div>
    );
  }
}

export default Teams;
