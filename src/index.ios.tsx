/** @jsx RX.createElement */

import * as RX  from 'reactxp';
import AppContainer from '@src/containers/AppContainer/AppContainer.native';

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<AppContainer />);
