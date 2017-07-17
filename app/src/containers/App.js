import React from 'react';
import { Header } from 'components';
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest } from 'actions/authentication';
import { gameListReset, gameSearchReset, myGameReset } from 'actions/game';

import { browserHistory } from 'react-router';



class App extends React.Component {

    constructor(props) {
          super(props);
          this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
      this.props.getStatusRequest().then(()=>{
        console.log("isValid"+this.props.status.valid)
        console.log("isLoggedIn"+this.props.status.isLoggedIn)
      })


    }

    handleLogout(){
      this.props.logoutRequest().then(
        ()=>{
          this.props.gameListReset().then(()=>{
            this.props.gameSearchReset().then(()=>{
              this.props.myGameReset().then(()=>{
                  Materialize.toast('Good Bye!', 2000);
                  browserHistory.push('/');
                  return true;
              })
            })
          })
        }
      )
    }

    render(){
        let re = /(login|register)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
                { isAuth ? undefined : <Header isLoggedIn={this.props.status.isLoggedIn}
                                               onLogout={this.handleLogout}/>}

                { this.props.children }
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: () => {
            return dispatch(getStatusRequest());
        },
        logoutRequest: () => {
            return dispatch(logoutRequest());
        },
        gameListReset: () => {
            return dispatch(gameListReset());
        },
        gameSearchReset: () => {
            return dispatch(gameSearchReset());
        },
        myGameReset: () => {
            return dispatch(myGameReset());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
