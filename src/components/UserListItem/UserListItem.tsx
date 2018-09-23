/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { PureComponent } from 'react';
import styles from './styles';
import User from '@src/types/user';

interface Props {
  user: User;
  onPress?: () => void;
}

class UserListItem extends PureComponent<Props> {
  render() {
    return (
      <RX.View style={styles.listRow} onPress={this.props.onPress}>
        <RX.Image
          source={this.props.user.picture.medium}
          style={styles.userAvatar}
        />
        <RX.Text style={styles.userName}>
          {this.props.user.name.first} {this.props.user.name.last}
        </RX.Text>
      </RX.View>
    );
  }
}

export default UserListItem;
