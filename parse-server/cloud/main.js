
Parse.Cloud.define("getGameList", function(request, response) {
  console.log("getGameList comecome!!!!")

  var Game = Parse.Object.extend("Game");
  var gameQuery = new Parse.Query(Game);

  var finalResults=[];

  var Star = Parse.Object.extend("Star");


  /*
  var preStarQuery = new Parse.Query(Star);
  prestarQuery.equalTo("user", user);
  prestarQuery.find().then((preStarResults)=>{
    console.log(preStartResults)
    console.log(preStartResults.length)
    for(var i=0; i< preStartResults.length; i++){
      stared_game_id[i]=preStartResults[i].get('game')
    }
    console.log(stared_game_id)
  */

  //

  var SessionToken= request.user.getSessionToken();



  var Session = Parse.Object.extend("_Session");
  var sessionQuery = new Parse.Query(Session);
  sessionQuery.equalTo('sessionToken', SessionToken).include('user');

  sessionQuery.first({"sessionToken": SessionToken}).then((sesseion)=>{
    console.log("haha")
    console.log(sesseion)
    var user= sesseion.get("user")
    console.log(user)

    var preStarQuery = new Parse.Query(Star);
    preStarQuery.equalTo("user", user);
    preStarQuery.find().then((preStarResults)=>{
      console.log("preStarResults")
      console.log(preStarResults)

      var stared_game_id=[]
      var gidch=0
      for(var i=0; i< preStarResults.length; i++){

        gidch=0;
        for(var j=0; j<stared_game_id.length; j++){
          if(stared_game_id[j]==preStarResults[i].get('game').id){
            gidch=1;
          }
        }
        if(gidch==0){
          stared_game_id.push(preStarResults[i].get('game').id)
        }

      }
      console.log(stared_game_id)



      gameQuery.notContainedIn("objectId", stared_game_id);




    if(request.params.isInitial){
      gameQuery.ascending(request.params.order).limit(6)
    }else{
      gameQuery.ascending(request.params.order).greaterThan(request.params.order, request.params.last_value).limit(6)
    }



      gameQuery.find().then(function(gameResults) {
        console.log("gameResults:")
        console.log(gameResults)





    var starQuery = new Parse.Query(Star);

    starQuery.equalTo("user", user);
    starQuery.containedIn("game", gameResults);
    starQuery.descending("createdAt")

    starQuery.find().then((starResults)=>{

      console.log("starResults:")
      console.log(starResults)



      for(var i in gameResults){
        var ch=0
        for(var j in starResults){
          if(starResults[j].get("game").id==gameResults[i].id){
            console.log("ch==1")
            finalResults[i]={
              _id: gameResults[i].id,
              korean_title: gameResults[i].get("korean_title"),
              english_title: gameResults[i].get("english_title"),
              img_url: gameResults[i].get("img_url"),
              platform: gameResults[i].get("platform"),
              createdAt: gameResults[i].get("createdAt"),
              mystar: starResults[j].get("score")
            }
            ch=1
            break;
          }
        }
        if(ch==0){
          console.log("ch==0")
          finalResults[i]={
            _id: gameResults[i].id,
            korean_title: gameResults[i].get("korean_title"),
            english_title: gameResults[i].get("english_title"),
            img_url: gameResults[i].get("img_url"),
            platform: gameResults[i].get("platform"),
            createdAt: gameResults[i].get("createdAt"),
            mystar:-1
          }
        }
      }
      console.log("finalResults:")
      console.log(finalResults)
      response.success(finalResults);

    }, function(error) {
      response.error("failed")
    });


    }, (error)=>{
      response.error("failed")
    })

    });


  }).catch((error)=>{
    console.log(error)
  })

  });








  Parse.Cloud.define("getGameSearch", function(request, response) {
    console.log("comecome!!!!")
    console.log("request.params")
    console.log(request.params)



    var Game = Parse.Object.extend("Game");
    var gameQuery = new Parse.Query(Game);

    var finalResults=[];

    const platform=["PC", "콘솔"];
    const price=["패키지", "부분유료화", "정액제"];
    const genre=[
      "시뮬레이션", "액션", "슈팅", "RPG",
      "AOS", "RTS", "FPS", "TPS",
      "탄막슈팅", "샌드박스", "스포츠", "레이싱",
      "아케이드", "어드밴쳐", "로그라이크", "리듬",
      "플랫포머", "디펜스", "퍼즐", "보드",
      "웹", "TCG", "생존", "호러",
      "캐쥬얼", "경영", "대전", "잠입",
      "전략"];

    var platform_search=[];
    var price_search=[];
    var genre_search=[];



    if(request.params.game_name!=""){
      gameQuery.contains('english_title', request.params.game_name)
      console.log("game_name equalTo")
    }
    console.log("request.params.platform.length")
    console.log(request.params.platform.length)
    for(var i=0; i<request.params.platform.length; i++){
      console.log("i")
      if(request.params.platform[i]==true){
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        platform_search.push(platform[i])
      }
    }
    if(platform_search.length!=0){
      gameQuery.containsAll("platform", platform_search);
      console.log("platform equalTo")
    }


    for(var i=0; i<request.params.price.length; i++){
      if(request.params.price[i]==true){
        price_search.push(price[i])
      }
    }
    if(price_search.length!=0){
      gameQuery.containsAll("price", price_search);
      console.log("price equalTo")
    }

    console.log("platform_search")
    console.log(platform_search)
    console.log("price_search")
    console.log(price_search)
    console.log("genre_search")
    console.log(genre_search)


    //gameQuery.greaterThan("year", request.params.year[0]);
    //gameQuery.lessThanOrEqualTo("year", request.params.year[1]);


    for(var i=0; i<request.params.genre.length; i++){
      if(request.params.genre[i]==true){
        genre_search.push(genre[i])
      }
    }
    if(genre_search.length!=0){
      gameQuery.containsAll("genre", genre_search);
      console.log("genre equalTo")
    }


    if(request.params.isInitial){
      gameQuery.ascending(request.params.order).limit(6)
    }else{
      gameQuery.ascending(request.params.order).greaterThan(request.params.order, request.params.last_value).limit(6)
    }

      gameQuery.find().then(function(gameResults) {
        console.log("gameResults:")
        console.log(gameResults)


        if (! request.user){
          console.log("user is null !!")
          for(var i in gameResults){
            finalResults[i]={
              _id: gameResults[i].id,
              korean_title: gameResults[i].get("korean_title"),
              english_title: gameResults[i].get("english_title"),
              img_url: gameResults[i].get("img_url"),
              platform: gameResults[i].get("platform"),
              createdAt: gameResults[i].get("createdAt"),
              mystar:-1
            };
          }
          console.log("finalResults")
          console.log(finalResults)
          response.success(finalResults);
          return
        }else{
          console.log("not null user!!!")
        }

        var SessionToken= request.user.getSessionToken();



        var Session = Parse.Object.extend("_Session");
        var sessionQuery = new Parse.Query(Session);
        sessionQuery.equalTo('sessionToken', SessionToken).include('user');

        sessionQuery.first({"sessionToken": SessionToken}).then((sesseion)=>{
          console.log("haha")
          console.log(sesseion)
          var user= sesseion.get("user")
          console.log(user)

          var Star = Parse.Object.extend("Star");
          var starQuery = new Parse.Query(Star);

          starQuery.equalTo("user", user);
          starQuery.containedIn("game", gameResults);
          starQuery.descending("createdAt")

          starQuery.find().then((starResults)=>{

            console.log("starResults:")
            console.log(starResults)



            for(var i in gameResults){
              var ch=0
              for(var j in starResults){
                if(starResults[j].get("game").id==gameResults[i].id){
                  console.log("ch==1")
                  finalResults[i]={
                    _id: gameResults[i].id,
                    korean_title: gameResults[i].get("korean_title"),
                    english_title: gameResults[i].get("english_title"),
                    img_url: gameResults[i].get("img_url"),
                    platform: gameResults[i].get("platform"),
                    createdAt: gameResults[i].get("createdAt"),
                    mystar: starResults[j].get("score")
                  }
                  ch=1
                  break;
                }
              }
              if(ch==0){
                console.log("ch==0")
                finalResults[i]={
                  _id: gameResults[i].id,
                  korean_title: gameResults[i].get("korean_title"),
                  english_title: gameResults[i].get("english_title"),
                  img_url: gameResults[i].get("img_url"),
                  platform: gameResults[i].get("platform"),
                  createdAt: gameResults[i].get("createdAt"),
                  mystar:-1
                }
              }
            }
            console.log("finalResults:")
            console.log(finalResults)
            response.success(finalResults);


          }, (error)=>{
            response.error("failed")
          })

        }).catch((error)=>{
          console.log(error)
        })

      }, function(error) {
        response.error("failed")
      });

    });

//mygame
/*
Parse.Cloud.define("getMyGame", function(request, response) {
  console.log("getMyGame comecome!!!!")

  var Game = Parse.Object.extend("Game");
  var gameQuery = new Parse.Query(Game);

  var finalResults=[];

  var Star = Parse.Object.extend("Star");

  var SessionToken= request.user.getSessionToken();



  var Session = Parse.Object.extend("_Session");
  var sessionQuery = new Parse.Query(Session);
  sessionQuery.equalTo('sessionToken', SessionToken).include('user');

  sessionQuery.first({"sessionToken": SessionToken}).then((sesseion)=>{
    console.log("haha")
    console.log(sesseion)
    var user= sesseion.get("user")
    console.log(user)

    var preStarQuery = new Parse.Query(Star);
    preStarQuery.equalTo("user", user);
    preStarQuery.find().then((preStarResults)=>{
      console.log("preStarResults")
      console.log(preStarResults)

      var stared_game_id=[]
      var gidch=0
      for(var i=0; i< preStarResults.length; i++){

        gidch=0;
        for(var j=0; j<stared_game_id.length; j++){
          if(stared_game_id[j]==preStarResults[i].get('game').id){
            gidch=1;
          }
        }
        if(gidch==0){
          stared_game_id.push(preStarResults[i].get('game').id)
        }

      }
      console.log(stared_game_id)



      gameQuery.containedIn("objectId", stared_game_id);




    if(request.params.isInitial){
      gameQuery.ascending(request.params.order).limit(6)
    }else{
      gameQuery.ascending(request.params.order).greaterThan(request.params.order, request.params.last_value).limit(6)
    }



      gameQuery.find().then(function(gameResults) {
        console.log("gameResults:")
        console.log(gameResults)





    var starQuery = new Parse.Query(Star);

    starQuery.equalTo("user", user);
    starQuery.containedIn("game", gameResults);
    starQuery.descending("createdAt")

    starQuery.find().then((starResults)=>{

      console.log("starResults:")
      console.log(starResults)



      for(var i in gameResults){
        var ch=0
        for(var j in starResults){
          if(starResults[j].get("game").id==gameResults[i].id){
            console.log("ch==1")
            finalResults[i]={
              _id: gameResults[i].id,
              korean_title: gameResults[i].get("korean_title"),
              english_title: gameResults[i].get("english_title"),
              img_url: gameResults[i].get("img_url"),
              platform: gameResults[i].get("platform"),
              createdAt: gameResults[i].get("createdAt"),
              mystar: starResults[j].get("score")
            }
            ch=1
            break;
          }
        }
        if(ch==0){
          console.log("ch==0")
          finalResults[i]={
            _id: gameResults[i].id,
            korean_title: gameResults[i].get("korean_title"),
            english_title: gameResults[i].get("english_title"),
            img_url: gameResults[i].get("img_url"),
            platform: gameResults[i].get("platform"),
            createdAt: gameResults[i].get("createdAt"),
            mystar:-1
          }
        }
      }
      console.log("finalResults:")
      console.log(finalResults)
      response.success(finalResults);

    }, function(error) {
      response.error("failed")
    });


    }, (error)=>{
      response.error("failed")
    })

    });


  }).catch((error)=>{
    console.log(error)
  })

  });

*/

Parse.Cloud.define("getMyGame", function(request, response) {
  console.log("getMyGame comecome!!!!")

  var Game = Parse.Object.extend("Game");
  var gameQuery = new Parse.Query(Game);

  var finalResults=[];

  var Star = Parse.Object.extend("Star");

  var SessionToken= request.user.getSessionToken();



  var Session = Parse.Object.extend("_Session");
  var sessionQuery = new Parse.Query(Session);
  sessionQuery.equalTo('sessionToken', SessionToken).include('user');

  sessionQuery.first({"sessionToken": SessionToken}).then((sesseion)=>{
    console.log("haha")
    console.log(sesseion)
    var user= sesseion.get("user")
    console.log(user)

    var preStarQuery = new Parse.Query(Star);
    preStarQuery.equalTo("user", user);
    preStarQuery.descending("createdAt")
    preStarQuery.include("game")


    preStarQuery.find().then((preStarResults)=>{
      console.log("preStarResults")
      console.log(preStarResults)

      var star_data=[]
      var gidch=0
      for(var i=0; i< preStarResults.length; i++){

        gidch=0;
        for(var j=0; j<star_data.length; j++){
          if(star_data[j].get('game').id==preStarResults[i].get('game').id){
            gidch=1;
          }
        }
        if(gidch==0){
          star_data.push(preStarResults[i])
        }

      }
      console.log("star_data")
      console.log(star_data)





      for(var i in star_data){
        finalResults[i]={
          _id: star_data[i].get('game').id,
          korean_title: star_data[i].get('game').get("korean_title"),
          english_title: star_data[i].get('game').get("english_title"),
          img_url: star_data[i].get('game').get("img_url"),
          platform: star_data[i].get('game').get("platform"),
          createdAt: star_data[i].get('game').get("createdAt"),
          mystar: star_data[i].get("score")
        }
      }


      console.log("finalResults")
      console.log(finalResults)
      response.success(finalResults);




    });


  }).catch((error)=>{
    console.log(error)
  })

  });
