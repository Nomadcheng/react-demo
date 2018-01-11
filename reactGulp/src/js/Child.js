import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        and this id the <b>{this.props.name}</b>
      </div>
    );
  }
};
export default Child;
