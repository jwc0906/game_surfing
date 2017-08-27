import React from 'react';
import { connect } from 'react-redux';
import {Authentication} from 'components'


import { registerRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';

import Parse from 'parse';
Parse.initialize("game_reco");
Parse.serverURL = 'http://localhost:1337/parse'


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentWillMount() {
      var currentUser = Parse.User.current();
      if (currentUser) {
        browserHistory.push('/gamefeed');
      } else {
      }
    }

    handleRegister(id, pw, pwCheck, email) {

        return this.props.registerRequest(id, pw, pwCheck, email).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    Materialize.toast("회원가입 되었습니다! 로그인 해주세요.", 2000);
                    browserHistory.push('/signin');
                    return true;
                }
            }
        ).catch(function (reason) {
          }
        )
    }



    render() {
        return (
            <div className="authenticationPage">
              <Authentication
                mode={true}
                onRegister={this.handleRegister}
              />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      status: state.authentication.register.status,
      error: state.authentication.register.error
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      registerRequest: (id, pw, pwCheck, email) => {
          return dispatch(registerRequest(id,pw,pwCheck,email));
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
