import React from 'react';
import Parse from 'parse';

import { SmallGameCard } from 'components';


class SmallList extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
            };
        }



    render() {

        return (
          <div className="row">
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            <div className="col m3">
              <SmallGameCard/>
            </div>
            
          </div>

        );
    }
}

SmallList.propTypes = {
};

SmallList.defaultProps = {
}

export default SmallList;
