import React, { Component } from 'react';

import Header from '../Header';
import Current from '../Current';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <div id="home-content" className="pv5-ns pv4 mw9 center w-90-ns w-100">
          <div className="">
            <div id="current" className="pv5 center content-end flex flex-wrap cf">
              <Current title="Sun" />
              <Current title="Moon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
