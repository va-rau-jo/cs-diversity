import React from 'react';
import {withRouter} from 'react-router';


class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
      this.setState({
          counter: 100
      });
  }

  mapStateToProps = (state) => {
    return {
      user: state.users
    };
  };

  render() {
    return(
      <main>
        <p> hardcore analysis </p> 
      </main>
    );
  };

}

const connectedComponent = withRouter(connect(mapStateToProps))(MyComponent) 

