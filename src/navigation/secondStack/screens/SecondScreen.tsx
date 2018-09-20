/** @jsx RX.createElement */
import * as RX from 'reactxp';
import SecondContainer from '@src/containers/SecondContainer/SecondContainer';

class SecondScreen extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <SecondContainer />
    );
  }
}

export default SecondScreen;
