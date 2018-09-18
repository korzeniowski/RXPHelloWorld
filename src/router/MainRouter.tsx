import * as RX from 'reactxp';
import { SFC } from 'react';
import MainScreen from '@src/router/screens/MainScreen';
import SecondMainScreen from '@src/router/screens/SecondMainScreen';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const MainRouter: SFC<{}> = () => (
  <Router>
    <RX.View style={{flex: 1}}>
      <Link to="/second">asdasd</Link>
      <Route exact path="/" component={MainScreen}/>
      <Route exact path="/second" component={SecondMainScreen}/>
    </RX.View>
  </Router>
);

export default MainRouter;
