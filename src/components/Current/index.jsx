import React, { Component } from 'react';

import TypeTag from '../TypeTag';

class Current extends Component {
  render() {

    const {
      title,
      currentImg,
      currentAlt,
      currentNameColor,
      currentName,
      currentActualName,
      currentNumber,
      typeNameOne,
      typeBackgroundOne,
      typeNameTwo,
      typeBackgroundTwo,
      nature,
      ability,
      item } = this.props;

    return (
      <div className="ph3 items-start w-33-l w-50-m w-80 center mb4">
        <div className="pt3 shadow-custom bg-white w-100 br3 ba b--black-10">
          <div id="team-pokemon" className="tc ph4 pv3">
            <img src={currentImg} className="current-sprite center" alt={currentAlt} />
            <h2 className={currentNameColor}>{currentName}</h2>
            <h3 className="fw4"><span>{currentActualName} -</span> #{currentNumber}</h3>
            <TypeTag typeName={typeNameOne} typeBackground={typeBackgroundOne} />
            <TypeTag typeName={typeNameTwo} typeBackground={typeBackgroundTwo} />
            <dl className="lh-copy tl">
              <dt className="f6 b">Nature</dt>
              <dd className="ml0 black-70">{nature}</dd>
              <dt className="f6 b mt2">Ability</dt>
              <dd className="ml0 black-70">{ability}</dd>
              <dt className="f6 b mt2">Item</dt>
              <dd className="ml0 black-70">{item}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default Current;
