/** @jsx RX.createElement */
import * as RX from 'reactxp';
import MainContainer from '@src/containers/MainContainer/MainContainer';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationStackScreenOptions, null>;
}

const buttonStyles = RX.Styles.createButtonStyle({
  padding: 10,
  backgroundColor: '#e2f2f8',
  alignSelf: 'center',
});

const MenuButton = (navigation: any) => (
  <RX.Button style={buttonStyles} onPress={() => navigation.navigation.toggleDrawer()}>
    <RX.Text>Menu</RX.Text>
  </RX.Button>
);

class MainScreen extends RX.Component<Props, RX.Stateless> {
  static navigationOptions = ({ navigation } : { navigation: NavigationScreenProp<NavigationStackScreenOptions, null>} ) => ({
    headerLeft : <MenuButton navigation={navigation} />,
  });
  render() {
    return (
      <MainContainer />
    );
  }
}

export default MainScreen;
