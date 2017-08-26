import React from 'react';
import Parse from 'parse';
import { BigGameCard } from 'components';

class BigList extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
            };
        }



    render() {

        return (
          <div>
            <BigGameCard/>
            <BigGameCard/>

          </div>

        );
    }
}

BigList.propTypes = {
};

BigList.defaultProps = {
}

export default BigList;
