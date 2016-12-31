import React, { Component } from 'react';

import Header from '../Header';
import CurrentCollection from '../CurrentCollection';

class Home extends Component {
  render() {
    return (
      <div id="home" className="bg-black-05">
        <Header />
        <div id="home-content" className="pv4-ns pv3 mw8 center w-90-ns w-100">
          <CurrentCollection />
        </div>
      </div>
    );
  }
}

export default Home;
