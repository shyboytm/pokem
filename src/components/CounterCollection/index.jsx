import React, { Component } from 'react';

import Header from '../Header';
import Counter from '../Counter';

class CounterCollection extends Component {
  render() {
    return (
      <div id="teams" className="bg-black-05 pb7">
        <Header />
        <span className="tc db center mt5 black-40">Be careful! Refreshing will break the count.</span>
        <Counter />
      </div>
    );
  }
}

export default CounterCollection;
