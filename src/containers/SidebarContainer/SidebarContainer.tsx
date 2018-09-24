/** @jsx RX.createElement */
import * as RX from 'reactxp';
import LinkButton from '@components/LinkButton/LinkButton';

const styles = {
  button: RX.Styles.createButtonStyle({
    padding: 10,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  }),
  buttonText: RX.Styles.createTextStyle({
    color: '#000000',
  }),
  sidebarContainer: RX.Styles.createViewStyle({
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  })
}

class SidebarContainer extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <RX.View style={styles.sidebarContainer}>
        <LinkButton style={styles.button} route="/">
          <RX.Text style={styles.buttonText}>MAIN</RX.Text>
        </LinkButton>
        <LinkButton style={styles.button} route="/second">
          <RX.Text style={styles.buttonText}>SECOND</RX.Text>
        </LinkButton>
      </RX.View>
    );
  }
}

export default SidebarContainer;
