exports.name = 'currentplaylist';
exports.hidden = false;
exports.enabled = false;
exports.matchStart = false;
exports.handler = function(data) {
    var response = ('Returning playlist data');

    bot.playlistSwitch('Trance', function(data) {
        bot.playlistAll('Trance', function(data2) {
            console.log(data);
            console.log(data2);
            console.log(data2.list[0].metadata);
        });
    });
    output({text: response, destination: data.source, userid: data.userid});
}
