import React, { Component } from 'react';

import TypeTag from '../TypeTag';

class Current extends Component {
  render() {

    const {
      title,
      currentImg,
      currentAlt,
      currentNameColor,
      typeNameOne,
      typeBackgroundOne,
      typeNameTwo,
      typeBackgroundTwo,
      nature,
      ability,
      item } = this.props;

    return (
      <div className="ph3 items-start w-33-l w-50-m w-100 center mb4">
        <div className="bg-white w-100">
          <div id="team-pokemon" className="ph4 pv3 br3 ba b--black-10">
          <img src={currentImg} className="w3 center" alt={currentAlt} />
            <h2 className={currentNameColor}>Italic</h2>
            <h3 className="fw4"><span>Primarina -</span> #123</h3>
            <TypeTag typeName={typeNameOne} typeBackground={typeBackgroundOne} />
            <TypeTag typeName={typeNameTwo} typeBackground={typeBackgroundTwo} />
            <dl className="lh-copy">
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
