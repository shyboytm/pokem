import React, { Component } from 'react';

class Current extends Component {
  render() {

    const { title } = this.props;

    return (
      <div id="sun" className="ph4 items-start w-50-l w-90 center">
        <div className="bg-white">
          <h1>{title}</h1>
          <div id="team-pokemon" className="ph4 pv3 br3 ba b--black-10">
            <img className="bg-black-10" alt="Primarina Sprite" />
            <h2 className="f4">Italic</h2>
            <span><span>Primarina -</span> #123</span>
            <dl className="lh-copy">
              <dt className="f6 b">Nature</dt>
              <dd className="ml0">Sassy</dd>
              <dt className="f6 b mt2">Favorite Movie</dt>
              <dd className="ml0">Primer</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default Current;
