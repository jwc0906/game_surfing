import React from 'react';
import { connect } from 'react-redux';
import { MyGames } from 'components';
import { browserHistory } from 'react-router';

import Parse from 'parse';
Parse.initialize("game_reco");
Parse.serverURL = 'http://localhost:1337/parse'

class MyGameFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state={

        };
    }

    componentWillMount() {
      var currentUser = Parse.User.current();
      if (currentUser) {
          // do stuff with the user
      } else {
        Materialize.toast("로그인 되어있지 않습니다.", 2000);
        browserHistory.push('/');
      }
    }

    render() {
        return (
            <div className="container">
              <MyGames/>
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyGameFeed);
