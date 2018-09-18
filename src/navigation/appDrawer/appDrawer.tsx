import { createDrawerNavigator } from 'react-navigation';
import SecondStack from '@src/navigation/secondStack/SecondStack';
import MainStack from '@src/navigation/mainStack/MainStack';
import SidebarContainer from '@src/containers/SidebarContainer';

const AppDrawerNavigator = createDrawerNavigator({
  '/': MainStack,
  '/second': SecondStack
}, {
  contentComponent: SidebarContainer
});

export default AppDrawerNavigator;
