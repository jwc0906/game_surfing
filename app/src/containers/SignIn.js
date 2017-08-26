import React from 'react';
import { connect } from 'react-redux';
import {Authentication} from 'components'


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state={

        };
    }



    render() {
        return (
            <div className="authenticationPage">
              <Authentication
                mode={false}
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
