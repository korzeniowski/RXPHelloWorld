/** @jsx RX.createElement */
import * as RX from 'reactxp';

const styles = {
  container: RX.Styles.createViewStyle({
    padding: 20,
  }),
  userAvatar: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 40,
  }),
  textStyle: RX.Styles.createTextStyle({
    fontSize: 20,
    color: '#000000',
    marginTop: 10,
  }),
}
export default styles;
