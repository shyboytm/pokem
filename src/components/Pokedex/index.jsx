import React, { Component } from 'react';

import Header from '../Header';
import PokedexItem from '../PokedexItem';

class Pokedex extends Component {
  render() {

    return (
      <div id="pokedex" className="bg-black-05">
        <Header />
        <div className="pt5 mw8 center">
          <h1 className="f4 db ph2 lh-title mb2 tc center black">Pokédex Completion</h1>
          <span className="f5 db ph2 lh-title mb0-ns mb3 tc center black-50">★ = Shiny</span>
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
        </div>
      </div>
    );
  }
}

export default Pokedex;
