import React, { Component } from 'react';

class Voting extends Component {
  constructor(props) {
    super(props);
  }

  getPair = () => {
    return this.props.pair || [];
  }

  render() {
    return (
      <div className="voting"
        {this.getPair().map(entry =>
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
        )}
      </div>
    )
  }
}
