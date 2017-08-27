import React from 'react';
import { Link } from 'react-router'
import Parse from 'parse';


class Header extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
            };
        }



    render() {

        return (
          <div>
          <ul id="dropdown1" className="dropdown-content">
            <li><Link href="/mygamefeed">내 게임</Link></li>
            <li className="divider"></li>
            <li><a onClick={this.props.onLogout}>로그아웃</a></li>
          </ul>

          <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper white">
                  <div className="container">
                      <a href="/gamefeed" className="title">G <span className="cyan-text text-accent-4">surf</span></a>


                      <div className="right">
                          <ul>
                            <li><a className="dropdown-button nav-menu" href="#!" data-activates="dropdown1">
                              동길홍 님<i className="material-icons right">arrow_drop_down</i>
                            </a></li>
                          </ul>
                      </div>
                  </div>
                </div>
            </nav>
          </div>

          </div>
        );
    }
}

Header.propTypes = {
  onLogout: React.PropTypes.func
};

Header.defaultProps = {
  onLogout: () => { console.error("logout function not defined");}
}

export default Header;
