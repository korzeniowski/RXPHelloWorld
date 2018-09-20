/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { PureComponent } from 'react';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Text } from 'react-native';
import styles from './styles';

class ListItem extends PureComponent<{}> {
  render() {
    return (
      <SwipeListView
        useFlatList
        data="ASDasdasd"
        renderItem={ () => (
            <RX.View style={styles.listRow}>
                <Text>I am in a SwipeListView</Text>
            </RX.View>
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

export default ListItem;
