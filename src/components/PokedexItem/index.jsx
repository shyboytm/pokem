import React, { Component } from 'react';

class PokedexItem extends Component {
  render() {

    const {
      caughtOrUncaught,
      pokemonName,
      pokemonNumber
    } = this.props;

    return (
      <div className="ph3 items-start w-20-l w-33-m w-50 center mb4">
        <div className={caughtOrUncaught}>
          {/* <img className="w3 center" alt="Pokemon Sprite" /> */}
          <dl className="lh-copy tc">
            <dt className="f5 b">{pokemonName}</dt>
            <dd className="f6 ml0">{pokemonNumber}</dd>
            <dt className="f6 b mt3 ttu tracked">{caughtOrUncaught}</dt>
          </dl>
        </div>
      </div>
    );
  }
}

export default PokedexItem;
