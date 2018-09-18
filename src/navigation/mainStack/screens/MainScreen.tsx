/** @jsx RX.createElement */
import * as RX from 'reactxp';
import MainScreenContainer from '@src/containers/MainScreenContainer';

class MainScreen extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <MainScreenContainer />
    );
  }
}

export default MainScreen;
