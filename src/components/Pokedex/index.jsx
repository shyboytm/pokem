import React, { Component } from 'react';

import PokedexItem from '../PokedexItem';

class Pokedex extends Component {
  render() {

    const imgPrimarina  = require('../../img/primarina.gif');

    return (
      <div className="">
        <h1>Pokédex</h1>
        <PokedexItem
          pokedexItemImg={imgPrimarina} />
      </div>
    );
  }
}

export default Pokedex;
