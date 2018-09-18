/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { NavigationContainerComponent, SafeAreaView } from 'react-navigation';

import AppDrawerNavigator from '@src/navigation/appDrawer/appDrawer';
import NavigationService from '@src/navigation/NavigationService';

class AppContainer extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AppDrawerNavigator ref={(navigatorRef: NavigationContainerComponent) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </SafeAreaView>
    );
  }
}

export default AppContainer;
