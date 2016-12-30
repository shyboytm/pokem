import React, { Component } from 'react';

import Header from '../Header';
import Sun from '../Sun';
import Moon from '../Moon';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <div id="home-content" className="pv5-ns pv4 mw9 center w-90-ns w-100">
          <div className="bg-green">
            <div className="current cf">
              <Sun />
              <Moon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
