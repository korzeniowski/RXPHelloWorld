/** @jsx RX.createElement */
import * as RX from 'reactxp';

const styles = {
  listRow: RX.Styles.createViewStyle({
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#e4e4e4',
  }),
  userAvatar: RX.Styles.createImageStyle({
    width: 40,
    height: 40,
    borderRadius: 20,
  }),
  userName: RX.Styles.createTextStyle({
    fontSize: 14,
    marginLeft: 20,
    color: '#000000'
  }),
}
export default styles;
