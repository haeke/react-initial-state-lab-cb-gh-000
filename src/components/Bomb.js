// Bomb Component Code Goes Here
import React, { Component } from 'react';

class Bomber extends Component {
  constructor() {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        {this.state.secondsLeft} seconds left before I go Boom!
      </div>
    );
  }
}

export default Bomber;