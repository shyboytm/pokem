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
          <h1 className="f2 fw4 db ph5 lh-title pt4 pb3 tc green">45% Complete</h1>
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
            <PokedexItem caughtOrUncaught="caught" pokemonName="Primeape" pokemonNumber="#080" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Delibird" pokemonNumber="#081" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Oricorio" pokemonNumber="#082" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Cutiefly" pokemonNumber="#083" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Ribombee" pokemonNumber="#084" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Petilil" pokemonNumber="#085" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Lilligant" pokemonNumber="#086" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Cottonee" pokemonNumber="#087" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Whimsicott" pokemonNumber="#088" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Psyduck" pokemonNumber="#089" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Golduck" pokemonNumber="#090" />

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

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Magby" pokemonNumber="#166" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Magmar" pokemonNumber="#167" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Magmortar" pokemonNumber="#168" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Stufful" pokemonNumber="#169" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Bewear" pokemonNumber="#170" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Bounsweet" pokemonNumber="#171" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Steenee" pokemonNumber="#172" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tsareena" pokemonNumber="#173" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Comfey" pokemonNumber="#174" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Pinsir" pokemonNumber="#175" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Oranguru" pokemonNumber="#176" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Passimian" pokemonNumber="#177" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Goomy" pokemonNumber="#178" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Sliggoo" pokemonNumber="#179" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Goodra" pokemonNumber="#180" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Castform" pokemonNumber="#181" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Wimpod" pokemonNumber="#182" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Golisopod" pokemonNumber="#183" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Staryu" pokemonNumber="#184" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Starmie" pokemonNumber="#185" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Sandygast" pokemonNumber="#186" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Palossand" pokemonNumber="#187" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Cranidos" pokemonNumber="#188" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Rampardos" pokemonNumber="#189" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Shieldon" pokemonNumber="#190" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Bastiodon" pokemonNumber="#191" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Archen" pokemonNumber="#192" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Archeops" pokemonNumber="#193" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tirouga" pokemonNumber="#194" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Carracosta" pokemonNumber="#195" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Phantump" pokemonNumber="#196" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Trevenant" pokemonNumber="#197" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Nosepass" pokemonNumber="#198" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Probopass" pokemonNumber="#199" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Pyukumuku" pokemonNumber="#200" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Chinchou" pokemonNumber="#201" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Lanturn" pokemonNumber="#202" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Type: Null" pokemonNumber="#203" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Silvally" pokemonNumber="#204" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Zygarde" pokemonNumber="#205" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Trubbish" pokemonNumber="#206" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Garbodor" pokemonNumber="#207" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Skarmory" pokemonNumber="#208" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Ditto" pokemonNumber="#209" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Cleffa" pokemonNumber="#210" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Clefairy" pokemonNumber="#211" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Clefable" pokemonNumber="#212" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Minior" pokemonNumber="#213" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Beldum" pokemonNumber="#214" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Metang" pokemonNumber="#215" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Metagross" pokemonNumber="#216" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Porygon" pokemonNumber="#217" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Porygon2" pokemonNumber="#218" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Porygon-Z" pokemonNumber="#219" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Pancham" pokemonNumber="#220" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Pangoro" pokemonNumber="#221" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Komala" pokemonNumber="#222" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Torkoal" pokemonNumber="#223" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Turtonator" pokemonNumber="#224" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Togedemaru" pokemonNumber="#225" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Elekid" pokemonNumber="#226" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Electabuzz" pokemonNumber="#227" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Electivire" pokemonNumber="#228" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Geodude" pokemonNumber="#229" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Graveler" pokemonNumber="#230" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Golem" pokemonNumber="#231" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Sandile" pokemonNumber="#232" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Krokorok" pokemonNumber="#233" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Krookodile" pokemonNumber="#234" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Trapinch" pokemonNumber="#235" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Vibrava" pokemonNumber="#236" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Flygon" pokemonNumber="#237" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Gible" pokemonNumber="#238" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Gabite" pokemonNumber="#239" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Garchomp" pokemonNumber="#240" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Klefki" pokemonNumber="#241" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Mimikyu" pokemonNumber="#242" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Bruxish" pokemonNumber="#243" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Drampa" pokemonNumber="#244" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Absol" pokemonNumber="#245" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Snorunt" pokemonNumber="#246" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Glalie" pokemonNumber="#247" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Froslass" pokemonNumber="#248" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Sneasel" pokemonNumber="#249" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Weavile" pokemonNumber="#250" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Sandshrew" pokemonNumber="#251" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Sandslash" pokemonNumber="#252" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Vulpix" pokemonNumber="#253" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Ninetails" pokemonNumber="#254" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Vanillite" pokemonNumber="#255" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Vanillish" pokemonNumber="#256" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Vanilluxe" pokemonNumber="#257" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Snubbull" pokemonNumber="#258" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Granbull" pokemonNumber="#259" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Shellos" pokemonNumber="#260" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Gastrodon" pokemonNumber="#261" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Relicanth" pokemonNumber="#262" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Dhelmise" pokemonNumber="#263" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Carvanha" pokemonNumber="#264" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Sharpedo" pokemonNumber="#265" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Wailmer" pokemonNumber="#266" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Wailord" pokemonNumber="#267" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Lapras" pokemonNumber="#268" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Exeggcute" pokemonNumber="#269" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Exeggutor" pokemonNumber="#270" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Jangmo-o" pokemonNumber="#271" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Hakamo-o" pokemonNumber="#272" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Kommo-o" pokemonNumber="#273" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Emolga" pokemonNumber="#274" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Scyther" pokemonNumber="#275" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Scizor" pokemonNumber="#276" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Murkrow" pokemonNumber="#277" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Honchkrow" pokemonNumber="#278" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Riolu" pokemonNumber="#279" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Lucario" pokemonNumber="#280" />

            <PokedexItem caughtOrUncaught="caught" pokemonName="Dratini" pokemonNumber="#281" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Dragonair" pokemonNumber="#282" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Dragonite" pokemonNumber="#283" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Emolga" pokemonNumber="#284" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Aerodactyl" pokemonNumber="#285" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tapu Koko" pokemonNumber="#286" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tapu Lele" pokemonNumber="#287" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tapu Bulu" pokemonNumber="#288" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Tapu Fini" pokemonNumber="#289" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Cosmog" pokemonNumber="#290" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Cosmoem" pokemonNumber="#291" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Solgaleo" pokemonNumber="#292" />
            <PokedexItem caughtOrUncaught="caught" pokemonName="Lunala" pokemonNumber="#293" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Nihilego" pokemonNumber="#294" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Buzzwole" pokemonNumber="#295" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Pheromosa" pokemonNumber="#296" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Xurkitree" pokemonNumber="#297" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Celesteela" pokemonNumber="#298" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Kartana" pokemonNumber="#299" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Guzzlord" pokemonNumber="#300" />

            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Necrozma" pokemonNumber="#291" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Magearna" pokemonNumber="#292" />
            <PokedexItem caughtOrUncaught="uncaught" pokemonName="Marshadow" pokemonNumber="#293" />
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
