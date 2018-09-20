import * as RX from 'reactxp';
import { Link } from 'react-router-dom';

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
      >
        <Link to={route}>{children}</Link>
      </RX.Button>
    );
  }
}

export default LinkButton;
