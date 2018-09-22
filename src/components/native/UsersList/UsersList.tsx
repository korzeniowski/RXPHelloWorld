/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { PureComponent } from 'react';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Text } from 'react-native';
import styles from './styles';
import UserListItem from '@src/components/UserListItem/UserListItem';

interface Props {
  users: any;
}

class UsersList extends PureComponent<Props> {
  render() {
    return (
      <SwipeListView
        useFlatList
        data={this.props.users}
        renderItem={ (data: any) => (
          <UserListItem user={data.item} />
        )}
        renderHiddenItem={ () => (
            <RX.View>
                <Text>Left</Text>
                <Text>Right</Text>
            </RX.View>
        )}
        leftOpenValue={75}
        rightOpenValue={0}
      />
    );
  }
}

export default UsersList;
