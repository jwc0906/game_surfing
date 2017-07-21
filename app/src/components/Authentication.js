import React from 'react';
import { Link } from 'react-router'

import Parse from 'parse';


class Authentication extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
              user_email: "",
              user_pw: "",
              user_name: ""
            };
        }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleKeyPress(e) {
        if(e.charCode ===13 ){
            if(this.props.mode) {
                //this.handleLogin();
            } else {
                //this.handleRegister();
            }
        }
    }



    render() {
      const signupInputBoxes = (
          <div>
              <div className="input-field col l12">
                  <label>Email</label>
                  <input
                  name="user_email"
                  type="email"
                  className="validate"
                  value={this.state.user_email}
                  onChange={this.handleChange}
                  />
              </div>
              <div className="input-field col l12">
                  <label>Password</label>
                  <input
                  name="user_pw"
                  type="password"
                  className="validate"
                  value={this.state.user_pw}
                  onChange={this.handleChange}/>
              </div>
              <div className="input-field col l12">
                  <label>이름</label>
                  <input
                  name="user_name"
                  type="text"
                  className="validate"
                  value={this.state.user_name}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}/>
              </div>
          </div>
      );

      const signupView = (
        <div>
          <div className="card-content">
               <div className="row">
                   { signupInputBoxes }
                   <a onClick={this.handleRegister} className="waves-effect waves-light btn">제출</a>
               </div>
           </div>
           <div className="footer">
               <div className="card-content">
                   <div className="right" >
                   이미 가입하셨나요? <Link to="/signin">로그인 하기</Link>
                   </div>
               </div>
           </div>
         </div>
     );

      const signinInputBoxes = (
          <div>
              <div className="input-field col l12">
                  <label>Email</label>
                  <input
                  name="user_email"
                  type="email"
                  className="validate"
                  value={this.state.user_email}
                  onChange={this.handleChange}
                  />
              </div>
              <div className="input-field col l12">
                  <label>Password</label>
                  <input
                  name="user_pw"
                  type="password"
                  className="validate"
                  value={this.state.user_pw}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}/>
              </div>
          </div>
      );

      const signinView = (
          <div className="row">
              <div className="card-content">
                  <div className="row">
                      { signinInputBoxes }
                      <a onClick={this.handleLogin} className="waves-effect waves-light btn">제출</a>
                  </div>
              </div>
          </div>
      );


        return (
          <div className="container">
            <a className="title">G surf</a>
            <p>게임을 찾는 가장 빠른 방법</p>

            <div className="auth">
                <div className="card">
                    <div className="header blue white-text center">
                        <div className="card-content">{this.props.mode ? "회원가입":"로그인" }</div>
                    </div>
                    {this.props.mode ? signupView : signinView }

                </div>
            </div>

          </div>

        );
    }
}

Authentication.propTypes = {
};

Authentication.defaultProps = {
}

export default Authentication;
