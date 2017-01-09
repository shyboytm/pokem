import React, { Component } from 'react';

import Current from '../Current';

class CurrentCollection extends Component {
  render() {

    const sunLogo    = require('../../img/pokemon-sun-logo.png');
    const moonLogo   = require('../../img/pokemon-moon-logo.png');

    const imgPangoro    = require('../../img/pangoro.gif');
    const imgMuk        = require('../../img/muk-alola.gif');
    const imgLycanrocD  = require('../../img/lycanroc-midday.gif');
    const imgGoodra     = require('../../img/goodra.gif');
    const imgMimikyu    = require('../../img/mimikyu.gif');
    const imgVikavolt   = require('../../img/vikavolt.gif');

    const imgPrimarina  = require('../../img/primarina.gif');
    const imgIncineroar = require('../../img/incineroar.gif');
    const imgRaichu     = require('../../img/raichu-alola.gif');
    const imgNinetales  = require('../../img/ninetales-alola.gif');
    const imgGarchomp   = require('../../img/garchomp.gif');
    const imgDecidueye  = require('../../img/decidueye.gif');

    const imgToucannon  = require('../../img/toucannon.gif');
    const imgLycanrocM  = require('../../img/lycanroc-midnight.gif');
    const imgTsareena   = require('../../img/tsareena.gif');
    const imgAraquanid  = require('../../img/dewpider.gif');

    return (
      <div id="current" className="pv5-ns pv3 center content-end flex flex-wrap cf">
        <h1 className="f4 db ph5 lh-title mb4 center orange">
          <img src={sunLogo} className="nb2 pr2 dib-ns db pb0-ns pb4 center w2-ns h2-ns w3 h3" alt="★" />
          Current Sun Team
        </h1>
        <div className="w-100 mb4 content-end flex flex-wrap">
          <Current
            currentImg={imgPangoro}
            currentAlt="Pangoro Sprite"
            currentName="Thaii"
            currentActualName="Shiny Pangoro"
            currentNumber="221"
            currentNameColor="brown"
            typeNameOne="Fighting"
            typeBackgroundOne="type-tag bg-light-red"
            typeNameTwo="Dark"
            typeBackgroundTwo="type-tag bg-black"
            nature="Hardy"
            ability="Iron Fist"
            item="Scope Lens" />
          <Current
            currentImg={imgMuk}
            currentAlt="A. Muk Sprite"
            currentName="Bleh"
            currentActualName="Shiny A. Muk"
            currentNumber="051"
            currentNameColor="light-purple"
            typeNameOne="Poison"
            typeBackgroundOne="type-tag bg-light-purple"
            typeNameTwo="Dark"
            typeBackgroundTwo="type-tag bg-black"
            nature="Lonely"
            ability="Poison Touch"
            item="Leftovers" />
          <Current
            currentImg={imgLycanrocD}
            currentAlt="Lycanroc Midday Sprite"
            currentName="Ollie"
            currentActualName="Shiny Lycanroc"
            currentNumber="104"
            currentNameColor="brown"
            typeNameOne="Rock"
            typeBackgroundOne="type-tag bg-brown"
            nature="Hardy"
            ability="Keen Eye"
            item="Hard Stone" />
          <Current
            currentImg={imgGoodra}
            currentAlt="Goodra Sprite"
            currentName="Doe"
            currentActualName="Goodra"
            currentNumber="180"
            currentNameColor="purple"
            typeNameOne="Dragon"
            typeBackgroundOne="type-tag bg-purple"
            nature="Adamant"
            ability="Hydration"
            item="Leftovers" />
          <Current
            currentImg={imgMimikyu}
            currentAlt="Mimikyu Sprite"
            currentName="Mimo"
            currentActualName="Mimikyu"
            currentNumber="242"
            currentNameColor="dark-blue"
            typeNameOne="Ghost"
            typeBackgroundOne="type-tag bg-dark-blue"
            typeNameTwo="Fairy"
            typeBackgroundTwo="type-tag bg-pink"
            nature="Naughty"
            ability="Disguise"
            item="Life Orb" />
          <Current
            currentImg={imgVikavolt}
            currentAlt="Vikavolt Sprite"
            currentName="Viola"
            currentActualName="Vikavolt"
            currentNumber="029"
            currentNameColor="light-green"
            typeNameOne="Bug"
            typeBackgroundOne="type-tag bg-light-green"
            typeNameTwo="Electric"
            typeBackgroundTwo="type-tag bg-gold"
            nature="Timid"
            ability="Levitate"
            item="Bright Powder" />
        </div>

        <h1 className="f4 db ph5 mb4 blue center lh-title">
          <img src={moonLogo} className="nb2 pr2 dib-ns db pb0-ns pb4 center w2-ns h2-ns w3 h3" alt="★" />
          Current Moon Team
        </h1>
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
            currentImg={imgLycanrocM}
            currentAlt="Shiny Lycanroc Sprite"
            currentName="Serif"
            currentActualName="Shiny Lycanroc"
            currentNumber="104"
            currentNameColor="brown"
            typeNameOne="Rock"
            typeBackgroundOne="type-tag bg-brown"
            nature="Hasty"
            ability="Keen Eye"
            item="None" />
          <Current
            currentImg={imgTsareena}
            currentAlt="Tsareena Sprite"
            currentName="Stem"
            currentActualName="Shiny Tsareena"
            currentNumber="104"
            currentNameColor="green"
            typeNameOne="Grass"
            typeBackgroundOne="type-tag bg-green"
            nature="Docile"
            ability="Leaf Guard"
            item="None" />
          <Current
            currentImg={imgAraquanid}
            currentAlt="Tsareena Sprite"
            currentName="Gadzook"
            currentActualName="Shiny Dewpider"
            currentNumber="104"
            currentNameColor="blue"
            typeNameOne="Water"
            typeBackgroundOne="type-tag bg-blue"
            typeNameTwo="Bug"
            typeBackgroundTwo="type-tag bg-light-green"
            nature="Careful"
            ability="Water Bubble"
            item="Mystic Water" />
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
