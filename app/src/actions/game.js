import {
    GAME_LIST,
    GAME_LIST_SUCCESS,
    GAME_LIST_FAILURE,
    GAME_LIST_RESET_SUCCESS,

    GAME_STAR,
    GAME_STAR_SUCCESS,
    GAME_STAR_FAILURE,

    GAME_SEARCH,
    GAME_SEARCH_SUCCESS,
    GAME_SEARCH_FAILURE,
    GAME_SEARCH_RESET_SUCCESS,

    MY_GAME,
    MY_GAME_SUCCESS,
    MY_GAME_FAILURE,
    MY_GAME_RESET_SUCCESS,
} from './ActionTypes'
import Parse from 'parse';

Parse.initialize("game_reco");
Parse.serverURL = 'http://localhost:1337/parse'


export function gameListRequest(isInitial, order, last_value) {
    return (dispatch) => {

      console.log("Current user:")
      console.log(Parse.User.current())

      return Parse.Cloud.run("getGameList", {
          //here you can pass the function request parameters
          isInitial: isInitial,
          order: order,
          last_value: last_value
      }).then(function(results) {
          //here you will handle the returned results (if function returned response.success())
          dispatch(gameListSuccess(results));
          console.log("GameList results:")
          console.log(results);
      }, function(error) {
          //handle errors if called function returned response.error()
          dispatch(gameListFailure());
          console.error("error");
          console.error(error);
      }).catch((error)=>{
        console.log("catch error")
        console.log(error)
      })





        /*
        var Game = Parse.Object.extend("Game");
        var query = new Parse.Query(Game);

        if(isInitial){
          query.ascending(order).limit(6)
        }else{
          console.log("gggggg")
          query.ascending(order).greaterThan(order, last_value).limit(6)
        }

        return query.find({
          success: function(results) {
            console.log("results")
            console.log(results)
            dispatch(gameListSuccess(results, isInitial));
          },
          error: function(error) {
            dispatch(gameListFailure());
          }
        }
        */

    };
}

export function gameList() {
    return {
        type: GAME_LIST
    };
}

export function gameListSuccess(data) {
    return {
        type: GAME_LIST_SUCCESS,
        data
    };
}

export function gameListFailure() {
    return {
        type: GAME_LIST_FAILURE
    };
}

/* GAME TOGGLE STAR */
export function gameStarRequest(game, score, index) {
    return (dispatch) => {

        dispatch(gameStar())

        // TO BE IMPLEMENTED
        var Star = Parse.Object.extend("Star");
        var star = new Star();

        var user = Parse.User.current();


        var Game = Parse.Object.extend("Game");
        var query = new Parse.Query(Game);

        query.get(game, {
          success: function(gameObject) {
            star.set("user", user)
            star.set("game", gameObject)
            star.set("score", score)

            return star.save(null, {
              success: function(star) {
                dispatch(gameStarSuccess(score, index));
              },
              error: function(star, error) {
                dispatch(gameStarFailure(error.code));
              }
            });
          },
          error: function(game, error) {
            dispatch(gameStarFailure(error.code));
          }
        });




    };
}

export function gameStar() {
    return {
        type: GAME_STAR
    };
}

export function gameStarSuccess(score, index) {
    return {
        type: GAME_STAR_SUCCESS,
        score,
        index
    };
}

export function gameStarFailure(error) {
    return{
        type: GAME_STAR_FAILURE,
        error
    };
}

export function gameListReset() {
    console.log("gameListReset")
    return (dispatch) => {

      return new Promise(
          (resolve, reject)=> {
              dispatch(gameListResetSuccess())
              resolve();
          }
      );

        //return dispatch(gameListResetSuccess());
    };
}

export function gameListResetSuccess() {
    console.log("gameListResetSuccess")
    return{
        type: GAME_LIST_RESET_SUCCESS
    };
}

////////game search///////////////


export function gameSearchRequest(isInitial, order, last_value, game_name, paltform, price, year, genre) {

    console.log("gameSearchReaquest action start")
    return (dispatch) => {
      console.log("isInitial:", isInitial)
      console.log("order", order)
      console.log("last_value", last_value)

      console.log("game_name", game_name)
      console.log(paltform)
      console.log(price)
      console.log(year)
      console.log(genre)

      dispatch(gameSearch())

      return Parse.Cloud.run("getGameSearch", {
          //here you can pass the function request parameters
          isInitial: isInitial,
          order: order,
          last_value: last_value,
          game_name: game_name,
          platform: paltform,
          price: price,
          year: year,
          genre: genre

      }).then(function(results) {
          //here you will handle the returned results (if function returned response.success())
          dispatch(gameSearchSuccess(results));
          console.log("GameList results:")
          console.log(results);
      }, function(error) {
          //handle errors if called function returned response.error()
          dispatch(gameSearchFailure());
          console.error("error");
          console.error(error);
      }).catch((error)=>{
        console.log("catch error")
        console.log(error)
      })

        //return dispatch(gameListResetSuccess());
    };
}

export function gameSearch() {
    console.log("gameSearchRequest")
    return{
        type: GAME_SEARCH
    };
}

export function gameSearchSuccess(data) {
    console.log("gameSearchRequestSuccess")
    return {
        type: GAME_SEARCH_SUCCESS,
        data
    };
}

export function gameSearchFailure() {
    console.log("gameSearchRequestFailure")
    return{
        type: GAME_SEARCH_FAILURE
    };
}

export function gameSearchReset() {
    console.log("gameSearchReset")
    return (dispatch) => {

      return new Promise(
          (resolve, reject)=> {
              dispatch(gameSearchResetSuccess())
              resolve();
          }
      );

        //return dispatch(gameListResetSuccess());
    };
}

export function gameSearchResetSuccess() {
    console.log("gameSearchResetSuccess")
    return{
        type: GAME_SEARCH_RESET_SUCCESS
    };
}


///////MY GAME_LIST

export function myGameRequest(isInitial, order, last_value) {

    console.log("myGameReaquest action start")
    return (dispatch) => {
      console.log("isInitial:", isInitial)
      console.log("order", order)
      console.log("last_value", last_value)

      dispatch(myGame())

      return Parse.Cloud.run("getMyGame", {
          //here you can pass the function request parameters
          isInitial: isInitial,
          order: order,
          last_value: last_value

      }).then(function(results) {
          //here you will handle the returned results (if function returned response.success())
          dispatch(myGameSuccess(results));
          console.log("myGameList results:")
          console.log(results);
      }, function(error) {
          //handle errors if called function returned response.error()
          dispatch(myGameFailure());
          console.error("error");
          console.error(error);
      }).catch((error)=>{
        console.log("catch error")
        console.log(error)
      })
    };
}

export function myGame() {
    console.log("myGameRequest")
    return{
        type: MY_GAME
    };
}

export function myGameSuccess(data) {
    console.log("myGameRequestSuccess")
    return {
        type: MY_GAME_SUCCESS,
        data
    };
}

export function myGameFailure() {
    console.log("myGameRequestFailure")
    return{
        type: MY_GAME_FAILURE
    };
}

export function myGameReset() {
    console.log("myGameReset")
    return (dispatch) => {

      return new Promise(
          (resolve, reject)=> {
              dispatch(myGameResetSuccess())
              resolve();
          }
      );

    };
}

export function myGameResetSuccess() {
    console.log("myGameResetSuccess")
    return{
        type: MY_GAME_RESET_SUCCESS
    };
}
