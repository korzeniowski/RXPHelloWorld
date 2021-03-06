import * as RX from 'reactxp';
import MainScreen from '@src/router/screens/MainScreen';
import SecondScreen from '@src/router/screens/SecondScreen';
import UserDetailsScreen from '@src/router/screens/UserDetailsScreen';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import SidebarContainer from '@src/containers/SidebarContainer/SidebarContainer';
import styles from '@src/router/styles';

class MainRouter extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <Router>
        <RX.View style={{flex: 1, flexDirection: 'row'}}>
          <RX.View style={styles.sidebarContainer}>
            <SidebarContainer />
          </RX.View>
          <RX.View style={{flex: 1}}>
            <Route exact path="/" component={MainScreen}/>
            <Route exact path="/second" component={SecondScreen}/>
            <Route path="/user" component={UserDetailsScreen}/>
          </RX.View>
        </RX.View>
      </Router>
    )
  }
}

export default MainRouter;
