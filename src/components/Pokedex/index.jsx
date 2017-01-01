import React, { Component } from 'react';

import Header from '../Header';
import PokedexItem from '../PokedexItem';

class Pokedex extends Component {
  render() {

    return (
      <div id="pokedex" className="bg-black-05">
        <Header />
        <div className="pt5 mw8 center">
          <h1 className="f4 db ph5 lh-title mb2 tc black">Pokedex Completion</h1>
          {/* <span className="f5 db ph2 lh-title mb0-ns mb3 tc center black-50">★ = Shiny</span> */}
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
            <PokedexItem caughtOrUncaught="shiny" pokemonName="Pikipek" pokemonNumber="#010" />

            <PokedexItem caughtOrUncaught="shiny" pokemonName="Trumbeak" pokemonNumber="#011" />
            <PokedexItem caughtOrUncaught="shiny" pokemonName="Toucannon" pokemonNumber="#012" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Yungoos" pokemonNumber="#013" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Gumshoos" pokemonNumber="#014" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Rattata" pokemonNumber="#015" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Raticate" pokemonNumber="#016" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Caterpie" pokemonNumber="#017" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Metapod" pokemonNumber="#018" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Butterfree" pokemonNumber="#019" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Ledyba" pokemonNumber="#020" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Ledian" pokemonNumber="#021" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Spinarak" pokemonNumber="#022" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Ariados" pokemonNumber="#023" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Pichu" pokemonNumber="#024" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Pikachu" pokemonNumber="#025" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Raichu" pokemonNumber="#026" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Grubbin" pokemonNumber="#027" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Charjabug" pokemonNumber="#028" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Vikavolt" pokemonNumber="#029" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Bonsly" pokemonNumber="#030" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Sudowoodo" pokemonNumber="#031" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Happiny" pokemonNumber="#032" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Chansey" pokemonNumber="#033" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Blissey" pokemonNumber="#034" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Munchlax" pokemonNumber="#035" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Snorlax" pokemonNumber="#036" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Slowpoke" pokemonNumber="#037" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Slowbro" pokemonNumber="#038" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Slowking" pokemonNumber="#039" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Wingull" pokemonNumber="#040" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Pelipper" pokemonNumber="#041" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Abra" pokemonNumber="#042" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Kadabra" pokemonNumber="#043" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Alakazam" pokemonNumber="#044" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Wingull" pokemonNumber="#045" />
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
