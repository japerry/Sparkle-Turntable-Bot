exports.name = '.songstats';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = true;
exports.handler = function(data) {
    var response = ('searching for song ');
    str = data.text.split(" ");
    bot.searchSong(str[1], function(data) {
       console.log(data);
       console.log(data.docs[0].metadata);
    });
    output({text: response, destination: data.source, userid: data.userid});
}
