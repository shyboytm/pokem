import React, { Component } from 'react';

import PokedexItem from '../PokedexItem';

class Pokedex extends Component {
  render() {
    return (
      <div className="">
        <h1>Pokédex</h1>
        <PokedexItem />
      </div>
    );
  }
}

export default Pokedex;
