import React from 'react';
import { connect } from 'react-redux';
import { Filter, BigList } from 'components';


class GameFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state={

        };
    }



    render() {
        return (
            <div className="container">
              <div className="row">

                  <Filter/>

                <div className="col m9 offset-m3">
                  <BigList/>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameFeed);
