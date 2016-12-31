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
    const imgToucannon  = require('../../img/trumbeak.gif');
    const imgLycanroc  = require('../../img/rockruff.gif');

    return (
      <div id="current" className="pv5-ns pv3 center content-end flex flex-wrap cf">
        <h1 className="f4 db ph5 lh-title mb4 center orange">Pokémon Sun Team - Regular</h1>
        <div className="w-100 mb4 content-end flex flex-wrap">
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

        <h1 className="f4 db ph5 mb4 purple lh-title">Pokémon Moon Team - Full Shiny Team</h1>
        <div className="w-100 mb4 content-end flex flex-wrap">
          <Current
            currentImg={imgToucannon}
            currentAlt="Shiny Trumbeak Sprite"
            currentName="Italic"
            currentActualName="Shiny Trumbeak"
            currentNumber="123"
            currentNameColor="black-50"
            typeNameOne="Normal"
            typeBackgroundOne="type-tag bg-black-50"
            typeNameTwo="Flying"
            typeBackgroundTwo="type-tag bg-navy"
            nature="Hardy"
            ability="Keen Eye"
            item="Normalium Z" />
          <Current
            currentImg={imgLycanroc}
            currentAlt="Shiny Rockruff Sprite"
            currentName="Serif"
            currentActualName="Shiny Rockruff"
            currentNumber="103"
            currentNameColor="brown"
            typeNameOne="Rock"
            typeBackgroundOne="type-tag bg-brown"
            nature="Hasty"
            ability="Keen Eye"
            item="None" />
          <Current
            currentName="Not Caught Yet!"
            currentActualName="Not Caught Yet!"
            currentNameColor="black-30"
            typeNameOne="N/A"
            typeBackgroundOne="type-tag bg-black-30"
            typeNameTwo="N/A"
            typeBackgroundTwo="type-tag bg-black-30"
            nature="N/A"
            ability="N/A"
            item="N/A" />
          <Current
            currentName="Not Caught Yet!"
            currentActualName="Not Caught Yet!"
            currentNameColor="black-30"
            typeNameOne="N/A"
            typeBackgroundOne="type-tag bg-black-30"
            typeNameTwo="N/A"
            typeBackgroundTwo="type-tag bg-black-30"
            nature="N/A"
            ability="N/A"
            item="N/A" />
          <Current
            currentName="Not Caught Yet!"
            currentActualName="Not Caught Yet!"
            currentNameColor="black-30"
            typeNameOne="N/A"
            typeBackgroundOne="type-tag bg-black-30"
            typeNameTwo="N/A"
            typeBackgroundTwo="type-tag bg-black-30"
            nature="N/A"
            ability="N/A"
            item="N/A" />
          <Current
            currentName="Not Caught Yet!"
            currentActualName="Not Caught Yet!"
            currentNameColor="black-30"
            typeNameOne="N/A"
            typeBackgroundOne="type-tag bg-black-30"
            typeNameTwo="N/A"
            typeBackgroundTwo="type-tag bg-black-30"
            nature="N/A"
            ability="N/A"
            item="N/A" />
        </div>
      </div>
    );
  }
}

export default CurrentCollection;
