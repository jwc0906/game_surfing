import React from 'react';
import { Link } from 'react-router'

import Parse from 'parse';


class Authentication extends React.Component {

    constructor(props) {
            super(props);

            this.state = {
              user_id: "",
              user_pw: "",
              user_pw_check: "",
              user_email: ""
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
            this.handleRegister = this.handleRegister.bind(this);
            this.handleKeyPress = this.handleKeyPress.bind(this);
        }

    handleLogin() {
        let id = this.state.user_id;
        let pw = this.state.user_pw;

        this.props.onLogin(id, pw);
    }

    handleRegister() {
        let id = this.state.user_id;
        let pw = this.state.user_pw;
        let pw_check = this.state.user_pw_check;
        let email = this.state.user_email;

        this.props.onRegister(id, pw, pw_check, email).then(
            (success) => {
                if(!success) {
                }
            }
        );
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleKeyPress(e) {
        if(e.charCode ===13 ){
            if(this.props.mode) {
              this.handleRegister();
            } else {
              this.handleLogin();
            }
        }
    }



    render() {
      const signupInputBoxes = (
          <div>
              <div className="input-field col l12">
                  <label>아이디</label>
                  <input
                  name="user_id"
                  type="text"
                  className="validate"
                  value={this.state.user_id}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}/>
              </div>
              <div className="input-field col l12">
                  <label>비밀번호</label>
                  <input
                  name="user_pw"
                  type="password"
                  className="validate"
                  value={this.state.user_pw}
                  onChange={this.handleChange}/>
              </div>
              <div className="input-field col l12">
                  <label>비밀번호 확인</label>
                  <input
                  name="user_pw_check"
                  type="password"
                  className="validate"
                  value={this.state.user_pw_check}
                  onChange={this.handleChange}/>
              </div>
              <div className="input-field col l12">
                  <label>이메일</label>
                  <input
                  name="user_email"
                  type="email"
                  className="validate"
                  value={this.state.user_email}
                  onChange={this.handleChange}
                  />
              </div>
          </div>
      );

      const signupView = (
        <div>
          <div className="card-content">
               <div className="row margin_botttom_zero">
                   { signupInputBoxes }
                   <a onClick={this.handleRegister} className="cyan accent-4 waves-effect waves-light btn">확인</a>
               </div>
           </div>

           <div className="card-content">
             <div className="row margin_botttom_zero">
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
                  <label>아이디</label>
                  <input
                  name="user_id"
                  type="text"
                  className="validate"
                  value={this.state.user_id}
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
          <div>

            <div className="card-content">
                <div className="row margin_botttom_zero">
                    { signinInputBoxes }
                    <a onClick={this.handleLogin} className="cyan accent-4 waves-effect waves-light btn">확인</a>
                </div>
            </div>

            <div className="card-content">
              <div className="row margin_botttom_zero">
                <div className="right" >
                아직 가입하지 않았나요? <Link to="/signup">회원가입 하기</Link>
                </div>
              </div>
            </div>
          </div>
      );


        return (
          <div className="container intro">
            <Link className="title" to="/signup">G <span className="cyan-text text-accent-4">surf</span></Link>

            <p className="sub_title">원하는 게임을 찾는 가장 빠른 방법</p>
            <div className="auth">
                <div className="card">
                    <div className="header cyan accent-1 center">
                        <div className="card-content">{this.props.mode ? "간단한 회원가입 후 시작하기":"로그인" }</div>
                    </div>
                    {this.props.mode ? signupView : signinView }

                </div>
            </div>


          </div>

        );
    }
}

Authentication.propTypes = {
  mode: React.PropTypes.bool,
  onLogin: React.PropTypes.func,
  onRegister: React.PropTypes.func
};

Authentication.defaultProps = {
  mode: true,
  onLogin: (id, pw) => { console.error("onLogin not defined"); },
  onRegister: (id, pw, email) => { console.error("onRegister not defined"); }
}

export default Authentication;
