import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
} from './ActionTypes';
import Parse from 'parse';

Parse.initialize("game_reco");
Parse.serverURL = 'http://localhost:1337/parse'

/* ====== AUTH ====== */

/* LOGIN */
export function loginRequest(username, password) {
    return (dispatch) => {
            dispatch(login());

            return Parse.User.logIn(username, password, {
              success: function(user) {
                console.log("login sucess")
                dispatch(loginSuccess(username));
              },
              error: function(user, error) {
                console.log("login fail")
                Materialize.toast("Incorrect username or password", 3000);
                dispatch(loginFailure());
              }
            })

    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
export function registerRequest(username, password, email) {
    return (dispatch) => {
        // inform register API is starting
        dispatch(register());

        var user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);

        return user.signUp(null, {
            success: function(user) {
              dispatch(registerSuccess());
            },
            error: function(user, error) {
                dispatch(registerFailure(error.code));
            }
        });
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


/* GET STATUS */
export function getStatusRequest() {
    return (dispatch) => {
        dispatch(getStatus())

        return Parse.User.currentAsync().then((user)=>{
          if(user){
            dispatch(getStatusSuccess(user.username));
            console.log("currentUser:")
            console.log(user)
          }else{
            dispatch(getStatusFailure());
            console.log("else "+user)
          }
        })



    };
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(username) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        username
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}

/* Logout */
export function logoutRequest() {
    return (dispatch) => {
        return Parse.User.logOut().then(() => {
            dispatch(logout());
        }).catch((err)=>{
          console.log(err)
        }
        );
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}
