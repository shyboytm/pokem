import React, { Component } from 'react';

import Header from '../Header';
import PokedexItem from '../PokedexItem';

class Pokedex extends Component {
  render() {

    return (
      <div id="pokedex" className="bg-black-05">
        <Header />
        <div className="pt5 mw8 center">
          <h1 className="f4 db ph5 lh-title tc black">Pokedex Completion</h1>
          <h1 className="f2 fw4 db ph5 lh-title pt4 pb3 tc green">43% Complete</h1>
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
            <PokedexItem caughtOrUncaught="caught" pokemonName="A. Rattata" pokemonNumber="#015" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="A. Raticate" pokemonNumber="#016" />
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
            <PokedexItem caughtOrUncaught="caught" pokemonName="A. Meowth" pokemonNumber="#045" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="A. Persian" pokemonNumber="#046" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Magnemite" pokemonNumber="#047" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Magneton" pokemonNumber="#048" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Magnezone" pokemonNumber="#049" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="A. Grimer" pokemonNumber="#050" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="A. Muk" pokemonNumber="#051" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Growlithe" pokemonNumber="#052" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Arcanine" pokemonNumber="#053" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Drowzee" pokemonNumber="#054" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Hypno" pokemonNumber="#055" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Makuhita" pokemonNumber="#056" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Hariyama" pokemonNumber="#057" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Smeargle" pokemonNumber="#058" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Crabrawler" pokemonNumber="#059" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Crabominable" pokemonNumber="#060" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Gastly" pokemonNumber="#061" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Haunter" pokemonNumber="#062" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Gengar" pokemonNumber="#063" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Drifloon" pokemonNumber="#064" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Drifblim" pokemonNumber="#065" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Misdreavus" pokemonNumber="#066" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Mismagius" pokemonNumber="#067" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Zubat" pokemonNumber="#068" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Golbat" pokemonNumber="#069" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Crobat" pokemonNumber="#070" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Diglett" pokemonNumber="#071" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Dugtrio" pokemonNumber="#072" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Spearow" pokemonNumber="#073" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Fearow" pokemonNumber="#074" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Rufflet" pokemonNumber="#075" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Braviary" pokemonNumber="#076" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Vullaby" pokemonNumber="#077" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Mandibuzz" pokemonNumber="#078" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Mankey" pokemonNumber="#079" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Primeape" pokemonNumber="#080" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Delibird" pokemonNumber="#081" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Oricorio" pokemonNumber="#082" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Cutiefly" pokemonNumber="#083" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Ribombee" pokemonNumber="#084" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Petilil" pokemonNumber="#085" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Lilligant" pokemonNumber="#086" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Cottonee" pokemonNumber="#087" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Whimsicott" pokemonNumber="#088" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Psyduck" pokemonNumber="#089" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Golduck" pokemonNumber="#090" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Magikarp" pokemonNumber="#091" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Gyarados" pokemonNumber="#092" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Barboach" pokemonNumber="#093" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Whiscash" pokemonNumber="#094" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Machop" pokemonNumber="#095" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Machoke" pokemonNumber="#096" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Machamp" pokemonNumber="#097" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Roggenrola" pokemonNumber="#098" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Boldore" pokemonNumber="#099" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Gigalith" pokemonNumber="#100" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Carbink" pokemonNumber="#101" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Sableye" pokemonNumber="#102" />
            <PokedexItem caughtOrUncaught="shiny" pokemonName="Rockruff" pokemonNumber="#103" />
            <PokedexItem caughtOrUncaught="shiny" pokemonName="Lycanroc" pokemonNumber="#104" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Spinda" pokemonNumber="#105" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Tentacool" pokemonNumber="#106" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tentacruel" pokemonNumber="#107" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Finneon" pokemonNumber="#108" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Lumineon" pokemonNumber="#109" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Wishiwashi" pokemonNumber="#110" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Luvdisc" pokemonNumber="#111" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Corsola" pokemonNumber="#112" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Mareanie" pokemonNumber="#113" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Toxapex" pokemonNumber="#114" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Shelder" pokemonNumber="#115" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Cloyster" pokemonNumber="#116" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Bagon" pokemonNumber="#117" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Shelgon" pokemonNumber="#118" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Salamence" pokemonNumber="#119" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Lillipup" pokemonNumber="#120" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Herdier" pokemonNumber="#121" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Stoutland" pokemonNumber="#122" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Eevee" pokemonNumber="#123" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Vaporeon" pokemonNumber="#124" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Jolteon" pokemonNumber="#125" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Flareon" pokemonNumber="#126" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Espeon" pokemonNumber="#127" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Umbreon" pokemonNumber="#128" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Leafeon" pokemonNumber="#129" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Glaceon" pokemonNumber="#130" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Sylveon" pokemonNumber="#131" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Mudbray" pokemonNumber="#132" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Mudsdale" pokemonNumber="#133" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Igglybuff" pokemonNumber="#134" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Jigglypuff" pokemonNumber="#135" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Wigglytuff" pokemonNumber="#136" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tauros" pokemonNumber="#137" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Miltank" pokemonNumber="#138" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Surskit" pokemonNumber="#139" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Masquerain" pokemonNumber="#140" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Dewpider" pokemonNumber="#141" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Araquanid" pokemonNumber="#142" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Fomantix" pokemonNumber="#143" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Lurantis" pokemonNumber="#144" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Morelull" pokemonNumber="#145" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Shiinotic" pokemonNumber="#146" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Paras" pokemonNumber="#147" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Parasect" pokemonNumber="#148" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Poliwag" pokemonNumber="#149" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Poliwhirl" pokemonNumber="#150" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Poliwrath" pokemonNumber="#151" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Politoed" pokemonNumber="#152" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Goldeen" pokemonNumber="#153" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Seaking" pokemonNumber="#154" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Feebas" pokemonNumber="#155" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Milotic" pokemonNumber="#156" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Alomomola" pokemonNumber="#157" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Fletchling" pokemonNumber="#158" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Fletchinder" pokemonNumber="#159" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Talonflame" pokemonNumber="#160" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Salandit" pokemonNumber="#161" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Salazzle" pokemonNumber="#162" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Cubone" pokemonNumber="#163" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Marowak" pokemonNumber="#164" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Kangaskhan" pokemonNumber="#165" />
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
