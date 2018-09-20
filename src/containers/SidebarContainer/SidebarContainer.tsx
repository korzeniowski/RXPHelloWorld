/** @jsx RX.createElement */
import * as RX from 'reactxp';
import LinkButton from '@components/LinkButton/LinkButton';

const styles = {
  button: RX.Styles.createButtonStyle({
    backgroundColor: '#cccccc',
    padding: 4,
    margin: 2,
  }),
  buttonText: RX.Styles.createTextStyle({
    color: '#000000'
  })
}

class SidebarContainer extends RX.Component<RX.CommonProps, RX.Stateless> {
  render() {
    return (
      <RX.View style={{alignItems: 'flex-start'}}>
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
