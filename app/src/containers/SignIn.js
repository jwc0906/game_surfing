import React from 'react';
import { connect } from 'react-redux';
import {Authentication} from 'components'

import { loginRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';


import Parse from 'parse';
Parse.initialize("game_reco");
Parse.serverURL = 'http://localhost:1337/parse'

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillMount() {
      var currentUser = Parse.User.current();
      if (currentUser) {
        browserHistory.push('/');
      } else {
      }
    }

    handleLogin(id, pw) {
        return this.props.loginRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                  /*
                    let loginData = {
                        isLoggedIn: true,
                        username: id
                    };
                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    */
                        Materialize.toast('로그인 되었습니다.  ' + id, 5000)
                        location.href = "http://localhost:3000/gamefeed";
                }
            }
        )
    }

    render() {
        return (
            <div className="authenticationPage">
              <Authentication
                mode={false}
                onLogin={this.handleLogin}
              />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      status: state.authentication.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      loginRequest: (id, pw) => {
          return dispatch(loginRequest(id,pw));
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
