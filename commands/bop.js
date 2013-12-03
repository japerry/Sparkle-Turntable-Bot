exports.name = ':beers:';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = true;
exports.handler = function(data) {
  //my room is idiots
  if (admincheck(data.userid)) {
    bot.speak("This song is awesome!");
    bot.upvote();
  }
}