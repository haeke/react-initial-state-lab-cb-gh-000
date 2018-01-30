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
        {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go Boom!`}
      </div>
    );
  }
}

export default Bomber;