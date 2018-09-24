/** @jsx RX.createElement */
import * as RX from 'reactxp';
import UsersList from '@components/UsersList/UsersList';

interface State {
  users: any;
}

const styles = {
  webHeader: RX.Styles.createViewStyle({
    padding: 20,
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'center',
    backgroundColor: '#cccccc',
  }),
  scrollView: RX.Styles.createScrollViewStyle({
    flex: 1,
  })
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
      return <RX.Text>Loading...</RX.Text>
    }
    return (
      <RX.View style={{flex: 1}}>
        {
          RX.Platform.getType() === 'web' ? (
            <RX.View style={styles.webHeader}>
              <RX.Text>Users List</RX.Text>
            </RX.View>
          ) : null
        }
        <RX.ScrollView style={styles.scrollView}>
          <UsersList users={this.state.users.results}/>
        </RX.ScrollView>
      </RX.View>
    );
  }
}

export default MainContainer;
