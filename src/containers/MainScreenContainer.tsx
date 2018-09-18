/** @jsx RX.createElement */
import * as RX from 'reactxp';
import Avatar from '@components/Avatar';

class MainScreenContainer extends RX.Component<RX.CommonProps, RX.Stateless> {
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
