import React from 'react';

import Parse from 'parse';
import { SmallList } from 'components';

class MyGames extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
            };
        }



    render() {

        const head=(
            <div className="myGameHead">
              <div className="card">
                <p>동길홍</p>

                <nav>
                  <div className="nav-wrapper cyan accent-4">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                      <li><a href="#">재밌을듯</a></li>
                      <li><a href="#">별로일듯</a></li>
                      <li><a href="#">해본게임</a></li>
                    </ul>
                  </div>
                </nav>


              </div>

              <SmallList/>

            </div>
        );

        return (
          <div>
            {head}
          </div>

        );
    }
}

MyGames.propTypes = {
};

MyGames.defaultProps = {
}

export default MyGames;
