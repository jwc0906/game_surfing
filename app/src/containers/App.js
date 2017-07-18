import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Header } from 'components';



class App extends React.Component {

    constructor(props) {
          super(props);
    }


    render(){
        let re = /(signin|signup)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
                { isAuth ? undefined : <Header/>}
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
