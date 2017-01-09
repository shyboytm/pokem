import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
      this.state = {
        count: 0
      }
    }

    onClick(e) {
      this.setState({
        count: this.state.count + 1
      });
    }

    render() {
      return (
        <div className="db pa3 w-30-l w-60-m w-90 tc center mv4">
          <span className="tc db center mb5 black-40">Be careful! Refreshing will break the count.</span>
          <div className="bg-red pa4 br4 shadow-custom">
            <h1 className="mt0 white ttu tracked tc f4 mb4 lh-title fw7">Encounter<br/>Counter</h1>
            <div className="bg-white br2 pv3">
              <h1 className="f1">{this.state.count}</h1>
            </div>
            <a onClick={this.onClick.bind(this)}
              className="noselect ph5 pv3 fw9 pointer dib red f3 br-pill bg-white mt4 mb3 shadow-custom">+</a>
          </div>
          <div className="h2 w-100 bg-dark-red nt3 db br--bottom br4 shadow-custom"></div>
        </div>
      )
    }
}
export default Counter;
