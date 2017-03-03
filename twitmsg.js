console.log("The program is running")
//config file contains keys for account information
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg){
  console.log("follow event");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@' + screenName + ' Thanks for the follow!');
}

function tweetIt(txt){
    var tweet = {
      status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
      if (err){
        console.log("Something went wrong...");
      } else {
        console.log("It Worked!")
      }
    }
}
