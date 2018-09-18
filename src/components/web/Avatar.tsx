/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { Component } from 'react';

class Avatar extends Component<{}> {
  render() {
    return (
      <RX.View style={{width: 80, height: 80, backgroundColor: 'red'}} />
    );
  }
}

export default Avatar;
