/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { PureComponent } from 'react';
import styles from './styles';
import User from '@src/types/user';

interface Props {
  user: User;
}

class UserProfile extends PureComponent<Props> {
  render() {
    return (
      <RX.View style={styles.container}>
        <RX.Image
          source={this.props.user.picture.medium}
          style={styles.userAvatar}
        />
        <RX.Text style={styles.textStyle}>
          {this.props.user.name.first} {this.props.user.name.last}
        </RX.Text>
        <RX.Text style={styles.textStyle}>
          {this.props.user.email}
        </RX.Text>
      </RX.View>
    );
  }
}

export default UserProfile;
