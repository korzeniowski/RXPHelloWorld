/** @jsx RX.createElement */
import * as RX from 'reactxp';
import UsersList from '@components/UsersList/UsersList';

interface State {
  users: any;
}

class MainContainer extends RX.Component<RX.CommonProps, State> {
  constructor(props: RX.CommonProps) {
    super(props);
    this.state = {
      users: null,
    }
  }
  fetchData = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=20`);
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
    this.fetchData().then((response) => this.setState({users: response}));
  }

  render() {
    if(!this.state.users){
      return <RX.Text>Loading</RX.Text>
    }
    console.log(this.state.users);
    return (
      <RX.View>
        {
          RX.Platform.getType() === 'web' ? (
            <RX.Text>Users List</RX.Text>
          ) : null
        }
        <UsersList users={this.state.users.results}/>
      </RX.View>
    );
  }
}

export default MainContainer;
