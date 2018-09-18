/** @jsx RX.createElement */
import * as RX from 'reactxp';
import MainRouter from '@src/router/MainRouter';

class AppContainer extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <RX.View style={{flex: 1}}>
        <MainRouter/>
      </RX.View>
    );
  }
}

export default AppContainer;
