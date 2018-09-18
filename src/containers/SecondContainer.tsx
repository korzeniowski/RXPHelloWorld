/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { Component } from 'react';

class SecondContainer extends Component<{}> {
  render() {
    return (
      <RX.View>
        <RX.Text>Second screen</RX.Text>
      </RX.View>
    );
  }
}

export default SecondContainer;
