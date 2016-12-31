import React, { Component } from 'react';

import Current from '../Current';

class CurrentCollection extends Component {
  render() {

    const imgPrimarina  = require('../../img/primarina.gif');
    const imgIncineroar = require('../../img/incineroar.gif');
    const imgRaichu     = require('../../img/raichu-alola.gif');
    const imgNinetales  = require('../../img/ninetales-alola.gif');
    const imgKommo      = require('../../img/kommo-o.gif');
    const imgDecidueye  = require('../../img/decidueye.gif');

    return (
      <div id="current" className="pv5 center content-end flex flex-wrap cf">
        <h1 className="f4 db ph3 mb4">Pokémon Sun - Regular</h1>
        <div className="mb4 content-end flex flex-wrap">
          <Current
            currentImg={imgPrimarina}
            currentAlt="Primarina Sprite"
            currentName="Italic"
            currentActualName="Primarina"
            currentNumber="009"
            currentNameColor="blue"
            typeNameOne="Water"
            typeBackgroundOne="type-tag bg-blue"
            typeNameTwo="Fairy"
            typeBackgroundTwo="type-tag bg-pink"
            nature="Sassy"
            ability="Torrent"
            item="Mystic Water" />
          <Current
            currentImg={imgIncineroar}
            currentAlt="Incineroar Sprite"
            currentName="Sash"
            currentActualName="Incineroar"
            currentNumber="006"
            currentNameColor="red"
            typeNameOne="Fire"
            typeBackgroundOne="type-tag bg-red"
            typeNameTwo="Dark"
            typeBackgroundTwo="type-tag bg-black"
            nature="Brave"
            ability="Blaze"
            item="Incinium Z" />
          <Current
            currentImg={imgRaichu}
            currentAlt="A. Raichu Sprite"
            currentName="Mila"
            currentActualName="A. Raichu"
            currentNumber="026"
            currentNameColor="gold"
            typeNameOne="Electric"
            typeBackgroundOne="type-tag bg-gold"
            typeNameTwo="Psychic"
            typeBackgroundTwo="type-tag bg-dark-pink"
            nature="Impish"
            ability="Surge Surfer"
            item="Aloraichium Z" />
          <Current
            currentImg={imgNinetales}
            currentAlt="A. Ninetales Sprite"
            currentName="Lillie"
            currentActualName="A. Ninetales"
            currentNumber="254"
            currentNameColor="light-blue"
            typeNameOne="Ice"
            typeBackgroundOne="type-tag bg-light-blue"
            typeNameTwo="Fairy"
            typeBackgroundTwo="type-tag bg-pink"
            nature="Adamant"
            ability="Snow Warning"
            item="Never-Melt Ice" />
          <Current
            currentImg={imgKommo}
            currentAlt="Kommo-o Sprite"
            currentName="Bold"
            currentActualName="Kommo-o"
            currentNumber="273"
            currentNameColor="purple"
            typeNameOne="Dragon"
            typeBackgroundOne="type-tag bg-purple"
            typeNameTwo="Fighting"
            typeBackgroundTwo="type-tag bg-orange"
            nature="Lax"
            ability="Bulletproof"
            item="Leftovers" />
          <Current
            currentImg={imgDecidueye}
            currentAlt="Decidueye Sprite"
            currentName="Sans"
            currentActualName="Decidueye"
            currentNumber="003"
            currentNameColor="green"
            typeNameOne="Grass"
            typeBackgroundOne="type-tag bg-green"
            typeNameTwo="Ghost"
            typeBackgroundTwo="type-tag bg-dark-blue"
            nature="Sassy"
            ability="Overgrow"
            item="Miracle Seed" />
        </div>

        <h1 className="f4 db ph3 mb4">Pokémon Moon - Full Shiny Team</h1>
        <div className="mb4 content-end flex flex-wrap">
          <Current
            currentImg={imgPrimarina}
            currentAlt="Primarina Sprite"
            currentName="Italic"
            currentActualName="Incineroar"
            currentNumber="123"
            currentNameColor="blue"
            typeNameOne="Water"
            typeBackgroundOne="type-tag bg-blue"
            typeNameTwo="Fairy"
            typeBackgroundTwo="type-tag bg-pink"
            nature="Sassy"
            ability="Torrent"
            item="Mystic Water" />
          <Current
            currentImg={imgPrimarina}
            currentAlt="Primarina Sprite"
            currentName="Italic"
            currentActualName="Incineroar"
            currentNumber="123"
            currentNameColor="blue"
            typeNameOne="Water"
            typeBackgroundOne="type-tag bg-blue"
            typeNameTwo="Fairy"
            typeBackgroundTwo="type-tag bg-pink"
            nature="Sassy"
            ability="Torrent"
            item="Mystic Water" />
          <Current
            currentImg={imgPrimarina}
            currentAlt="Primarina Sprite"
            currentName="Italic"
            currentActualName="Incineroar"
            currentNumber="123"
            currentNameColor="blue"
            typeNameOne="Water"
            typeBackgroundOne="type-tag bg-blue"
            typeNameTwo="Fairy"
            typeBackgroundTwo="type-tag bg-pink"
            nature="Sassy"
            ability="Torrent"
            item="Mystic Water" />
        </div>
      </div>
    );
  }
}

export default CurrentCollection;
