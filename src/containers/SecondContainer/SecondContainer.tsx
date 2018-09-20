/** @jsx RX.createElement */
import * as RX from 'reactxp';

class SecondContainer extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <RX.View>
        <RX.Text>Second screen</RX.Text>
      </RX.View>
    );
  }
}

export default SecondContainer;
