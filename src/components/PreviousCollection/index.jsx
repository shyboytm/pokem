import React, { Component } from 'react';

import Previous from '../Previous';

class PreviousCollection extends Component {
  render() {

    return (
      <div id="previous" className="pv5-ns pv3 center content-end flex flex-wrap cf">
        <div className="w-100 mb4 content-end flex flex-wrap">
          <Previous nameOne="Italic" />
        </div>
      </div>
    );
  }
}

export default PreviousCollection;
