/** @jsx RX.createElement */
import * as RX from 'reactxp';
import User from '@src/types/user';
import UserProfile from '@src/components/UserProfile/UserProfile';

interface Props {
  user: User;
}

class UserDetailsContainer extends RX.Component<Props, RX.Stateless> {
  render() {
    return (
      <RX.View>
        <UserProfile user={this.props.user}/>
      </RX.View>
    );
  }
}

export default UserDetailsContainer;
