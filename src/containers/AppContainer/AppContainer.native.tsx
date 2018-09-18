/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { Component } from 'react';
import AppDrawerNavigator from '@src/navigation/appDrawer/appDrawer';

class AppContainer extends Component<{}> {
  render() {
    return (
      <RX.View style={{flex: 1}}>
        <AppDrawerNavigator />
      </RX.View>
    );
  }
}

export default AppContainer;
