import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_LOGOUT,
    AUTH_LOGOUT_SUCCESS,
    AUTH_LOGOUT_FAILURE
} from './ActionTypes';
import Parse from 'parse';

Parse.initialize("game_reco");
Parse.serverURL = 'http://localhost:1337/parse'

/* ====== AUTH ====== */

/* LOGIN */
export function loginRequest(userid, password) {
    return (dispatch) => {
            dispatch(login());

            return Parse.User.logIn(userid, password, {
              success: function(user) {
                console.log("login sucess")
                dispatch(loginSuccess(user));
                
                return true;
              },
              error: function(user, error) {
                console.log("login error")
                Materialize.toast("잘못된 아이디 또는 비밀번호 입니다.", 3000);
                dispatch(loginFailure());
                return false;
              }
            })

    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(userid) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        userid
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
export function registerRequest(userid, password, passwordCheck,email) {
    return (dispatch) => {
        // inform register API is starting
        dispatch(register());

        if (password!=passwordCheck){
          console.log("password: "+password)
          console.log("passwordCheck: "+passwordCheck)
          return new Promise(
              (resolve, reject)=> {
                  dispatch(registerFailure())
                  Materialize.toast("비밀번호와 비밀번호 확인이 일치하지 않습니다.", 5000);
                  resolve();
              }
          );
        }else{
          var user = new Parse.User();
          user.set("username", userid);
          user.set("password", password);
          user.set("email", email);

          return user.signUp(null, {
              success: function(user) {
                dispatch(registerSuccess());
              },
              error: function(user, error) {
                  Materialize.toast("회원가입 실패하였습니다."+"("+error.message+")", 5000);
                  dispatch(registerFailure(error.code));
              }
          });
        }


    };
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };

}


/* Logout */
export function logoutRequest() {
    return (dispatch) => {
            dispatch(logout());
        return Parse.User.logOut().then(() => {
            dispatch(logoutSuccess());
        }).catch((err)=>{
            dispatch(logoutFailure())
        });
    };
}



export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}

export function logoutSuccess() {
    return {
        type: AUTH_LOGOUT_SUCCESS
    };
}

export function logoutFailure() {
    return {
        type: AUTH_LOGOUT_FAILURE
    };
}
