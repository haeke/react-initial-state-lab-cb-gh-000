// Bomb Component Code Goes Here
import React, { Component } from 'react';

class Bomber extends Component {
  constructor() {
    super(props);
    this.state = {
      secondsLeft: props.initialCount,
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.secondsLeft === 0 ? 'Boom!' : `${this.props.initialCount} seconds left before I go Boom!`}</p>
      </div>
    );
  }
}

export default Bomber;