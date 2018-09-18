/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { Component } from 'react';

class SidebarContainer extends Component<{}> {
  render() {
    return (
      <RX.View>
        <RX.Button
          title="Go to Details"
        />
      </RX.View>
    );
  }
}

export default SidebarContainer;
