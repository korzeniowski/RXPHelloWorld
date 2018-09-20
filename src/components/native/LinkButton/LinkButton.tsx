/** @jsx RX.createElement */
import * as RX from 'reactxp';
import NavigationService from '@src/navigation/NavigationService';

interface Props extends RX.CommonProps {
  style?: RX.Types.ButtonStyleRuleSet;
  route: string;
}

class LinkButton extends RX.Component<Props, RX.Stateless> {
  render() {
    const { style, route, children } = this.props;
    return (
      <RX.Button
        style={style}
        onPress={() => NavigationService.navigate(route)}
      >
        {children}
      </RX.Button>
    );
  }
}

export default LinkButton;
