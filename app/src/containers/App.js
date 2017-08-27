import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { logoutRequest } from 'actions/authentication';

import { Header } from 'components';



class App extends React.Component {

    constructor(props) {
          super(props);
          this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
      this.props.logoutRequest().then(
        ()=>{

                  Materialize.toast('로그아웃 되었습니다.', 5000);
                  browserHistory.push('/');
                  return true;

        }
      )
    }

    render(){
        let re = /(gamefeed|mygames)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
                { isAuth ?  <Header onLogout={this.handleLogout}/> : undefined}
                { this.props.children }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      logoutRequest: () => {
          return dispatch(logoutRequest());
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
