/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { createDrawerNavigator } from 'react-navigation';
import SecondStack from '@src/navigation/secondStack/SecondStack';
import MainStack from '@src/navigation/mainStack/MainStack';

const AppDrawerNavigator = createDrawerNavigator({
  'Main view': MainStack,
  'Second view': SecondStack
});

export default AppDrawerNavigator;
