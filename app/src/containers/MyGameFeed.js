import React from 'react';
import { connect } from 'react-redux';
import { MyGames } from 'components';


class MyGameFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state={

        };
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
