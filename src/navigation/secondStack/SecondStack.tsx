/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { createStackNavigator } from 'react-navigation';
import SecondMainScreen from '@src/navigation/secondStack/screens/SecondMainScreen';

export default createStackNavigator({
  Home: {
    screen: SecondMainScreen
  },
});
