/** @jsx RX.createElement */
import * as RX from 'reactxp';
import { createStackNavigator } from 'react-navigation';
import MainScreen from '@src/navigation/mainStack/screens/MainScreen';

export default createStackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
