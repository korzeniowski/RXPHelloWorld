import * as RX from 'reactxp';
import UserDetailsContainer from '@src/containers/UserDetailsContainer/UserDetailsContainer';
import User from '@src/types/user';

interface State {
  user: User;
}

class UserDetailsScreen extends RX.Component<RX.CommonProps, State> {
  fetchData = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api`);
      return await response.json().then((json) => { return json; });
    } catch (error) {
      return {
        error: {
          type: 'NetworkError',
          code: error.status,
      }};
    }
  }
  componentDidMount = () => {
    this.fetchData().then((response) => this.setState({user: response.results[0]}));
  }
  render() {
    return (
      this.state && this.state.user
      ? <UserDetailsContainer user={this.state.user} />
      : <RX.Text>Loading...</RX.Text>
    );
  }
}

export default UserDetailsScreen;
