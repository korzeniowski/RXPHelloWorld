/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { PureComponent } from 'react';

class ListItem extends PureComponent<{}> {
  render() {
    return (
      <RX.View style={{width: 80, height: 80, backgroundColor: '#cccccc'}} />
    );
  }
}

export default ListItem;
