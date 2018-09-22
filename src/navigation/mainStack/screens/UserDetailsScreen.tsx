/** @jsx RX.createElement */
import * as RX from 'reactxp';
import UserDetailsContainer from '@src/containers/UserDetailsContainer/UserDetailsContainer';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';
interface Props {
  navigation: NavigationScreenProp<NavigationStackScreenOptions, null>;
}

class UserDetails extends RX.Component<Props, RX.Stateless> {
  render() {
    return (
      <UserDetailsContainer user={this.props.navigation.state.params}/>
    );
  }
}

export default UserDetails;
