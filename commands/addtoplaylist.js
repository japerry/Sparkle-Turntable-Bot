//Snags a song to the bot's playlist

exports.name = 'addtoplaylist';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
	if(admincheck(data.userid)) {
        if(currentsong.djid != config.botinfo.userid) {
            bot.snag();
            bot.playlistAll('Trance', function (data) {
                bot.playlistAdd('Trance', currentsong._id, data.list.length);
            });
            output({text: 'Snagging this song, ' + data.name + '!', destination: data.source, userid: data.userid});
            bot.playlistSwitch('blank');
        }
	}
}