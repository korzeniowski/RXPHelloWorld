/** @jsx RX.createElement */
import * as RX from 'reactxp';
import Avatar from '@components/Avatar/Avatar';
import ListItem from '@components/ListItem/ListItem';

class MainContainer extends RX.Component<RX.CommonProps, RX.Stateless> {
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
        <ListItem />
      </RX.View>
    );
  }
}

export default MainContainer;
