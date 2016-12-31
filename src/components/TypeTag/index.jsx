import React, { Component } from 'react';

class TypeTag extends Component {
  render() {

    const {
      typeName,
      typeBackground } = this.props;

    return (
      <div className={typeBackground}>
        <span>{typeName}</span>
      </div>
    );
  }
}

export default TypeTag;
