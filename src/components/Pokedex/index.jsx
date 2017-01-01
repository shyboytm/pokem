import React, { Component } from 'react';

import PokedexItem from '../PokedexItem';

class Pokedex extends Component {
  render() {

    const imgPrimarina  = require('../../img/primarina.gif');

    return (
      <div className="pv5-ns pv3 center content-end flex flex-wrap cf">
        <PokedexItem caughtOrUncaught="caught" pokemonName="Rowlet" pokemonNumber="#001" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="Dartrix" pokemonNumber="#002" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="Decidueye" pokemonNumber="#003" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="Litten" pokemonNumber="#004" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="Torracat" pokemonNumber="#005" />

        <PokedexItem caughtOrUncaught="caught" pokemonName="Incineroar" pokemonNumber="#006" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="Popplio" pokemonNumber="#007" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="Brionne" pokemonNumber="#008" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="Primarina" pokemonNumber="#009" />
        <PokedexItem caughtOrUncaught="caught" pokemonName="★ Pikipek" pokemonNumber="#010" />
      </div>
    );
  }
}

export default Pokedex;
