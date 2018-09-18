/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { Component } from 'react';
import MainRouter from '@src/router/MainRouter';

class AppContainer extends Component<{}> {
  render() {
    return (
      <RX.View style={{flex: 1}}>
        <MainRouter/>
      </RX.View>
    );
  }
}

export default AppContainer;
