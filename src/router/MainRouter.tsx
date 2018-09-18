import * as RX from 'reactxp';
import MainScreen from '@src/router/screens/MainScreen';
import SecondMainScreen from '@src/router/screens/SecondMainScreen';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import SidebarContainer from '@src/containers/SidebarContainer';

class MainRouter extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <Router>
        <RX.View style={{flex: 1, flexDirection: 'row'}}>
          <RX.View style={{flex: 0, flexBasis: 350}}>
            <SidebarContainer />
          </RX.View>
          <RX.View style={{flex: 1}}>
            <Route exact path="/" component={MainScreen}/>
            <Route exact path="/second" component={SecondMainScreen}/>
          </RX.View>
        </RX.View>
      </Router>
    )
  }
}

export default MainRouter;
