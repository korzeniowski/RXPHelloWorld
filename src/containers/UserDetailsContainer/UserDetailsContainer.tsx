/** @jsx RX.createElement */
import * as RX from 'reactxp';

interface Props {
  user: any;
}

class UserDetailsContainer extends RX.Component<Props, RX.Stateless> {
  render() {
    return (
      <RX.View>
        <RX.Text>{this.props.user.name.first} {this.props.user.name.last}</RX.Text>
        <RX.Text>{this.props.user.email}</RX.Text>
      </RX.View>
    );
  }
}

export default UserDetailsContainer;
