import { createStackNavigator } from 'react-navigation';
import SecondScreen from '@src/navigation/secondStack/screens/SecondScreen';

export default createStackNavigator({
  Home: {
    screen: SecondScreen
  },
});
