import React, { Component } from 'react';

class PokedexItem extends Component {
  render() {

    const {
      nature,
      ability,
      item } = this.props;

    return (
      <div className="ph3 items-start w-25-l w-50-m w-80 center mb4">
        <div className="ba b--black-50 pt3 pb2 ph4 br3">
          <dl className="lh-copy tc">
            <dt className="f5 b">Pokemon Name</dt>
            <dd className="f6 ml0 black-70">Pokemon #</dd>
            <dt className="f6 b mt2">Uncaught</dt>
          </dl>
        </div>
      </div>
    );
  }
}

export default PokedexItem;
