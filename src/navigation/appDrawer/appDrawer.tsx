import { createDrawerNavigator } from 'react-navigation';
import SecondStack from '@src/navigation/secondStack/SecondStack';
import MainStack from '@src/navigation/mainStack/MainStack';
import SidebarContainer from '@src/containers/SidebarContainer/SidebarContainer';

const AppDrawerNavigator = createDrawerNavigator({
  '/': MainStack,
  '/second': SecondStack
}, {
  contentComponent: SidebarContainer,
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default AppDrawerNavigator;
