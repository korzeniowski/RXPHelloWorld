import { createStackNavigator } from 'react-navigation';
import MainScreen from '@src/navigation/mainStack/screens/MainScreen';

export default createStackNavigator({
  Home: {
    screen: MainScreen
  },
});
