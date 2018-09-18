/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { Component } from 'react';
import Avatar from '@components/Avatar';

class MainScreenContainer extends Component<{}> {
  render() {
    return (
      <RX.View>
        <RX.Text>Main screen</RX.Text>

        {
          RX.Platform.getType() === 'web' ? (
            <RX.Text>Web text</RX.Text>
          ) : null
        }
        <Avatar/>
      </RX.View>
    );
  }
}

export default MainScreenContainer;
