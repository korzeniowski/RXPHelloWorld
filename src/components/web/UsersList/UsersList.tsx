/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { PureComponent } from 'react';
import UserListItem from '@src/components/UserListItem/UserListItem';
import User from '@src/types/user';
import { Link } from 'react-router-dom';
interface Props {
  users: User[];
}

class UsersList extends PureComponent<Props> {
  render() {
    return (
      <RX.View style={{flex: 1}}>
        {
          this.props.users.map((user: User) => {
            return <Link to="/user" key={user.email}><UserListItem user={user}/></Link>
          })
        }
      </RX.View>
    );
  }
}

export default UsersList;
