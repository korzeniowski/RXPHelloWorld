import * as RX from 'reactxp';
import { SFC } from 'react';
import MainScreen from '@src/navigation/mainStack/screens/MainScreen';
import SecondMainScreen from '@src/router/screens/SecondMainScreen';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const MainRouter: SFC<{}> = () => (
  <Router>
    <RX.View style={{flex: 1}}>
      <Route exact path="/" component={MainScreen}/>
      <Route path="/second" component={SecondMainScreen}/>
    </RX.View>
  </Router>
);


export default MainRouter;