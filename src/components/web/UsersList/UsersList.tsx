/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { PureComponent } from 'react';
import UserListItem from '@src/components/UserListItem/UserListItem';
import User from '@src/types/user';
interface Props {
  users: User[];
}

class UsersList extends PureComponent<Props> {
  render() {
    return (
      <RX.View>
        {
          this.props.users.map((user: any) => {
            return <UserListItem key={user.cell} user={user}/>
          })
        }
      </RX.View>
    );
  }
}

export default UsersList;
