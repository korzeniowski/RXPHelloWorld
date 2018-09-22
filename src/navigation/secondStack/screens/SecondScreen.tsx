/** @jsx RX.createElement */
import * as RX from 'reactxp';
import SecondContainer from '@src/containers/SecondContainer/SecondContainer';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';
interface Props {
  navigation: NavigationScreenProp<NavigationStackScreenOptions, null>;
}
const MenuButton = (navigation: any) => (
  <RX.Button onPress={() => navigation.navigation.toggleDrawer()}>
    <RX.Text>Menu</RX.Text>
  </RX.Button>
);

class SecondScreen extends RX.Component<RX.CommonProps, RX.Stateless> {
  static navigationOptions = ({ navigation } : { navigation: NavigationScreenProp<NavigationStackScreenOptions, null>} ) => ({
    headerLeft : <MenuButton navigation={navigation} />,
  });
  render() {
    return (
      <SecondContainer />
    );
  }
}

export default SecondScreen;
