import React, { Component } from 'react';
import { Link } from 'react-router';

class Previous extends Component {
  render() {

    const {
      nameOne,
      actualNameOne,
      nicknameTwo, actualNameTwo,
      nicknameThree, actualNameThree,
      nicknameFour, actualNameFour,
      nicknameFive, actualNameFive,
      nicknameSix, actualNameSix,
    } = this.props;

    return (
      <div className="ph3 items-start w-33-l w-50-m w-80 center mb4">
        <h1 className="f4 bold mw5">Cats</h1>
        <ul className="list pl0 ml0 mw5 ba b--black-20 br3 bg-white shadow-custom">
          <li className="ph3 pv2 bb b--black-20">{nameOne}</li>
          <li className="ph3 pv2 bb b--black-20">{nicknameTwo}, the <b>{actualNameTwo}</b></li>
          <li className="ph3 pv2 bb b--black-20">{nicknameThree}, the <b>{actualNameThree}</b></li>
          <li className="ph3 pv2 bb b--black-20">{nicknameFour}, the <b>{actualNameFour}</b></li>
          <li className="ph3 pv2 bb b--black-20">{nicknameFive}, the <b>{actualNameFive}</b></li>
          <li className="ph3 pv2">{nicknameSix}, the <b>{actualNameSix}</b></li>
        </ul>
      </div>
    );
  }
}

export default Previous;
